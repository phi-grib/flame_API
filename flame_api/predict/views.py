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

from flame import predict


class Predict(APIView):
    """
    Build model
    """
    parser_classes = (MultiPartParser,)
    
    def put(self, request, modelname, version,  format=None):

        # get the upladed file with name "file"
        file_obj = request.FILES['SDF']

        # Set the temp filesystem storage
        temp_dir = tempfile.mkdtemp(prefix="predict_data_", dir=None)
        fs = FileSystemStorage(location=temp_dir)
        # save the file to the new filesystem
        path = fs.save(file_obj.name, ContentFile(file_obj.read()))

        predict_data = os.path.join(temp_dir, path)

        predictor = predict.Predict(modelname, int(version))
        flame_status = predictor.run(predict_data)
        
        response = {"buildStatus": flame_status[1],
                    "fileName": os.path.join(temp_dir, path),
                    "modelName": modelname}

        return JsonResponse(response, status=200)