#! -*- coding: utf-8 -*-

# Description    Flame API manage sviews
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

from django.shortcuts import render
import json

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework import status

from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.utils.datastructures import MultiValueDictKeyError
#from rest_framework.permissions import IsAuthenticated

from flame import smanage

# Create your views here.
class ListSpaces(APIView):
    """
    Spaces list
    """
    #permission_classes = (IsAuthenticated,)
    def get(self, request):
        spaces = smanage.action_dir()
        return Response(spaces, status=status.HTTP_200_OK)

        # if spaces[0]:
        #     return Response(spaces[1], status=status.HTTP_200_OK)
        # else:
        #     return JsonResponse({'error':spaces[1]}, status = status.HTTP_404_NOT_FOUND)


class ManageSpaces(APIView):
    """
    Manage flame space
    """
    #permission_classes = (IsAuthenticated,)

    def get(self, request, spacename):
        """
        Retrieves model information or metadata
        TODO: dont use hardcoded 0 version
        TODO: haandle info errors 
        """
        # TODO: FIX model info and metadata for  whole endpoint in flame
        flame_status = smanage.action_info(spacename, 0)
        
        if flame_status[0]:
            return Response(flame_status[1], status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)
            
    def post(self, request, spacename):
        """
        Creates a new flame space
        """
        flame_status = smanage.action_new(spacename)
        if flame_status[1] == f"Endpoint {spacename} already exists":
            return JsonResponse({'error':flame_status[1]}, status=status.HTTP_409_CONFLICT)

        response = {"spacename": spacename, "versions": "0"}

        return JsonResponse(response, status=status.HTTP_201_CREATED)

    def delete(self, request, spacename):
        """
        Delete endpoint
        """
        flame_status = smanage.action_kill(spacename)

        if flame_status[0]:
            return Response(status=status.HTTP_204_NO_CONTENT)
        # TODO: implement other responses for model not found
        else:
            return JsonResponse({'error':flame_status[1]}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, spacename):
        """
        Publishes a new version of the space
        TODO: Complete  error handling and error status
        """
        flame_status = smanage.action_publish(spacename)
        if flame_status[0]:
            #PATCH to get version
            version = flame_status[1].split('/')
            version = version[len(version)-1]
            version = version.replace("ver","")
            version = int(version)
            response = {'spacename':spacename,'version':version}
            return JsonResponse(response, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)

class ManageVersions(APIView):

    """
    Manage spaces to the version level
    TODO: FIX and FINISH!
    """

    def get(self, request, spacename, version):
        """
        Retrieves space information or metadata
        TODO: dont use hardcoded 0 version
        TODO: haandle info errors 
        """
        # TODO: FIX model info and metadata for  whole endpoint in flame
        flame_status = smanage.action_info(spacename, version, output='JSON')
        
        if flame_status[0]:
            # return Response(json.loads(flame_status[1]), status=status.HTTP_200_OK)
            return Response(flame_status[1], status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)
            

    def delete(self, request, spacename, version):
        """
        Delete space
        """
        flame_status = smanage.action_remove(spacename, version)
        if flame_status[0]:
             return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)

class ManageParameters(APIView):
    """
    Manage space parameters
    """

    def get(self,request,spacename,version):
        """
        Retrieve parameters of space version
        """
        flame_status = smanage.action_parameters(spacename, version, oformat = "JSON")       
        if flame_status[0]:
            return Response(json.loads(flame_status[1].dumpJSON()), status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]},status = status.HTTP_404_NOT_FOUND)


class ManageSearches(APIView):

    def get(self, request, searchName):
        """
        Retrieve info of sesrch
        """

        flame_status = smanage.action_searches_result(searchName, output = "JSON")
        if flame_status[0]:
            return Response(json.loads(flame_status[1].getJSON()), status=status.HTTP_200_OK)      
        else:
            return JsonResponse(flame_status[1], status = status.HTTP_404_NOT_FOUND)
