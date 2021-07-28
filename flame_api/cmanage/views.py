#! -*- coding: utf-8 -*-

# Description    Flame API build views
#
# Authors:       Manuel Pastor (manuel.pastor@upf.edu)
#                Rodrigo Lorenzo Lorenzo
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
import shutil
import json
from ast import literal_eval

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from wsgiref.util import FileWrapper

# requires curate module
from curate import manage


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

        print (curations)

        return Response(curations, status= status.HTTP_200_OK)

class CHead(APIView):
    """
    Curation header from pickle to preview the result
    """
    #returns the content of header pickl
    def get(self, request, endpoint):
        curation = manage.action_header_curation(endpoint)
        return Response(curation, status= status.HTTP_200_OK)


class CurateParams(APIView):
    """
    retrieves the parameters for a given endpoint from backend 
    """
    #returns the content of parameters.yaml
    def get(self, request, endpoint):
        response = manage.action_parameters(endpoint,'JSON')
        if response[0]:
            return Response(json.loads(response[1].dumpJSON()), status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':response[1]},status = status.HTTP_404_NOT_FOUND)

class CurationFile(APIView):
    """
    retrieves the complete curation using the same
    format the user sent when using curate
    """
    def get(self, request, endpoint):
        flame_status = manage.action_curation_results(endpoint)
        if flame_status[0]:
            return Response(flame_status, status=status.HTTP_200_OK)
        else:
            return JsonResponse(flame_status[1],status = status.HTTP_404_NOT_FOUND)

class ExportCurationFile(APIView):
    """
    retrieves the route to the file and sets a temp path to download it
    """
    def get(self, request, endpoint, oformat):
        class Object(object):
            pass
        oformat_ci = oformat.lower()    
        a = Object()
        a.endpoint = endpoint
        a.format = oformat_ci
        current_path = os.getcwd()

        # create a temp directory to copy the file with the curation
        # and make it the current directory
        temp_dir = tempfile.mkdtemp(prefix="curation_", dir=None)
        os.chdir(temp_dir)

        success, results = manage.action_curation_results(a)

        if not success:
            os.chdir(current_path)
            return JsonResponse({'error':results},status = status.HTTP_404_NOT_FOUND)

        curated_data = open(os.path.abspath('curated_data.{}'.format(oformat_ci)), 'rb')

        if os.path.isfile(os.path.abspath('problematic_structures_removed.xlsx')):
            problematic_struc = open(os.path.abspath('problematic_structures_removed.xlsx'), 'rb')
            tar_file = open(os.path.abspath('curation.tgz'), 'rb')
            response = HttpResponse(FileWrapper(tar_file), 
                content_type='application/tar+gzip')
            response['Content-Disposition'] = 'attachment; filename = curation.tgz'

        else:
            if oformat_ci == 'xlsx':
                response = HttpResponse(FileWrapper(curated_data), 
                    content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
                response['Content-Disposition'] = f'attachment; filename={"curated_data.xlsx"}'

            elif oformat_ci=='csv' or oformat_ci=='tsv' or oformat_ci=='sdf':
                response = HttpResponse(FileWrapper(curated_data), 
                    content_type='text/csv')
                response['Content-Disposition'] = f'attachment; filename={"curated_data.{}".format(oformat)}'
            elif oformat_ci == 'json':
                response = HttpResponse(FileWrapper(curated_data), 
                        content_type='application/json')
                response['Content-Disposition'] = f'attachment; filename={"curated_data.json"}'
            else:
                return JsonResponse({'error':'unknown format'}, status = status.HTTP_404_NOT_FOUND)

            

        os.chdir(current_path)
        shutil.rmtree(temp_dir)
        return response