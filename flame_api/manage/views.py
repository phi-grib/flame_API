from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework import status
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from flame import manage
from flame.util import utils

class ModelsList(APIView):
    """
    Model list
    """
    def get(self, request):
        models = manage.action_dir()  # fix what flame returns xd
        return Response(models, 200)