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

import tempfile
import os
import json
import re
import yaml
import ast


from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework import status

from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.utils.datastructures import MultiValueDictKeyError
#from rest_framework.permissions import IsAuthenticated

from flame import manage
from flame.util import utils, config

from wsgiref.util import FileWrapper
import tarfile


class ListModels(APIView):
    """
    Model list
    """
    #permission_classes = (IsAuthenticated,)
    def get(self, request):
        models = manage.action_dir()
        return Response(models, 200)

        # else:
        #     return Response(models[1], status = status.HTTP_404_NOT_FOUND)


class ListPredictions(APIView):
    """
    Model list
    """
    #permission_classes = (IsAuthenticated,)
    def get(self, request):
        predictions = manage.action_predictions_list()
        return Response(predictions, 200)

        # else:
        #     return Response(predictions[1], status = status.HTTP_404_NOT_FOUND)

class ManageModels(APIView):
    """
    Manage flame model (aka endpoint)
    """
    #permission_classes = (IsAuthenticated,)

    def get(self, request, modelname):
        """
        Retrieves model information or metadata
        TODO: dont use hardcoded 0 version
        TODO: haandle info errors 
        """
        # TODO: FIX model info and metadata for  whole endpoint in flame
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
    TODO: FIX and FINISH!
    """

    def get(self, request, predictionName):
        """
        Retrieve info of model version
        """
        flame_status = manage.action_predictions_result(predictionName, output='bin')
        if flame_status[0]:
            return Response(json.loads(flame_status[1].getJSON(xdata = True)), status=status.HTTP_200_OK)
        else:
            return JsonResponse(flame_status[1],status = status.HTTP_404_NOT_FOUND)
    
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
    Manage flame model (aka endpoint)
    """
    #permission_classes = (IsAuthenticated,)

    def get(self, request, modelname, version, oformat):
        
        """
        Retrieves model documentation
        """
        if oformat=='JSON':
            flame_status = manage.action_documentation(modelname, version, oformat='JSON')
            if flame_status[0]:
                return Response(json.loads(flame_status[1].dumpJSON()), status=status.HTTP_200_OK)
            else:
                return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)
        elif oformat=='YAML':
            flame_status = manage.action_documentation(modelname, version, oformat='JSON')
            if flame_status[0]:
                return Response(flame_status[1].dumpYAML(), status=status.HTTP_200_OK)
            else:
                return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)
        else:
            return JsonResponse({'error':'unknown format'}, status = status.HTTP_404_NOT_FOUND)

    def post(self, request, modelname, version, oformat):
        
        """
        Updates model documentation
        """
        documentation = request.POST.get('documentation') 
        
        print(type(documentation))
        if oformat== 'JSON':
            flame_status = manage.action_documentation(modelname, version, documentation, oformat='JSONS')
            print('this is jsons')
            if flame_status[0]:
                return Response(flame_status[1], status=status.HTTP_200_OK)
            else:
                return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)
        elif oformat== 'YAML':
            flame_status = manage.action_documentation(modelname, version, documentation, oformat='YAMLS')
            print('this is yamls')
            if flame_status[0]:
                return Response(flame_status[1], status=status.HTTP_200_OK)
            else:
                return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)    

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
        flame_status = manage.action_info(modelname, version, output='bin')
        if flame_status[0]:
            return Response(flame_status[1], status=status.HTTP_200_OK)
        else:
            return JsonResponse(flame_status[1],status = status.HTTP_404_NOT_FOUND)

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
        #print(flame_status)

class ManageExport(APIView):

    def get(self,request,modelname):
        """
        Retrieve parameters of model version
        """
        flame_status = manage.action_export(modelname)
        current_path = os.getcwd()
        exportfile = os.path.join(current_path,modelname+'.tgz')
        file = open(exportfile, 'rb')
        response = HttpResponse(FileWrapper(file), content_type='application/tgz')
        response['Content-Disposition'] = 'attachment; filename=' + modelname + '.tgz'
        os.remove(exportfile) 

        return response
        #return Response(flame_status, status=status.HTTP_200_OK)

class ManageImport(APIView):

    def post(self,request):
        
        file_object = request.FILES['model']
        model_name = file_object.name.split('.')
        model_name = model_name[0]
        base_path = utils.model_repository_path()
        fs = FileSystemStorage(location=base_path) #defaults to models root

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
