#! -*- coding: utf-8 -*-

# Description    Flame API build views
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
from ast import literal_eval

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework import status

from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile
from django.utils.datastructures import MultiValueDictKeyError

import flame.context as context
import threading 
import traceback
import sys


old_init = threading.Thread.__init__
def new_init(self, *args, **kwargs):
    old_init(self, *args, **kwargs)
    old_run = self.run
    def run_with_our_excepthook(*args, **kwargs):
        try:
           old_run(*args, **kwargs)
        except:
           # ceate a file in temp with FLAME BUILD and date
           var = traceback.format_exc()
           tmp = os.path.join(tempfile.gettempdir(),'BUILD_FLAME_ERROR')
           with open (tmp,'w') as f:
             f.write(var)
           print (f">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>{tmp}")
           sys.excepthook(*sys.exc_info())

    self.run = run_with_our_excepthook
threading.Thread.__init__ = new_init

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
        incremental = request.POST.get('incremental') 
        if incremental == 'true':
          incremental = True
        else:
          incremental = False
        training_data = None     
        # Set the temp filesystem storage
        if not isinstance(file_obj, bool):
            temp_dir = tempfile.mkdtemp(prefix="train_data_", dir=None)
            fs = FileSystemStorage(location=temp_dir)
            path_SDF = fs.save(file_obj.name, ContentFile(file_obj.read()))
            training_data = os.path.join(temp_dir, path_SDF)

        command_build = {'endpoint': modelname, 'infile': training_data, 'param_string': params, 'incremental': incremental}
        x = threading.Thread(target=buildThread, name='building_'+modelname, args=(command_build,'JSON'))
        x.start()
        
        return Response("Creating Model " + modelname, status=status.HTTP_200_OK)  
       
def buildThread(command, output):

    print ("Thread Start NEW")
    success, results = context.build_cmd(command, output_format=output)
    print ("Thread End")
        

           