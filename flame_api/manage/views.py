from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework import status
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

class CreateModel(APIView):
    """
    Create new flame model (aka endpoint)
    """

    def post(self, request, modelname):

        flame_status = manage.action_new(modelname)
        
        if flame_status[1] == f'Endpoint {modelname} already exists':
            return HttpResponse("Model already exists or the name is used by another model", status=409)

        response = {
            "status": flame_status,
            "modelName": modelname,
            "versions": ["0"]
        }
        
        return JsonResponse(response, status=201)   