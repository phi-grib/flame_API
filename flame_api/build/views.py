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


from flame import build
from flame.util import utils
import flame.context as context


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
              
        epd = utils.model_path(modelname, 0)
        lfile = os.path.join(epd, 'training_series')

        # Set the temp filesystem storage
        '''temp_dir = tempfile.mkdtemp(prefix="train_data_", dir=None)

        fs = FileSystemStorage(location=temp_dir)
        # save the file to the new filesystem
        path_SDF = fs.save(file_obj.name, ContentFile(file_obj.read()))
        training_data = os.path.join(temp_dir, path_SDF)

        #Copy file
        shutil.copy(training_data, lfile) '''
        
        # TODO: implement correctly flame build
        command_build = {'endpoint': modelname, 'infile': lfile, 'param_string': params}

        #LOG.info(f'Starting building model {args.endpoint}'
        #         f' with file {args.infile} and parameters {args.parameters}')
        success, results = context.build_cmd(command_build, output_format='JSON')
        #try:
        #    success, results = context.build_cmd(command_build, output_format='JSON')    
        #except Exception as e:
        #    return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

        print (success)
        print (results)
        if (results[0]):
            if isinstance(file_obj, bool):
                filename = "internal training set"
            else:
                filename = file_obj.name
            response = {
                "buildStatus": "Model builded succesfully",
                "fileName":  filename,
                "modelName": modelname,
                "version": 0
            }
            return JsonResponse(response, status=status.HTTP_200_OK)
        else:
            return Response(json.loads(results[1]), status = status.HTTP_404_NOT_FOUND)
          
       
      
        

        