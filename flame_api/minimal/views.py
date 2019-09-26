from django.shortcuts import render
from django.conf import settings
import os
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
import yaml

# Create your views here.


class Ready(APIView):
    """
    Ready service
    """
    def get(self, request):
       
        return Response("I am ready", 200)

class Alive(APIView):
    """
    Alive service
    """
    def get(self, request):
       
        return Response("I am alive", 200)

class API(APIView):
    """
    Returns the API definition file
    """
    def get(self, request):
        with open("../flameAPI.yaml", 'r') as stream:
            data_loaded = yaml.safe_load(stream)
        return Response(data_loaded, status=200, content_type="application/yaml")

  

