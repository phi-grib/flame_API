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
from ast import literal_eval

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from wsgiref.util import FileWrapper

# from curate import manage


class Cmanage(APIView):
    """
    Curation table with all the endpoints and dates 
    """
    roles = {'kh-access'}

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
    roles = {'kh-access'}

    #returns the content of header pickl
    def get(self, request, endpoint):
        curation = manage.action_header_curation(endpoint)
        return Response(curation, status= status.HTTP_200_OK)


class CurateParams(APIView):
    """
    retrieves the parameters for a given endpoint from backend 
    """
    roles = {'kh-access'}

    #returns the content of parameters.yaml
    def get(self, request, endpoint):
        curation = manage.action_parameters(endpoint)
        return Response(curation, status=status.HTTP_200_OK)

class CurationFile(APIView):
    """
    retrieves the complete curation using the same
    format the user sent when using curate
    """
    roles = {'kh-access'}

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
    roles = {'kh-access'}

    def get(self, request, endpoint, oformat):
        flame_status = manage.action_curation_results(endpoint)
        if oformat=='xlsx':
            current_path = os.getcwd()

            # create a temp directory to copy the file with the curation
            # and make it the current directory
            temp_dir = tempfile.mkdtemp(prefix="curation_", dir=None)
            os.chdir(temp_dir)

            success, results = manage.action_curation_results(endpoint)
            if success: 
                file = open(results, 'rb')
                response = HttpResponse(FileWrapper(file), 
                        content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
                response['Content-Disposition'] = f'attachment; filename={"curated_data" + "." + oformat}'

                # return to original directory and remove the temp dir
                os.chdir(current_path)
                shutil.rmtree(temp_dir)
                return response
            else: 
                # retur not original directory
                os.chdir(current_path)
                return JsonResponse({'error':results}, status = status.HTTP_404_NOT_FOUND)
        elif oformat=='csv' or oformat=='tsv' or oformat=='sdf':
            current_path = os.getcwd()

            # create a temp directory to copy the file with the curation
            # and make it the current directory
            temp_dir = tempfile.mkdtemp(prefix="curation_", dir=None)
            os.chdir(temp_dir)

            success, results = manage.action_curation_results(endpoint)
            if success: 
                file = open(results, 'rb')
                response = HttpResponse(FileWrapper(file), 
                        content_type='text/csv')
                response['Content-Disposition'] = f'attachment; filename={"curated_data" + "." + oformat}'

                # return to original directory and remove the temp dir
                os.chdir(current_path)
                shutil.rmtree(temp_dir)
                return response
            else: 
                # return not original directory
                os.chdir(current_path)
                return JsonResponse({'error':results}, status = status.HTTP_404_NOT_FOUND)
        flame_status = manage.action_curation_results(endpoint)  
        if not flame_status[0]:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)

        if oformat=='JSON':
            current_path = os.getcwd()

            # create a temp directory to copy the file with the curation results
            # and make it the current directory
            temp_dir = tempfile.mkdtemp(prefix="curation_", dir=None)
            os.chdir(temp_dir)

            success, results = manage.action_curation_results(endpoint)
            if success: 
                file = open(results, 'rb')
                response = HttpResponse(FileWrapper(file), 
                        content_type='application/json')
                response['Content-Disposition'] = f'attachment; filename={"curated_data.json" }'

                # return to original directory and remove the temp dir
                os.chdir(current_path)
                shutil.rmtree(temp_dir)
                return response
            else: 
                # retur not original directory
                os.chdir(current_path)
                return JsonResponse({'error':results}, status = status.HTTP_404_NOT_FOUND)
        else:
            return JsonResponse({'error':'unknown format'}, status = status.HTTP_404_NOT_FOUND)