from rest_framework.decorators import api_view
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

@api_view(['GET'])
def build(request, modelname, version):
    response = {"response": f"hey! I'm {modelname} version {version}"}
    return JsonResponse(response)
# Create your views here.
