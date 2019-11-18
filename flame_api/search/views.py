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

from flame import search


class Search(APIView):
    """
    Build model
    """

    #parser_classes = (MultiPartParser,)

    def put(self, request, spacename, version, format=None):

        # get the upladed file with name "file"

        metric = request.query_params.get('metric')
        numsel = request.query_params.get('numsel')
        cutoff = request.query_params.get('cutoff')
        
        if cutoff is not None:
            cutoff = float(cutoff)

        if numsel is not None:
            numsel = int(numsel)

        try:
            file_obj = request.FILES["SDF"]
        except MultiValueDictKeyError as e:
            return  JsonResponse({'error':'Datatest not provided'}, status=status.HTTP_400_BAD_REQUEST)
        

        # Set the temp filesystem storage
        temp_dir = tempfile.mkdtemp(prefix="search_data_", dir=None)
        fs = FileSystemStorage(location=temp_dir)
        # save the file to the new filesystem
        path = fs.save(file_obj.name, ContentFile(file_obj.read()))

        search_data = os.path.join(temp_dir, path)

        searcher = search.Search(spacename, int(version))
       
        flame_status = searcher.run(search_data, metric=metric, numsel=numsel, cutoff=cutoff)
        if flame_status[0]:
            return JsonResponse(json.loads(flame_status[1]), status=status.HTTP_200_OK)
        else:
            return Response(flame_status[1], status = status.HTTP_404_NOT_FOUND)

# Create your views here.
