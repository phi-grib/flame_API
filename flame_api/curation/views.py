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

from curate import manage
from curate import context

# import flame.context as context
import threading
import time


class Curate(APIView):
    """
    Curation tool
    """
    #sends a put request to proccess a formData with the file content(ask user about columns and metadata?)
    def put(self, request, endpoint):
        """
        Updates endpoint with file to be processed
        """
        params = request.data
        try:
            file_obj = request.FILES['data_input']
        except MultiValueDictKeyError as e:
            return  JsonResponse({'error':'Datatest not provided'}, status=status.HTTP_400_BAD_REQUEST)
         # Set the temp filesystem storage
        temp_dir = tempfile.mkdtemp(prefix="data_input", dir=None)
        fs = FileSystemStorage(location=temp_dir)
        # save the file to the new filesystem
        path = fs.save(file_obj.name, ContentFile(file_obj.read()))
        # save to a variable the new path
        data_input = os.path.join(temp_dir, path)

        command_curate = {'endpoint':params['endpoint'], 'data_input':data_input, 'molecule_identifier':params['molecule_identifier'], 'structure_column':params['structure_column'],'separator':params['separator'], 'remove_problematic':params['remove_problematic'], 'outfile_type':params['outfile_type']}
        print(command_curate)
        x = threading.Thread(target=curateThread, args=(command_curate,temp_dir))
        x.start()
 
        return Response('Curating' + params['endpoint'], status=status.HTTP_201_CREATED)


    def get(self, request, endpoint):
        """
        Retrieves the stats and files info from a specific endpoint
        """

        curation = manage.action_info_curation(endpoint)
        return Response(curation, status=status.HTTP_200_OK)


def curateThread(command, temp_dir=''):

    print ("Thread Start")
    print(command)
    success, results = context.curation_cmd(command)
    shutil.rmtree(temp_dir)
    # print (f"Folder {temp_dir} removed")
    print ("Thread End")

    