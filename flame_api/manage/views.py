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
# import readline
import shutil
import json
import yaml
import time
import tempfile
import numpy as np

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework import status

from django.core.files.storage import FileSystemStorage
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.utils.datastructures import MultiValueDictKeyError
from flame import manage
from flame.util import collections
from flame.util import utils, config, flthread
from wsgiref.util import FileWrapper


class ListModels(APIView):
    """
    Model list
    """
    roles = {'kh-access'}

    #permission_classes = (IsAuthenticated,)
    def get(self, request):
        models = manage.action_dir()
        return Response(models, status=status.HTTP_200_OK)


class ListPredictions(APIView):
    """
    Predictions list
    """
    roles = {'kh-access'}

    def get(self, request):
        predictions = manage.action_predictions_list()
        return Response(predictions, status=status.HTTP_200_OK)

class ListProfiles(APIView):
    """
    Profiles list
    """
    roles = {'kh-access'}

    def get(self, request):
        profiles = manage.action_profiles_list()
        return Response(profiles, status=status.HTTP_200_OK)

class ListCollections(APIView):
    """
    Collections List
    """
    roles = {'kh-access'}

    def get(self, request):
        """
        Return collections list
        """
        roles = {'kh-access'}
        
        collect = collections.get_collections()
        return Response(collect, status=status.HTTP_200_OK)  

class ManageModels(APIView):
    """
    Manage flame model 
    """
    roles = {'kh-access'}

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
    roles = {'kh-access'}
    
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

class ManageCollections(APIView):
    """
    Manage models collections
    """
    roles = {'kh-access'}

    def put(self, request, nameCollection):
        
        endpoints_json = request.POST.get("endpoints")
        versions_json = request.POST.get('versions')
        try:
            endpoints = json.loads(endpoints_json)
            versions=json.loads(versions_json)
        except:
            return JsonResponse({'error': 'unable to convert endpoints or versions'}, status = status.HTTP_404_NOT_FOUND)

        result = collections.createCollection(nameCollection,endpoints,versions)
        return Response(result,status.HTTP_200_OK)
    
    def delete(self,request,nameCollection):

        flame_status = collections.deleteCollection(nameCollection)
        
        if flame_status[0]:
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return JsonResponse({'error': flame_status[1]}, status = status.HTTP_404_NOT_FOUND)


class ManageProfiles(APIView):
    """
    Manage profiling results
    """
    roles = {'kh-access'}
    
    def get(self, request, profileName, item):
        """
        Retrieve a single prediction (#item) from a profile
        """

        success, result = manage.action_profiles_result(profileName, item, output='bin')
        if success:
            return Response(json.loads(result.getJSON(xdata = True)), status=status.HTTP_200_OK)
        else:
            if 'code' in result and result['code'] == 0:
                return JsonResponse({'waiting': time.ctime(time.time())}, status=status.HTTP_200_OK)
            if 'code' in result and result['code'] == 1:
                return JsonResponse({'aborted': result['message']}, status=status.HTTP_200_OK)

        return JsonResponse (result,status = status.HTTP_404_NOT_FOUND)
            

    def delete(self, request, profileName):
        """
        Delete profile
        """
        flame_status = manage.action_profiles_remove(profileName)
        if flame_status[0]:
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return JsonResponse({'error': flame_status[1]}, status = status.HTTP_404_NOT_FOUND)

class ManageProfilesSummary(APIView):
    """
    Manage models to the version level
    """
    roles = {'kh-access'}
    
    def get(self, request, profileName):
        """
        Retrieve summary of profile specifically oriented to populate the heatmap
        """

        success, result = manage.action_profiles_summary(profileName, output='bin')
        if success:
            result_dict = {}
            first = True
            endpoints = []
            versions = []
            quantitatives = []
            values = []
            pval0 = []
            pval1 = []
            upper = []
            lower = []
            errors = []
            error_msg = []

            for imodel in result:
                if first:

                    # all models must have the same number of objects, we get it only for the first model
                    obj_num = imodel.getVal('obj_num')
                    zero = np.zeros((obj_num), dtype=np.float )

                    result_dict['obj_num'] = obj_num
                    result_dict['obj_nam'] = imodel.getVal('obj_nam')
                    result_dict['SMILES'] = imodel.getVal('SMILES')

                    values = np.array(imodel.getVal('values'), dtype=np.float)

                    if imodel.isKey('p0'):
                        pval0 = np.array(imodel.getVal('p0'), dtype=np.float)
                        pval1 = np.array(imodel.getVal('p1'), dtype=np.float)
                    else:
                        pval0 = zero
                        pval1 = zero

                    if imodel.isKey('lower_limit'):
                        lower = np.array(imodel.getVal('lower_limit'), dtype=np.float)
                        upper = np.array(imodel.getVal('upper_limit'), dtype=np.float)
                    else:
                        lower = zero
                        upper = zero
                    
                    first  = False
                else:
                    values = np.c_[values, imodel.getVal('values')]
                    
                    if imodel.isKey('p0'):
                        pval0 = np.c_[pval0, imodel.getVal('p0')]
                        pval1 = np.c_[pval1, imodel.getVal('p1')]
                    else:
                        pval0 = np.c_[pval0, zero]
                        pval1 = np.c_[pval1, zero]

                    if imodel.isKey('lower_limit'):
                        lower = np.c_[lower, imodel.getVal('lower_limit')]
                        upper = np.c_[upper, imodel.getVal('upper_limit')]
                    else:
                        lower = np.c_[lower, zero]
                        upper = np.c_[upper, zero]
                
                errors.append(imodel.getError())
                error_msg.append(imodel.getErrorMessage())
                endpoints.append(imodel.getMeta('endpoint'))    
                versions.append(imodel.getMeta('version'))    
                quantitatives.append(imodel.getMeta('quantitative'))    

            result_dict['errors'] = errors
            result_dict['error_msg'] = error_msg
            result_dict['values'] = values.tolist()
            result_dict['pval0'] = pval0.tolist()
            result_dict['pval1'] = pval1.tolist()
            result_dict['lower_limit'] = lower.tolist()
            result_dict['upper_limit'] = upper.tolist()
            result_dict['endpoint'] = endpoints
            result_dict['version'] = versions
            result_dict['quantitative'] = quantitatives

            return Response(result_dict, status=status.HTTP_200_OK)
        else:
            if 'code' in result and result['code'] == 0:
                return JsonResponse({'waiting': time.ctime(time.time())}, status=status.HTTP_200_OK)
            if 'code' in result and result['code'] == 1:
                return JsonResponse({'aborted': result['message']}, status=status.HTTP_200_OK)

        return JsonResponse (result,status = status.HTTP_404_NOT_FOUND)
         

class ManageDocumentation(APIView):
    """
    Manage model documentation
    """
    roles = {'kh-access'}
    
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
                response = HttpResponse(FileWrapper(file), status = status.HTTP_200_OK,
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
                response = HttpResponse(FileWrapper(file), status = status.HTTP_200_OK,
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
        success, results = manage.action_documentation(modelname, version, oformat='JSON')

        if not success:
            return JsonResponse({'error':results}, status = status.HTTP_404_NOT_FOUND)

        if oformat=='JSON':
            return Response(json.loads(results.dumpJSON()), status=status.HTTP_200_OK)
        elif oformat=='YAML':
            yamllist = results.dumpYAML()
            yamltext = ''
            for iyaml in yamllist:
                yamltext += iyaml+'\n'
            return Response(yamltext, status=status.HTTP_200_OK)
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
    roles = {'kh-access'}

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

class ManageToken(APIView):
    """
    Manage models being built
    """
    roles = {'kh-access'}

    def get(self, request, modelname, token):
        """
        Retrieve info of model version
        """

        success, result = manage.action_info(modelname, 0, output='bin', build_id=token)

        if success:
            return Response(result, status=status.HTTP_200_OK)
        else:
            if 'code' in result and result['code'] == 0:
                return JsonResponse({'waiting': time.ctime(time.time())}, status=status.HTTP_200_OK)
            if 'code' in result and result['code'] == 1:
                return JsonResponse({'aborted': result['message']}, status=status.HTTP_200_OK)

        return JsonResponse (result,status = status.HTTP_404_NOT_FOUND)
            
class ManageVersions(APIView):
    """
    Manage models to the version level
    """
    roles = {'kh-access'}

    def get(self, request, modelname, version):
        """
        Retrieve info of model version
        """
        # threadNames = [i.name for i in threading.enumerate()]
        # if 'building_'+modelname in threadNames:
        #     return JsonResponse({'waiting': time.ctime(time.time())}, status=status.HTTP_200_OK)

        # print ('>>>>>>>>>>>>>>>>>>>>>>>>>', version)
        # build_id = None
        # if isinstance(version, str):
        #     build_id = version
        #     version = 0
        #     print ('<<<<<<<<<<<<<<<<<<<<<<<<<<', build_id, version)

        # success, result = manage.action_info(modelname, version, output='bin', build_id=build_id)
        success, result = manage.action_info(modelname, version, output='bin', build_id=None)

        if success:
            return Response(result, status=status.HTTP_200_OK)
        else:
            if 'code' in result and result['code'] == 0:
                return JsonResponse({'waiting': time.ctime(time.time())}, status=status.HTTP_200_OK)
            if 'code' in result and result['code'] == 1:
                return JsonResponse({'aborted': result['message']}, status=status.HTTP_200_OK)

        return JsonResponse (result,status = status.HTTP_404_NOT_FOUND)
            
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
    roles = {'kh-access'}

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
    roles = {'kh-access'}

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

        with open(os.path.abspath('training_series.sdf'), 'r') as f:
            series_content = f.read()

        os.chdir(current_path)
        shutil.rmtree(temp_dir)

        return Response( series_content, status=status.HTTP_200_OK)

class ManageValidation(APIView):

    roles = {'kh-access'}

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

    roles = {'kh-access'}

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
    current_path = os.getcwd()
    os.chdir(temp_dir)
    print ("Thread Start")
    success, results = manage.action_export(modelname, version)
    os.chdir(current_path)
    print ("Thread End")

class ManageExportTest(APIView):

    roles = {'kh-access'}

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

    roles = {'kh-access'}

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

        shutil.rmtree(temp_path)

        return response

class ManageImport(APIView):

    roles = {'kh-access'}

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
    roles = {'kh-access'}

    def get(self, request):
        """
        Retrieve flame configuration
        """
        success, results = config.configure(None, silent=False)

        if success:
            if 'root_repository' in results:
                root_path = results['root_repository']
            else:       
                if 'models' in results:
                    model_path = results['models']
                    root_path = os.path.split(model_path)[0]

                else:   # legacy configuration files
                    model_path = results['model_repository_path']
                    root_path = os.path.split(model_path)[0]  

            return Response((root_path, results), status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':results},status = status.HTTP_404_NOT_FOUND)

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

    roles = {'kh-access'}

    parser_classes = (MultiPartParser,)

    def post(self, request):
        # get the upladed file with name "file"
        return Response(request.FILES)

class ManageParameters2Yaml(APIView):

    roles = {'kh-access'}

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

    roles = {'kh-access'}

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
    roles = {'kh-access'}

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
    roles = {'kh-access'}

    def get(self,request,modelname):    
        """
        Check if the model refresh task has finished
        """

        # Manage action_refresh test can return 'working' or 'ready' only 
        result = manage.action_refresh_test(model=modelname) 
        return JsonResponse(result, status=status.HTTP_200_OK)

class ListBaskets(APIView):
    
    roles = {'kh-access'}

    def get(self, request):
        result = manage.action_basket_list()
        return Response(result, status=status.HTTP_200_OK)

class ManageBasket(APIView):

    roles = {'kh-access'}

    def post(self, request):
        compound_list_json = request.POST.get('compound_list') 
        try:
            compound_list=json.loads(compound_list_json)
        except:
            return JsonResponse({'error': 'unable to convert compound list'}, status = status.HTTP_404_NOT_FOUND)

        success, result = manage.action_basket_add(compound_list)

        if success:
            return JsonResponse({'OK': result}, status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':result}, status = status.HTTP_404_NOT_FOUND)


    def get(self,request,item=None): 
        success, result = manage.action_basket_get(item)
        if success:
            return Response(result, status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':result}, status = status.HTTP_404_NOT_FOUND)
