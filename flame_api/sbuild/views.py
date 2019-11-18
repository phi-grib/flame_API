import os
import tempfile
import os
import yaml
import json
import shutil

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FileUploadParser
from rest_framework import status

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile
from django.utils.datastructures import MultiValueDictKeyError

import flame.context as context
import threading
import time

from flame import sbuild
from flame.util import utils

# Create your views here.

class BuildSpace(APIView):
    """
    Build space
    """
    #parser_classes = (MultiPartParser,)
    
    def post(self, request, spacename, format=None):

       
      # get the upladed file
        try:
            file_obj = request.FILES['SDF']
        except MultiValueDictKeyError:
            file_obj = False

        params = request.POST.get('parameters')
        epd = utils.space_path(spacename, 0)
        print(epd)
        lfile = os.path.join(epd, 'training_series')
        # TODO: implement correctly flame build
        builder = sbuild.Sbuild(spacename,param_string=params,output_format="JSON")
        try:
            if isinstance(file_obj, bool):
     
                flame_status = builder.run(lfile)

            else:

                # Set the temp filesystem storage
                temp_dir = tempfile.mkdtemp(prefix="train_data_", dir=None)
                
                fs = FileSystemStorage(location=temp_dir)
                # save the file to the new filesystem
                path_SDF = fs.save(file_obj.name, ContentFile(file_obj.read()))
                
                training_data = os.path.join(temp_dir, path_SDF)
                print(training_data)
                flame_status = builder.run(training_data)
                #Copy file
                shutil.copy(training_data, lfile)        
       
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
            
        if (flame_status[0]):
            if isinstance(file_obj, bool):
                filename = "internal training set"
            else:
                filename = file_obj.name
            response = {
                "buildStatus": "Space builded succesfully",
                "fileName":  filename,
                "spacename": spacename,
                "version": 0
            }
            return JsonResponse(response, status=status.HTTP_200_OK)
        else:
            return Response(json.loads(flame_status[1]), status = status.HTTP_404_NOT_FOUND)