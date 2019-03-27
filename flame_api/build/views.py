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


class BuildModel(APIView):
    """
    Build model
    """
    parser_classes = (MultiPartParser,)
    
    def post(self, request, modelname, format=None):

        # get the upladed file with name "file"
        try:
            file_obj = request.FILES['SDF']
        except MultiValueDictKeyError:
            file_obj = False
     
        params_obj = json.loads(request.POST.get('parameters'))
       
        # Set the temp filesystem storage
        temp_dir = tempfile.mkdtemp(prefix="train_data_", dir=None)
      
        parameters = os.path.join(temp_dir, "parameters.yaml")

        with open(parameters, 'w') as outfile:
            yaml.dump(params_obj, outfile, default_flow_style=False)
      
        # TODO: implement correctly flame build
        builder = build.Build(modelname,param_file=parameters,output_format="JSON")

        try:
            if isinstance(file_obj, bool):

                epd = utils.model_path(modelname, 0)
                lfile = os.path.join(epd, 'training_series')

                flame_status = builder.run(lfile)

            else:
        
                fs = FileSystemStorage(location=temp_dir)
                # save the file to the new filesystem
                path_SDF = fs.save(file_obj.name, ContentFile(file_obj.read()))
                training_data = os.path.join(temp_dir, path_SDF)

                flame_status = builder.run(training_data)
            
                epd = utils.model_path(modelname, 0)
                lfile = os.path.join(epd, 'training_series')
                shutil.copy(training_data, lfile)        
       
        except Exception as e:

            response = {"buildStatus": str(e),
                    "fileName":'',
                    "modelName": modelname}

            return JsonResponse(response, status=500) 

        response = {"buildStatus": flame_status,
                    "fileName":'',
                    "modelName": modelname}

        return JsonResponse(response, status=200)