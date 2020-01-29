import tempfile
import os
import json

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FileUploadParser
from rest_framework import status

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile
from django.utils.datastructures import MultiValueDictKeyError

from flame import predict

import flame.context as context
import threading
import time



class Predict(APIView):
    """
    Prediction
    """

    parser_classes = (MultiPartParser,)

    def put(self, request, modelname, version, format=None):

        # get the upladed file with name "file"
        try:
            file_obj = request.FILES["SDF"]
        except MultiValueDictKeyError as e:
            return  JsonResponse({'error':'Datatest not provided'}, status=status.HTTP_400_BAD_REQUEST)
        

        # Set the temp filesystem storage
        temp_dir = tempfile.mkdtemp(prefix="predict_data_", dir=None)
        fs = FileSystemStorage(location=temp_dir)
        # save the file to the new filesystem
        path = fs.save(file_obj.name, ContentFile(file_obj.read()))

        predict_data = os.path.join(temp_dir, path)

        command_predict={'endpoint': modelname, 'version':int(version) ,'infile':predict_data}
        
        x = threading.Thread(target=predictThread, args=(command_predict,'JSON'))
        x.start()
        return Response("Predicting ", status=status.HTTP_200_OK)  
        
class PredictName(APIView):
    
    """
    Prediction
    """
    def put(self, request, modelname, version, predictionName, format=None):

        # get the upladed file with name "file"
        try:
            file_obj = request.FILES["SDF"]
        except MultiValueDictKeyError as e:
            return  JsonResponse({'error':'Datatest not provided'}, status=status.HTTP_400_BAD_REQUEST)
        

        # Set the temp filesystem storage
        temp_dir = tempfile.mkdtemp(prefix="predict_data_", dir=None)
        fs = FileSystemStorage(location=temp_dir)
        # save the file to the new filesystem
        path = fs.save(file_obj.name, ContentFile(file_obj.read()))

        predict_data = os.path.join(temp_dir, path)

        command_predict={'endpoint': modelname, 'version':int(version) ,'label':predictionName, 'infile':predict_data}
        
        x = threading.Thread(target=predictThread, args=(command_predict,'JSON'))
        x.start()
        return Response("Predicting " + predictionName, status=status.HTTP_200_OK)  
        
def predictThread(command, output):

    print ("Thread Start")
    success, results = context.predict_cmd(command, output_format=output)
    print ("Thread End")