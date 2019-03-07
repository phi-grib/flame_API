from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework import status
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse



class Build(APIView):
    """
    Build model 
    """
    parser_classes = (MultiPartParser,)
    def post(self, request, modelname, version, format=None):
        file_obj = request.FILES['file']
        for l in file_obj:
            print(l)
        response = {"received data": f"hey! I'm {modelname} version {version} with data {request.data}"}
        return JsonResponse(response)

# @api_view(['GET'])
# def build(request, modelname, version):
#     response = {"response": f"hey! I'm {modelname} version {version}"}
#     return JsonResponse(response)
# Create your views here.
