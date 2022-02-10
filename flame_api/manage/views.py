#! -*- coding: utf-8 -*-

# Description    Flame API manage views
#
# Authors:       Manuel Pastor (manuel.pastor@upf.edu)
#                Ignacio Pasamontes 
#
# Copyright 2018-2020 Manuel Pastor
#
# This file is part of Flame
#
# Flame is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation version 3.
#
# Flame is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with Flame. If not, see <http://www.gnu.org/licenses/>.

import os
import shutil
import json
import yaml
import time
import tempfile

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework import status

from django.core.files.storage import FileSystemStorage
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from flame import manage
from flame.util import utils, config, flthread
from wsgiref.util import FileWrapper

class ListModels(APIView):
    """
    Model list
    """
    #permission_classes = (IsAuthenticated,)
    def get(self, request):
        models = manage.action_dir()
        return Response(models, status=status.HTTP_200_OK)


class ListPredictions(APIView):
    """
    Predictions list
    """
    #permission_classes = (IsAuthenticated,)
    def get(self, request):
        predictions = manage.action_predictions_list()
        return Response(predictions, status=status.HTTP_200_OK)

class ManageModels(APIView):
    """
    Manage flame model 
    """
    #permission_classes = (IsAuthenticated,)

    def get(self, request, modelname):
        """
        Retrieves model information or metadata
        """
        flame_status = manage.action_info(modelname, 0, output='bin')
        if flame_status[0]:
            return Response(flame_status[1], status=status.HTTP_200_OK)
        else:
            return JsonResponse(flame_status[1], status = status.HTTP_404_NOT_FOUND)
            
    def post(self, request, modelname):
        """
        Creates a new flame model
        """
        flame_status = manage.action_new(modelname)

        if flame_status[1] == f"Endpoint {modelname} already exists":
            return JsonResponse({'error':flame_status[1]}, status=status.HTTP_409_CONFLICT)

        response = {"modelName": modelname, "versions": "0"}

        return JsonResponse(response, status=status.HTTP_201_CREATED)

    def delete(self, request, modelname):
        """
        Delete endpoint
        """
        flame_status = manage.action_kill(modelname)

        if flame_status[0]:
            return Response(status=status.HTTP_204_NO_CONTENT)
        # TODO: implement other responses for model not found
        else:
            return JsonResponse({'error':flame_status[1]}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, modelname):
        """
        Publishes a new version of the model
        TODO: Complete  error handling and error status
        """
        flame_status = manage.action_publish(modelname)
        if flame_status[0]:
            #PATCH to get version
            vpath, version = os.path.split(flame_status[1])
            version = version.replace("ver","")
            version = int(version)

            response = {'modelName':modelname,'version':version}
            return JsonResponse(response, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)

class ManagePredictions(APIView):
    """
    Manage models to the version level
    """
    
    def get(self, request, predictionName):
        """
        Retrieve info of model version
        """
        # threadNames = [i.name for i in threading.enumerate()]
        # if 'predicting_'+predictionName in threadNames:
        #     return JsonResponse({'waiting': time.ctime(time.time())}, status=status.HTTP_200_OK)

        success, result = manage.action_predictions_result(predictionName, output='bin')
        if success:
            return Response(json.loads(result.getJSON(xdata = True)), status=status.HTTP_200_OK)
        else:
            if 'code' in result and result['code'] == 0:
                return JsonResponse({'waiting': time.ctime(time.time())}, status=status.HTTP_200_OK)
            if 'code' in result and result['code'] == 1:
                return JsonResponse({'aborted': result['message']}, status=status.HTTP_200_OK)

        return JsonResponse (result,status = status.HTTP_404_NOT_FOUND)
            
        # return JsonResponse({'message': 'Thread stopped' + str(threadNames)},status = status.HTTP_404_NOT_FOUND)


    def delete(self, request, predictionName):
        """
        Delete model
        """
        flame_status = manage.action_predictions_remove(predictionName)
        if flame_status[0]:
             return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return JsonResponse({'error': flame_status[1]}, status = status.HTTP_404_NOT_FOUND)

class ManageDocumentation(APIView):

    """
    Manage model documentation
    """
    #permission_classes = (IsAuthenticated,)

    def get(self, request, modelname, version, oformat):
        
        """
        Retrieves model documentation
        """
        if oformat == 'WORD':
            current_path = os.getcwd()

            # create a temp directory to copy the word file with the documentation
            # and make it the current directory
            temp_dir = tempfile.mkdtemp(prefix="documentation_", dir=None)
            os.chdir(temp_dir)

            success, results = manage.action_documentation(modelname, version, oformat='WORD')
            if success: 
                file = open(results, 'rb')
                response = HttpResponse(FileWrapper(file), 
                        content_type='application/vnd.openxmlformats-officedocument.wordprocessingml.document')
                response['Content-Disposition'] = f'attachment; filename={results}'

                # return to original directory and remove the temp dir
                os.chdir(current_path)
                shutil.rmtree(temp_dir)
                return response
            else: 
                # retur not original directory
                os.chdir(current_path)
                return JsonResponse({'error':results}, status = status.HTTP_404_NOT_FOUND)

        if oformat == 'EXCEL':
            current_path = os.getcwd()

            # create a temp directory to copy the excel file with the documentation
            # and make it the current directory
            temp_dir = tempfile.mkdtemp(prefix="documentation_", dir=None)
            os.chdir(temp_dir)

            success, results = manage.action_documentation(modelname, version, oformat='EXCEL')

            if success:
                file = open(results, 'rb')
                response = HttpResponse(FileWrapper(file), 
                        # content_type='application/vnd.ms-excel')
                        content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')


                response['Content-Disposition'] = f'attachment; filename={results}'

                # return to original directory and remove the temp dir
                os.chdir(current_path)
                shutil.rmtree(temp_dir)
                return response
            else:
                # retur not original directory
                os.chdir(current_path)
                return JsonResponse({'error':results}, status = status.HTTP_404_NOT_FOUND)

        # for JSON or YAML
        flame_status = manage.action_documentation(modelname, version, oformat='JSON')

        if not flame_status[0]:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)

        if oformat=='JSON':
            return Response(json.loads(flame_status[1].dumpJSON()), status=status.HTTP_200_OK)
        elif oformat=='YAML':
            return Response(flame_status[1].dumpYAML(), status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':'unknown format'}, status = status.HTTP_404_NOT_FOUND)

    def post(self, request, modelname, version, oformat):
        
        """
        Updates model documentation
        """
        documentation = request.POST.get('documentation') 
        
        # print(type(documentation))
        if oformat== 'JSON':
            flame_status = manage.action_documentation(modelname, version, documentation, oformat='JSONS')
            if flame_status[0]:
                return Response(flame_status[1], status=status.HTTP_200_OK)
            else:
                return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)
        elif oformat== 'YAML':
            flame_status = manage.action_documentation(modelname, version, documentation, oformat='YAMLS')
            if flame_status[0]:
                return Response(flame_status[1], status=status.HTTP_200_OK)
            else:
                return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)    
        else:
            return JsonResponse({'error':'unknown format'}, status = status.HTTP_404_NOT_FOUND)

class ManageLabels(APIView):

    """
    Manage flame labels (aka endpoint)
    """

    def post(self, request, modelname, version):
        
        """
        Updates model documentation
        """
        labels = request.POST.get('labels') 
        flame_status = manage.action_label(modelname, version, labels, oformat='JSONS')
        if flame_status[0]:
            return Response(flame_status[0], status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)

class ManageVersions(APIView):
    """
    Manage models to the version level
    """

    def get(self, request, modelname, version):
        """
        Retrieve info of model version
        """
        # threadNames = [i.name for i in threading.enumerate()]
        # if 'building_'+modelname in threadNames:
        #     return JsonResponse({'waiting': time.ctime(time.time())}, status=status.HTTP_200_OK)

        success, result = manage.action_info(modelname, version, output='bin')
        if success:
            return Response(result, status=status.HTTP_200_OK)
        else:
            if 'code' in result and result['code'] == 0:
                return JsonResponse({'waiting': time.ctime(time.time())}, status=status.HTTP_200_OK)
            if 'code' in result and result['code'] == 1:
                return JsonResponse({'aborted': result['message']}, status=status.HTTP_200_OK)

        return JsonResponse (result,status = status.HTTP_404_NOT_FOUND)
            
        # return JsonResponse({'message': 'Thread stopped'},status = status.HTTP_404_NOT_FOUND)


    def delete(self, request, modelname, version):
        """
        Delete model
        """
        flame_status = manage.action_remove(modelname, version)
        if flame_status[0]:
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)
       
class ManageParameters(APIView):
    """
    Manage model parameters
    """

    def get(self,request,modelname,version):
        """
        Retrieve parameters of model version
        """
        flame_status = manage.action_parameters(modelname,version,oformat='bin')       
        if flame_status[0]:
            return Response(json.loads(flame_status[1].dumpJSON()), status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]},status = status.HTTP_404_NOT_FOUND)

class ManageSeries(APIView):
    """
    Return training series
    """

    def get(self,request,modelname,version):
        """
        Retrieve parameters of model version
        """
        current_path = os.getcwd()
        temp_dir = tempfile.mkdtemp(prefix="series_", dir=None)
        os.chdir(temp_dir)

        flame_status = manage.action_series(modelname,version)       
        if flame_status[0] == False:
            os.chdir(current_path)
            return JsonResponse({'error':flame_status[1]},status = status.HTTP_404_NOT_FOUND)

        file = open(os.path.abspath('training_series.sdf'), 'rb')
        response = HttpResponse(FileWrapper(file), content_type='text')
        response['Content-Disposition'] = 'attachment; filename=training_series.sdf'

        os.chdir(current_path)
        shutil.rmtree(temp_dir)

        return response

class ManageValidation(APIView):

    def get(self,request,modelname,version):    
        """
        Retrieve parameters of model version
        """
        flame_status = manage.action_results(modelname, version, True)
        if flame_status[0]:
            return Response(json.loads(flame_status[1].getJSON()), status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]},status = status.HTTP_404_NOT_FOUND)

class ManageExport(APIView):

    # def get(self,request,modelname):
    #     """
    #     Creates a compressed file in a temp directory and sends it as an
    #     HttpResponse
    #     """
    #     current_path = os.getcwd()

    #     temp_dir = tempfile.mkdtemp(prefix="export_", dir=None)
    #     os.chdir(temp_dir)
    #     success, results = manage.action_export(modelname)
    #     if not success:
    #         os.chdir(current_path)
    #         return JsonResponse({'error':results},status = status.HTTP_404_NOT_FOUND)

    #     file = open(os.path.abspath(modelname+'.tgz'), 'rb')
    #     response = HttpResponse(FileWrapper(file), content_type='application/tgz')
    #     response['Content-Disposition'] = 'attachment; filename=' + modelname + '.tgz'

    #     os.chdir(current_path)
    #     shutil.rmtree(temp_dir)

    #     return response

    def get (self, request, modelname, version):
        """
        Starts a thread for exporting a model. This can take a lot of time!
        """
        temp_path = tempfile.mkdtemp(prefix="export_", dir=None)
        temp_dir = os.path.split(temp_path)[-1]
        x = flthread.FlThread(target=exportThread, name=temp_dir, args=(modelname, version, temp_path))
        x.start()

        return JsonResponse({'temp_dir':temp_dir},status = status.HTTP_200_OK)

def exportThread(modelname, version, temp_dir=''):
    os.chdir(temp_dir)
    print ("Thread Start")
    success, results = manage.action_export(modelname, version)
    print ("Thread End")

class ManageExportTest(APIView):

    def get(self,request, modelname, version, temp_dir):
        """
        Test if the export Thread has finished
        """

        temp_path = os.path.join(tempfile.gettempdir(),temp_dir)
        if version == 0:
            export_name = f'{modelname}.tgz'
        else:
            export_name = f'{modelname}_v{version:06d}.tgz'

        export_file = os.path.join(temp_path,export_name)
        finish_file = os.path.join(temp_path,modelname+'.completed')
        
        if (os.path.isfile(export_file) and os.path.isfile(finish_file)):  
            return JsonResponse({'ready': True}, status=status.HTTP_200_OK)
        else:
            return JsonResponse({'waiting': time.ctime(time.time())}, status=status.HTTP_200_OK)

class ManageExportDownload(APIView):

    def get(self, request, modelname, version, temp_dir):
        """
        returns the compressed file as a part of the response
        """
        temp_path = os.path.join(tempfile.gettempdir(),temp_dir)
        if version == 0:
            export_name = f'{modelname}.tgz'
        else:
            export_name = f'{modelname}_v{version:06d}.tgz'
        export_file = os.path.join(temp_path,export_name)
        response = HttpResponse(FileWrapper(open(export_file, 'rb')), content_type='application/tgz')
        response['Content-Disposition'] = 'attachment; filename=' + export_name
        # shutil.rmtree(temp_dir)
        return response

class ManageImport(APIView):

    def post(self,request):
        
        file_object = request.FILES['model']
        model_raw = file_object.name
        model_name = file_object.name.split('.')
        model_name = model_name[0]

        # base_path = utils.model_repository_path()
        base_path = tempfile.gettempdir()

        # delete any previously existing file, e.g., from a failed import
        if (os.path.isfile(os.path.join(base_path, model_raw))):
            os.remove(os.path.join(base_path, model_raw))

        fs = FileSystemStorage(location=base_path) 
        tarname = fs.save(file_object.name, file_object)
        tarpath = os.path.join(base_path,tarname)

        flame_status = manage.action_import(tarpath)
        os.remove(tarpath) 

        if flame_status[0]:
            return JsonResponse({'Model': model_name}, status=status.HTTP_200_OK)
        else:
            if 'WARNING' in flame_status[1]:
                return JsonResponse({'error': flame_status[1]}, status=status.HTTP_200_OK)
            else:
                return JsonResponse({'error': flame_status[1]}, status=status.HTTP_409_CONFLICT)

class ManageConfiguration(APIView):
    """
    Get and set Flame configuration
    """

    def get(self, request):
        """
        Retrieve flame configuration
        """
        flame_status = config.configure(None, silent=False)

        if flame_status[0]:
            model_path = flame_status[1]['model_repository_path']
            root_path = os.path.split(model_path)[0]

            return Response((root_path, flame_status[1]), status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]},status = status.HTTP_404_NOT_FOUND)

    def post(self,request):
        """
        Set flame configuration (path to models, predictions and spaces)
        """
        newpath = request.POST.get('newpath')
        
        flame_status = config.configure(newpath, silent=True)

        if flame_status[0]:
            return Response(flame_status[0], status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]},status = status.HTTP_404_NOT_FOUND)

class TestUpload(APIView):
    parser_classes = (MultiPartParser,)

    def post(self, request):
        # get the upladed file with name "file"
        return Response(request.FILES)

class ManageParameters2Yaml(APIView):
    def post (self, request, modelname, version):

        # retrieve delta parameters, which were encoded as JSON
        # when delta is '*' it will not be applied 
        delta = request.POST.get('parameters') 
        
        # retrive existing parameters for this model version
        success, param = manage.action_parameters(modelname,version,oformat='bin')

        if success:
            # apply delta to the existing parameters
            if delta != '*':
                param.applyDelta(json.loads(delta))
            return Response(param.dumpYAML(), status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':param},status = status.HTTP_404_NOT_FOUND)

class ManageYaml2Parameters(APIView):
    def post(self, request, modelname,version):
        # retrieve delta parameters, as a YAML file
        delta = request.POST.get('parameters') 
        
        # retrive existing parameters for this model version
        success, param = manage.action_parameters(modelname,version,oformat='bin')

        if success:
            # apply delta to the existing paramyeres
            param.applyDelta(yaml.safe_load(delta))
            return Response(json.loads(param.dumpJSON()), status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':param},status = status.HTTP_404_NOT_FOUND)

class ManageRefresh(APIView):
    """
    Start model refresh
    """

    def get(self,request,modelname):    
        """
        Lauch a thread for refreshing a model
        """
        
        token_file = os.path.join(tempfile.gettempdir(),'refreshing_'+modelname)
        if os.path.isfile(token_file):
            os.remove(token_file)

        # Clean previous error messages
        error_file = os.path.join(tempfile.gettempdir(),'refreshing_error_'+modelname)
        if os.path.isfile(error_file):
            os.remove(error_file)

        # r = threading.Thread(target=refreshThread, args=(modelname, ''))
        # r = threading.Thread(target=refreshThread, name='refreshing_error_'+modelname, args=(modelname, ''))
        r = flthread.FlThread(target=refreshThread, name='refreshing_error_'+modelname, args=(modelname, ''))
        r.start()
        return Response('OK', status=status.HTTP_200_OK)

def refreshThread(modelname, temp_dir=''):
    print ("Thread Start")
    success, results = manage.action_refresh(model=modelname, version=None, GUI=True)
    print ("Thread End")

class ManageRefreshTest(APIView):
    """
    Check model refresh status
    """

    def get(self,request,modelname):    
        """
        Check if the model refresh task has finished
        """

        # Manage action_refresh test can return 'working' or 'ready' only 
        result = manage.action_refresh_test(model=modelname) 
        return JsonResponse(result, status=status.HTTP_200_OK)