#! -*- coding: utf-8 -*-

# Description    Flame API sbuild views
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
import tempfile
import os
import shutil

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile
from django.utils.datastructures import MultiValueDictKeyError
from django.http import JsonResponse

import flame.context as context
import threading


class BuildSpace(APIView):
    """
    Build space
    """
    #parser_classes = (MultiPartParser,)
    
    def post(self, request, spacename, format=None):

      # get the uploaded file
      try:
          file_obj = request.FILES['SDF']
      except MultiValueDictKeyError:
          file_obj = None

      params = request.POST.get('parameters')  
      incremental = request.POST.get('incremental') 

      # print ("---------------------------")
      # print ("Incremental before", incremental)
      # print ("Incremental before type", type(incremental))
      if incremental == 'true':
        incremental = True
      else:
        incremental = False
      # print ("Incremental after", incremental)
      # print ("Incremental after type", type(incremental))
      # print ("---------------------------")
      training_data = None     
      temp_dir = tempfile.mkdtemp(prefix="train_data_", dir=None)

      if file_obj is not None:
        # Set the temp filesystem storage
        fs = FileSystemStorage(location=temp_dir)
        path_SDF = fs.save(file_obj.name, ContentFile(file_obj.read()))
        training_data = os.path.join(temp_dir, path_SDF)

      command_build = {'space': spacename, 'infile': training_data, 'param_string': params, 'incremental': incremental}
      x = threading.Thread(target=sbuildThread, args=(command_build,'JSON', temp_dir))

      x.start()
      
      return Response( spacename, status=status.HTTP_200_OK)  

def sbuildThread(command, output, temp_dir):

    print ("Thread Start")
    success, results = context.sbuild_cmd(command, output_format=output)
    shutil.rmtree(temp_dir)
    print ("Thread End")