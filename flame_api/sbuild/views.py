from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from rest_framework import status

# Create your views here.

class BuildSpace(APIView):
    """
    Build model
    """
    #parser_classes = (MultiPartParser,)
    
    def post(self, request, spacename, format=None):

       
        response = {
            "buildStatus": "Model builded succesfully",
            "fileName":  spacename,
            "version": 0
        }
        return JsonResponse(response, status=status.HTTP_200_OK)
        
        
