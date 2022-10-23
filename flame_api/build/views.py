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
# from ast import literal_eval

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework import status

# from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile
from django.utils.datastructures import MultiValueDictKeyError

import flame.context as context
from flame.util import flthread
from flame.util.utils import id_generator

class BuildModel(APIView):
    """
    Build model
    """
    roles = {'kh-access'}

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

        # Clean previous error messages
        error_file = os.path.join(tempfile.gettempdir(),'building_'+modelname)
        if os.path.isfile(error_file):
            os.remove(error_file)

        build_id = f'build{id_generator(5)}'        

        command_build = {'endpoint': modelname, 'infile': training_data, 
            'param_string': params, 'incremental': incremental,
            'build_token': build_id}

        # x = FlameThread(target=buildThread, name='building_'+modelname, args=(command_build,'JSON'))
        x = flthread.FlThread(target=buildThread, name='building_'+modelname, args=(command_build,'JSON'))
        x.start()
        
        # return Response("Creating Model " + modelname, status=status.HTTP_200_OK)  
        return Response(build_id, status=status.HTTP_200_OK)  
       
def buildThread(command, output):
    print ("Thread Start NEW")
    success, results = context.build_cmd(command, output_format=output)
    if not success:
        error_file = os.path.join(tempfile.gettempdir(),'building_'+command['endpoint'])
        with open (error_file,'w') as f:
            f.write(results)

    print ("Thread End")

           