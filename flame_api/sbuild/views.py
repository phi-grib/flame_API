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

        training_data = None     
        # Set the temp filesystem storage
        if not isinstance(file_obj, bool):
            temp_dir = tempfile.mkdtemp(prefix="train_data_", dir=None)
            fs = FileSystemStorage(location=temp_dir)
            path_SDF = fs.save(file_obj.name, ContentFile(file_obj.read()))
            training_data = os.path.join(temp_dir, path_SDF)

       
        # TODO: implement correctly flame build
        command_sbuild = {'space': spacename, 'infile': training_data, 'param_string': params}
        x = threading.Thread(target=sbuildThread, args=(command_sbuild,'JSON'))
        x.start()
        
        return Response( spacename, status=status.HTTP_200_OK)  

def sbuildThread(command, output):

    print ("Thread Start")
    success, results = context.sbuild_cmd(command, output_format=output)
    print ("Thread End")