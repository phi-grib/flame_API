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

import flame.context as context
import threading
import time


class Cmanage(APIView):
    """
    Curation table with all the endpoints and dates 
    """
    #sends get request to repo returns the list of the endpoints(where the curated list is saved)
    def get(self, request):
        """
        Retrieves endpoints list
        """
        curations = manage.action_dir()
        return Response(curations, status= status.HTTP_200_OK)

class CHead(APIView):
    """
    Curation header from pickle to preview the result
    """
    def get(self, request, endpoint):
        curation = manage.action_header_curation(endpoint)
        return Response(curation, status= status.HTTP_200_OK)


class CurateParams(APIView):
    """
    retrieves the parameters for a given endpoint from backend 
    """
    def get(self, request, endpoint):
        curation = manage.action_parameters(endpoint)
        return Response(curation, status=status.HTTP_200_OK)

class CurationFile(APIView):
    """
    retrieves the complete curation to be downloaded using the same
    format the user sent when using curate
    """
    def get(self, request, endpoint):
        curation = manage.action_curation_results(endpoint)
        print(curation)
        if curation[0]:
           return Response(curation, status=status.HTTP_200_OK)
        else:
           return Response(curation,status = status.HTTP_404_NOT_FOUND)


        