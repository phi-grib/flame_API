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
    Model list
    """
    #permission_classes = (IsAuthenticated,)
    def get(self, request):
        spaces = smanage.action_dir()
        # TODO: fix what flame returns
        return Response(json.loads(spaces[1]), 200)


class ManageSpaces(APIView):
    """
    Manage flame model (aka endpoint)
    """
    #permission_classes = (IsAuthenticated,)

    def get(self, request, spacename):
        """
        Retrieves model information or metadata
        TODO: dont use hardcoded 0 version
        TODO: haandle info errors 
        """
        # TODO: FIX model info and metadata for  whole endpoint in flame
        flame_status = smanage.action_info(spacename, 0,output='JSON')
        
        if flame_status[0]:
            return Response(json.loads(flame_status[1]), status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)
            
    def post(self, request, spacename):
        """
        Creates a new flame model
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
        Publishes a new version of the model
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
