import tempfile
import os
import yaml
import json
import shutil
from ast import literal_eval

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FileUploadParser
from rest_framework import status

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile
from django.utils.datastructures import MultiValueDictKeyError

import flame.context as context
import threading
import time


class BuildModel(APIView):
    """
    Build model
    """
    parser_classes = (MultiPartParser,)
    
    def post(self, request, modelname, format=None):

         # get the upladed file
        try:
            file_obj = request.FILES['SDF']
        except MultiValueDictKeyError:
            file_obj = False
     
        params = request.POST.get('parameters')  

        training_data = None     
        # Set the temp filesystem storage
        if not isinstance(file_obj, bool):
            temp_dir = tempfile.mkdtemp(prefix="train_data_", dir=None)
            fs = FileSystemStorage(location=temp_dir)
            path_SDF = fs.save(file_obj.name, ContentFile(file_obj.read()))
            training_data = os.path.join(temp_dir, path_SDF)

       
        # TODO: implement correctly flame build
        command_build = {'endpoint': modelname, 'infile': training_data, 'param_string': params}
        
        #try:
        x = threading.Thread(target=buildThread, args=(command_build,'JSON'))
            #threads.append(x)
        x.start()
            #success, results = context.build_cmd(command_build, output_format='JSON')
        #except Exception as e:
        #return Response(str(e), status=status.HTTP_400_BAD_REQUEST)    
        '''if success:
            if isinstance(file_obj, bool):
                filename = "internal training set"
            else:
                filename = file_obj.name
            response = {
                "buildStatus": "Model build successfully",
                "fileName":  filename,
                "modelName": modelname,
                "version": 0
            }
            return JsonResponse(response, status=status.HTTP_200_OK)
        else:
            error = json.loads(results);
            return Response(error['error'], status = status.HTTP_404_NOT_FOUND)'''
        
        return Response("Creating Model " + modelname, status=status.HTTP_200_OK)  
       
def buildThread(command, output):

    print (command)
    print (output)
    print ("Thread Start");
    success, results = context.build_cmd(command, output_format=output)
    print ("Thread End")
    print (success)
    print (results)
        

           