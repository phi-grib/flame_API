import tempfile
import os

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FileUploadParser
from rest_framework import status

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile

from flame import build


class BuildModel(APIView):
    """
    Build model
    """
    parser_classes = (MultiPartParser,)
    
    def post(self, request, modelname, format=None):

        # get the upladed file with name "file"
        file_obj = request.FILES['SDF']

        # Set the temp filesystem storage
        temp_dir = tempfile.mkdtemp(prefix="train_data_", dir=None)
        fs = FileSystemStorage(location=temp_dir)
        # save the file to the new filesystem
        path = fs.save(file_obj.name, ContentFile(file_obj.read()))

        training_data = os.path.join(temp_dir, path)

        # TODO: implement correctly flame build
        builder = build.Build(modelname, output_format="JSON")
        flame_status = builder.run(training_data)
        
        response = {"buildStatus": flame_status,
                    "fileName": os.path.join(temp_dir, path),
                    "modelName": modelname}

        return JsonResponse(response, status=200)