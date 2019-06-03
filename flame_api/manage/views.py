import tempfile
import os

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework import status

from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.utils.datastructures import MultiValueDictKeyError

from flame import manage
from flame.util import utils

from wsgiref.util import FileWrapper
import tarfile


class ListModels(APIView):
    """
    Model list
    """

    def get(self, request):
        models = manage.action_dir()
        # TODO: fix what flame returns
        return Response(models, 200)


class ManageModels(APIView):
    """
    Manage flame model (aka endpoint)
    """

    def get(self, request, modelname):
        """
        Retrieves model information or metadata
        TODO: dont use hardcoded 0 version
        TODO: haandle info errors 
        """
        # TODO: FIX model info and metadata for  whole endpoint in flame
        flame_status = manage.action_info(modelname, 0)

        return Response(flame_status, status=status.HTTP_200_OK)

    def post(self, request, modelname):
        """
        Creates a new flame model
        """
        flame_status = manage.action_new(modelname)

        if flame_status[1] == f"Endpoint {modelname} already exists":
            return HttpResponse(flame_status[1], status=status.HTTP_409_CONFLICT)

        response = {"status": flame_status, "modelName": modelname, "versions": ["0"]}

        return JsonResponse(response, status=status.HTTP_201_CREATED)

    def delete(self, request, modelname):
        """
        Delete endpoint
        """
        flame_status = manage.action_kill(modelname)

        if flame_status[0] == True:
            return Response(status=status.HTTP_204_NO_CONTENT)
        # TODO: implement other responses for model not found
        else:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request, modelname):
        """
        Publishes a new version of the model
        TODO: Complete  error handling and error status
        """
        flame_status = manage.action_publish(modelname)
        return Response(flame_status, status=status.HTTP_201_CREATED)


class ManageVersions(APIView):
    """
    Manage models to the version level
    TODO: FIX and FINISH!
    """

    def get(self, request, modelname, version):
        """
        Retrieve info of model version
        """
        flame_status = manage.action_info(modelname, version,
        output='JSON')
        return Response(flame_status, status=status.HTTP_200_OK)

    def delete(self, request, modelname, version):
        """
        Delete model
        """
        flame_status = manage.action_remove(modelname, version)
        return Response(flame_status, status=status.HTTP_204_NO_CONTENT)

class ManageParameters(APIView):
    """
    Manage model parameters
    """

    def get(self,request,modelname,version):
        """
        Retrieve parameters of model version
        """
        flame_status = manage.action_parameters(modelname,version,"JSON")
        #print(flame_status)
        return Response(flame_status, status=status.HTTP_200_OK)

class ManageValidation(APIView):

    def get(self,request,modelname,version):
        """
        Retrieve parameters of model version
        """
        flame_status = manage.action_results(modelname,version,"JSON")
        #print(flame_status)
        return Response(flame_status, status=status.HTTP_200_OK)

class ManageExport(APIView):

    def get(self,request,modelname):
        """
        Retrieve parameters of model version
        """
        flame_status = manage.action_export(modelname)
        current_path = os.getcwd()
        exportfile = os.path.join(current_path,modelname+'.tgz')
        file = open(exportfile, 'rb')
        response = HttpResponse(FileWrapper(file), content_type='application/tgz')
        response['Content-Disposition'] = 'attachment; filename=' + modelname + '.tgz'
        os.remove(exportfile) 

        return response
        #return Response(flame_status, status=status.HTTP_200_OK)

class ManageImport(APIView):

    def post(self,request):
        
        try:
            file_obj = request.FILES['model']
        except MultiValueDictKeyError:
            file_obj = False

        model_name = file_obj.name.split('.')
        extension = model_name[1]
        model_name = model_name[0]
        models_path = utils.model_repository_path()

        # Exist Model
       
        if os.path.isdir(models_path+ '/' +model_name+'/'):
            return Response({'Model': "ERROR"},status=status.HTTP_200_OK)

        fs = FileSystemStorage(location=models_path) #defaults to   MEDIA_ROOT  
        tarFile = fs.save(model_name+'.'+extension, file_obj)
        
        
       
        os.mkdir(models_path+ '/' +model_name)
        
        tar = tarfile.open(models_path+ '/' +tarFile)
        tar.extractall(path=models_path+ '/' +model_name+"/")
        tar.close()
       
        os.remove(models_path+ '/' +tarFile) 

        #return Response(flame_status, status=status.HTTP_200_OK)
        return Response({'Model': model_name})

class TestUpload(APIView):
    parser_classes = (MultiPartParser,)

    def post(self, request):
        # get the upladed file with name "file"
        return Response(request.FILES)
