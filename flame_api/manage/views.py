import tempfile
import os

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework import status

from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from flame import manage
from flame.util import utils


class ListModels(APIView):
    """
    Model list
    """

    def get(self, request):
        models = manage.action_dir()
        # TODO: fix what flame returns
        return Response(models, 200)


class ManageModels(APIView):
    """
    Manage flame model (aka endpoint)
    """

    def get(self, request, modelname):
        """
        Retrieves model information or metadata
        TODO: dont use hardcoded 0 version
        TODO: haandle info errors 
        """
        # TODO: FIX model info and metadata for  whole endpoint in flame
        flame_status = manage.action_info(modelname, 0)

        return Response(flame_status, status=status.HTTP_200_OK)

    def post(self, request, modelname):
        """
        Creates a new flame model
        """
        flame_status = manage.action_new(modelname)

        if flame_status[1] == f'Endpoint {modelname} already exists':
            return HttpResponse(flame_status[1], status=status.HTTP_409_CONFLICT)

        response = {
            "status": flame_status,
            "modelName": modelname,
            "versions": ["0"]
        }

        return JsonResponse(response, status=status.HTTP_201_CREATED)

    def delete(self, request, modelname):
        """
        Delete endpoint
        """
        flame_status = manage.action_kill(modelname)

        if flame_status[0] == True:
            return Response(status=status.HTTP_204_NO_CONTENT)
        # TODO: implement other responses for model not found
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def put(self, request, modelname):
        """
        Publishes a new version of the model
        TODO: Complete  error handling and error status
        """
        flame_status = manage.action_publish(modelname)
        return Response(flame_status, status=status.HTTP_201_CREATED)

class ManageVersions(APIView):
    """
    Manage models to the version level
    TODO: FIX and FINISH!
    """

    def get(self, request, modelname, version):
        """
        Retrieve info of model version
        """
        flame_status = manage.action_info(modelname, version)
        return Response(flame_status, status=status.HTTP_200_OK)
    
    def delete(self, request, modelname, version):
        """
        Delete model
        """
        flame_status = manage.action_remove(modelname, version)
    

class TestUpload(APIView):
    parser_classes = (MultiPartParser,)
    def post(self, request):
        # get the upladed file with name "file"
        return Response(request.FILES)