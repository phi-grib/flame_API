import tempfile
import os
import json

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
#from rest_framework.permissions import IsAuthenticated

from flame import manage
from flame.util import utils

from wsgiref.util import FileWrapper
import tarfile


class ListModels(APIView):
    """
    Model list
    """
    #permission_classes = (IsAuthenticated,)
    def get(self, request):
        models = manage.action_dir()
        return Response(models, 200)

        # else:
        #     return Response(models[1], status = status.HTTP_404_NOT_FOUND)


class ListPredictions(APIView):
    """
    Model list
    """
    #permission_classes = (IsAuthenticated,)
    def get(self, request):
        predictions = manage.action_predictions_list()
        return Response(predictions, 200)

        # else:
        #     return Response(predictions[1], status = status.HTTP_404_NOT_FOUND)

class ManageModels(APIView):
    """
    Manage flame model (aka endpoint)
    """
    #permission_classes = (IsAuthenticated,)

    def get(self, request, modelname):
        """
        Retrieves model information or metadata
        TODO: dont use hardcoded 0 version
        TODO: haandle info errors 
        """
        # TODO: FIX model info and metadata for  whole endpoint in flame
        flame_status = manage.action_info(modelname, 0,output='bin')
        if flame_status[0]:
            return Response(flame_status[1], status=status.HTTP_200_OK)
        else:
            return JsonResponse(flame_status[1], status = status.HTTP_404_NOT_FOUND)
            
    def post(self, request, modelname):
        """
        Creates a new flame model
        """
        flame_status = manage.action_new(modelname)

        if flame_status[1] == f"Endpoint {modelname} already exists":
            return JsonResponse({'error':flame_status[1]}, status=status.HTTP_409_CONFLICT)

        response = {"modelName": modelname, "versions": "0"}

        return JsonResponse(response, status=status.HTTP_201_CREATED)

    def delete(self, request, modelname):
        """
        Delete endpoint
        """
        flame_status = manage.action_kill(modelname)

        if flame_status[0]:
            return Response(status=status.HTTP_204_NO_CONTENT)
        # TODO: implement other responses for model not found
        else:
            return JsonResponse({'error':flame_status[1]}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, modelname):
        """
        Publishes a new version of the model
        TODO: Complete  error handling and error status
        """
        flame_status = manage.action_publish(modelname)
        if flame_status[0]:
            #PATCH to get version
            vpath, version = os.path.split(flame_status[1])
            version = version.replace("ver","")
            version = int(version)

            response = {'modelName':modelname,'version':version}
            return JsonResponse(response, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)

class ManagePredictions(APIView):

    """
    Manage models to the version level
    TODO: FIX and FINISH!
    """

    def get(self, request, predictionName):
        """
        Retrieve info of model version
        """
        flame_status = manage.action_predictions_result(predictionName, output='bin')
        if flame_status[0]:
            return Response(json.loads(flame_status[1].getJSON(xdata = True)), status=status.HTTP_200_OK)
        else:
            return JsonResponse(flame_status[1],status = status.HTTP_404_NOT_FOUND)
    
    def delete(self, request, predictionName):
        """
        Delete model
        """
        flame_status = manage.action_predictions_remove(predictionName)
        if flame_status[0]:
             return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return JsonResponse({'error': flame_status[1]}, status = status.HTTP_404_NOT_FOUND)

class ManageDocumentation(APIView):

    """
    Manage flame model (aka endpoint)
    """
    #permission_classes = (IsAuthenticated,)

    def get(self, request, modelname, version):
        
        """
        Retrieves model documentation
        """
        flame_status = manage.action_documentation(modelname, version, oformat='bin')
        if flame_status[0]:
            return Response(json.loads(flame_status[1].dumpJSON()), status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)

    def post(self, request, modelname, version):
        
        """
        Updates model documentation
        """
        documentation = request.POST.get('documentation') 
        flame_status = manage.action_documentation(modelname, version, documentation, oformat='JSONS')
        if flame_status[0]:
            # return Response(json.loads(flame_status[1].dumpJSON()), status=status.HTTP_200_OK)
            return Response(flame_status[0], status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)


class ManageVersions(APIView):
    """
    Manage models to the version level
    TODO: FIX and FINISH!
    """

    def get(self, request, modelname, version):
        """
        Retrieve info of model version
        """
        flame_status = manage.action_info(modelname, version, output='bin')
        if flame_status[0]:
            return Response(flame_status[1], status=status.HTTP_200_OK)
        else:
            return JsonResponse(flame_status[1],status = status.HTTP_404_NOT_FOUND)

    def delete(self, request, modelname, version):
        """
        Delete model
        """
        flame_status = manage.action_remove(modelname, version)
        if flame_status[0]:
             return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)
       
class ManageParameters(APIView):
    """
    Manage model parameters
    """

    def get(self,request,modelname,version):
        """
        Retrieve parameters of model version
        """
        flame_status = manage.action_parameters(modelname,version,oformat='bin')       
        if flame_status[0]:
            return Response(json.loads(flame_status[1].dumpJSON()), status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]},status = status.HTTP_404_NOT_FOUND)

class ManageValidation(APIView):

    def get(self,request,modelname,version):    
        """
        Retrieve parameters of model version
        """
        flame_status = manage.action_results(modelname, version, True)
        if flame_status[0]:
            return Response(json.loads(flame_status[1].getJSON()), status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]},status = status.HTTP_404_NOT_FOUND)
        #print(flame_status)

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
        
        file_object = request.FILES['model']
        model_name = file_object.name.split('.')
        model_name = model_name[0]
        base_path = utils.model_repository_path()
        fs = FileSystemStorage(location=base_path) #defaults to models root

        tarname = fs.save(file_object.name, file_object)
        tarpath = os.path.join(base_path,tarname)
        flame_status = manage.action_import(tarpath)
        os.remove(tarpath) 

        if flame_status[0]:
            return JsonResponse({'Model': model_name}, status=status.HTTP_200_OK)
        else:
            if 'WARNING' in flame_status[1]:
                return JsonResponse({'error': flame_status[1]}, status=status.HTTP_200_OK)
            else:
                return JsonResponse({'error': flame_status[1]}, status=status.HTTP_409_CONFLICT)
        # try:
        #     file_obj = request.FILES['model']
        # except MultiValueDictKeyError:
        #     response = {"error": "Model to import not provided"}
        #     return JsonResponse(response, status = status.HTTP_400_BAD_REQUEST)
        
        # # print (file_obj)
        # model_name = file_obj.name.split('.')
        # extension = model_name[1]
        # model_name = model_name[0]
        # models_path = utils.model_repository_path()

        # # Exist Model
       
        # if os.path.isdir(models_path+ '/' +model_name+'/'):
        #     return JsonResponse({'error': "Model already exist"},status=status.HTTP_409_CONFLICT)

        # fs = FileSystemStorage(location=models_path) #defaults to   MEDIA_ROOT  
        # tarFile = fs.save(model_name+'.'+extension, file_obj)
        # os.mkdir(models_path+ '/' +model_name)
        # tar = tarfile.open(models_path+ '/' +tarFile)
        # tar.extractall(path=models_path+ '/' +model_name+"/")
        # tar.close()
       
        # os.remove(models_path+ '/' +tarFile) 

        # #return Response(flame_status, status=status.HTTP_200_OK)
        # return JsonResponse({'Model': model_name}, status=status.HTTP_200_OK)

class TestUpload(APIView):
    parser_classes = (MultiPartParser,)

    def post(self, request):
        # get the upladed file with name "file"
        return Response(request.FILES)
