#! -*- coding: utf-8 -*-

# Description    Flame API prediction views
#
# Authors:       Manuel Pastor (manuel.pastor@upf.edu)
#                Ignacio Pasamontes 
#
# Copyright 2018-2020 Manuel Pastor
#
# This file is part of Flame
#
# Flame is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation version 3.
#
# Flame is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with Flame. If not, see <http://www.gnu.org/licenses/>.

import tempfile
import os
import shutil
import json

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.http import JsonResponse
from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile
from django.utils.datastructures import MultiValueDictKeyError

from rdkit import Chem

import flame.context as context
from flame.util import flthread
from flame.util import utils

class Predict(APIView):
    
    """
    Prediction using a single model, the input structures is provided as a SDFile
    """
    roles = {'kh-access'}

    def put(self, request, modelname, version, predictionName=None):

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

        return (predictCommon(predictionName, modelname, version, predict_data, temp_dir))


        # if predictionName is None:
        #     predictionName = 'temp'

        # # Add a hash to guarantee that the name is truly unique, even in the case that a new prediction was run
        # # in a different thread or by a different user
        # predictionID = predictionName + '_' + utils.id_generator(5)

        # # Clean previous error messages
        # error_file = os.path.join(tempfile.gettempdir(),'predicting_'+predictionID)
        # if os.path.isfile(error_file):
        #     os.remove(error_file)

        # command_predict={'endpoint': modelname, 'version':int(version) ,'label':predictionID, 'infile':predict_data}
        
        # x =flthread.FlThread(target=predictThread, name='predicting_'+predictionID,  args=(command_predict,'JSON',temp_dir))
        # x.start()
        # return Response(predictionID, status=status.HTTP_200_OK)  

class PredictSmiles(APIView):
    
    """
    Prediction using a single model, the input structure is provided as a SMILES
    """
    roles = {'kh-access'}

    def put (self, request, modelname, version, predictionName=None):

        try:
            smiles = request.POST.get("SMILES")
        except MultiValueDictKeyError as e:
            return JsonResponse({'error':'SMILES not provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            molname = request.POST.get("name")
        except MultiValueDictKeyError as e:
            molname = "anonymous"

        # Set the temp filesystem storage
        temp_dir = tempfile.mkdtemp(prefix="predict_data_", dir=None)
        predict_data = os.path.join(temp_dir,molname+'.sdf')

        # Creates a simple MOLfile from the SMILES
        try:
            m = Chem.MolFromSmiles(smiles)
            if m is None:
                return JsonResponse({'error': 'SMILES format not recognized'}, status=status.HTTP_400_BAD_REQUEST)

            m.SetProp("_Name",molname)
            with open(predict_data,'w') as f:
                f.write(Chem.MolToMolBlock(m))

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return (predictCommon(predictionName, modelname, version, predict_data, temp_dir))
        
        # if predictionName is None:
        #     predictionName = 'temp'

        # # Add a hash to guarantee that the name is truly unique, even in the case that a new prediction was run
        # # in a different thread or by a different user
        # predictionID = predictionName + '_' + utils.id_generator(5)

        # # Clean previous error messages
        # error_file = os.path.join(tempfile.gettempdir(),'predicting_'+predictionID)
        # if os.path.isfile(error_file):
        #     os.remove(error_file)

        # command_predict={'endpoint': modelname, 'version':int(version) ,'label':predictionID, 'infile':predict_data}
        
        # x =flthread.FlThread(target=predictThread, name='predicting_'+predictionID,  args=(command_predict,'JSON',temp_dir))
        # x.start()
        # return Response(predictionID, status=status.HTTP_200_OK) 

class PredictSmilesList(APIView):
    
    """
    Prediction using a single model, input structures are provided as a list of SMILES
    """
    roles = {'kh-access'}

    def put (self, request, modelname, version, predictionName=None):

        try:
            smiles_list = json.loads(request.POST.get("smiles_list"))
        except MultiValueDictKeyError as e:
            return JsonResponse({'error':'SMILES list not provided'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            molname = request.POST.get("name")
        except MultiValueDictKeyError as e:
            molname = "anonymous"

        # Set the temp filesystem storage
        temp_dir = tempfile.mkdtemp(prefix="predict_data_", dir=None)
        predict_data = os.path.join(temp_dir,molname+'.sdf')

        # Creates a simple MOLfile from the SMILES
        try:
            with open(predict_data,'w') as f:

                unkMol = 1
                for ismiles in smiles_list:

                    if not 'smiles' in ismiles:
                        continue

                    m = Chem.MolFromSmiles(ismiles['smiles'])
                    if m is None:
                        return JsonResponse({'error': 'SMILES format not recognized'}, status=status.HTTP_400_BAD_REQUEST)
                    
                    name = None
                    if 'name' in ismiles:
                        name = ismiles['name']

                    if name is None:
                        name = f'mol{unkMol:08d}'
                        unkMol+=1
                    
                    m.SetProp("_Name",name)
                    f.write(Chem.MolToMolBlock(m))
                    f.write('$$$$\n')

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return (predictCommon(predictionName, modelname, version, predict_data, temp_dir))

        # if predictionName is None:
        #     predictionName = 'temp'

        # # Clean previous error messages
        # error_file = os.path.join(tempfile.gettempdir(),'predicting_'+predictionName)
        # if os.path.isfile(error_file):
        #     os.remove(error_file)

        # command_predict={'endpoint': modelname, 'version':int(version) ,'label':predictionName, 'infile':predict_data}
        
        # x = flthread.FlThread(target=predictThread, name='predicting_'+predictionName, args=(command_predict,'JSON',temp_dir) )
        # x.start()
        # return Response("Predicting " + predictionName, status=status.HTTP_200_OK)  


class Profile(APIView):
    """
     Prediction using a multiple models, the input structures is provided as a SDFile
    """
    roles = {'kh-access'}

    def put(self, request, profileName=None):

        # get the upladed file with name "file"
        try:
            file_obj = request.FILES["SDF"]
        except MultiValueDictKeyError as e:
            return  JsonResponse({'error':'Datatest not provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            endpoints = request.POST.get("endpoints")
            versions = request.POST.get("versions")
            
            endpoints_list = json.loads(endpoints)
            versions_list = json.loads(versions)

            multi = {'endpoints': endpoints_list, 'versions': versions_list}

        except MultiValueDictKeyError as e:
            return JsonResponse({'error':'models and versions not provided'}, status=status.HTTP_400_BAD_REQUEST)

        # Set the temp filesystem storage
        temp_dir = tempfile.mkdtemp(prefix="predict_data_", dir=None)
        fs = FileSystemStorage(location=temp_dir)
        # save the file to the new filesystem
        path = fs.save(file_obj.name, ContentFile(file_obj.read()))

        predict_data = os.path.join(temp_dir, path)

        return (profileCommon(profileName, multi, predict_data, temp_dir))

        # if profileName is None:
        #     profileName = 'temp'

        # # Clean previous error messages
        # error_file = os.path.join(tempfile.gettempdir(),'predicting_'+profileName)
        # if os.path.isfile(error_file):
        #     os.remove(error_file)

        # command_profile={'label':profileName, 'infile':predict_data, 'multi': multi}

        # x =flthread.FlThread(target=profileThread, name='predicting_'+profileName,  args=(command_profile,'JSON',temp_dir))

        # x.start()
        # return Response("Predicting " + profileName, status=status.HTTP_200_OK)  


class ProfileSmiles(APIView):
    
    """
    Prediction using a multiple models, the input structure is provided as a SMILES
    """
    roles = {'kh-access'}

    def put (self, request, profileName=None):
        try:
            smiles = request.POST.get("SMILES")
        except MultiValueDictKeyError as e:
            return JsonResponse({'error':'SMILES not provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            endpoints = request.POST.get("endpoints")
            versions = request.POST.get("versions")
            
            endpoints_list = json.loads(endpoints)
            versions_list = json.loads(versions)

            multi = {'endpoints': endpoints_list, 'versions': versions_list}

        except MultiValueDictKeyError as e:
            return JsonResponse({'error':'models and versions not provided'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            molname = request.POST.get("name")
        except MultiValueDictKeyError as e:
            molname = "anonymous"

        # Set the temp filesystem storage
        temp_dir = tempfile.mkdtemp(prefix="predict_data_", dir=None)
        predict_data = os.path.join(temp_dir,molname+'.sdf')

        # Creates a simple MOLfile from the SMILES
        try:
            m = Chem.MolFromSmiles(smiles)
            if m is None:
                return JsonResponse({'error': 'SMILES format not recognized'}, status=status.HTTP_400_BAD_REQUEST)

            m.SetProp("_Name",molname)
            with open(predict_data,'w') as f:
                f.write(Chem.MolToMolBlock(m))

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return (profileCommon(profileName, multi, predict_data, temp_dir))

        # if profileName is None:
        #     profileName = 'temp'

        # # Clean previous error messages
        # error_file = os.path.join(tempfile.gettempdir(),'predicting_'+profileName)
        # if os.path.isfile(error_file):
        #     os.remove(error_file)

        # command_profile={'label':profileName, 'infile':predict_data, 'multi': multi}
        
        # x = flthread.FlThread(target=profileThread, name='predicting_'+profileName, args=(command_profile,'JSON',temp_dir) )
        # x.start()
        # return Response("Predicting " + profileName, status=status.HTTP_200_OK)  

class ProfileSmilesList(APIView):
    
    """
    Prediction using a multiple models, the input structure is provided as a list of SMILES
    """
    roles = {'kh-access'}

    def put (self, request, profileName=None):
        try:
            smiles_list = json.loads(request.POST.get("smiles_list"))
        except MultiValueDictKeyError as e:
            return JsonResponse({'error':'SMILES list not provided'}, status=status.HTTP_400_BAD_REQUEST)        
        try:
            molname = request.POST.get("name")
        except MultiValueDictKeyError as e:
            molname = "anonymous"

        # Set the temp filesystem storage
        temp_dir = tempfile.mkdtemp(prefix="predict_data_", dir=None)
        predict_data = os.path.join(temp_dir,molname+'.sdf')

        # Creates a simple MOLfile from the SMILES
        try:
            with open(predict_data,'w') as f:

                unkMol = 1
                for ismiles in smiles_list:

                    if not 'smiles' in ismiles:
                        continue

                    m = Chem.MolFromSmiles(ismiles['smiles'])
                    if m is None:
                        return JsonResponse({'error': 'SMILES format not recognized'}, status=status.HTTP_400_BAD_REQUEST)

                    name = None
                    if 'name' in ismiles:
                        name = ismiles['name']

                    if name is None:
                        name = f'mol{unkMol:08d}'
                        unkMol+=1

                    m.SetProp("_Name",name)
                    f.write(Chem.MolToMolBlock(m))
                    f.write('$$$$\n')

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        try:
            endpoints = request.POST.get("endpoints")
            versions = request.POST.get("versions")
            
            endpoints_list = json.loads(endpoints)
            versions_list = json.loads(versions)

            multi = {'endpoints': endpoints_list, 'versions': versions_list}

        except MultiValueDictKeyError as e:
            return JsonResponse({'error':'models and versions not provided'}, status=status.HTTP_400_BAD_REQUEST)

        return (profileCommon(profileName, multi, predict_data, temp_dir))

        # if profileName is None:
        #     profileName = 'temp'

        # # Clean previous error messages
        # error_file = os.path.join(tempfile.gettempdir(),'predicting_'+profileName)
        # if os.path.isfile(error_file):
        #     os.remove(error_file)

        # command_profile={'label':profileName, 'infile':predict_data, 'multi': multi}
        
        # x = flthread.FlThread(target=profileThread, name='predicting_'+profileName, args=(command_profile,'JSON',temp_dir) )
        # x.start()
        # return Response("Predicting " + profileName, status=status.HTTP_200_OK)  
        
def predictCommon(predictionName, modelname, version, predict_data, temp_dir):
    if predictionName is None:
        predictionName = 'temp'
    
    # Add a hash to guarantee that the name is truly unique, even in the case that a new prediction was run
    # in a different thread or by a different user
    predictionID = predictionName + '_' + utils.id_generator(5)

    # Clean previous error messages
    error_file = os.path.join(tempfile.gettempdir(),'predicting_'+predictionID)
    if os.path.isfile(error_file):
        os.remove(error_file)

    command_predict={'endpoint': modelname, 'version':int(version) ,'label':predictionID, 'infile':predict_data}
    
    x =flthread.FlThread(target=predictThread, name='predicting_'+predictionID,  args=(command_predict,'JSON',temp_dir))
    x.start()

    return Response(predictionID, status=status.HTTP_200_OK) 

def profileCommon(profileName, multi, predict_data, temp_dir):

    if profileName is None:
        profileName = 'temp'
    
    # Add a hash to guarantee that the name is truly unique, even in the case that a new prediction was run
    # in a different thread or by a different user
    profileID = profileName + '_' + utils.id_generator(5)

    # Clean previous error messages
    error_file = os.path.join(tempfile.gettempdir(),'predicting_'+profileID)
    if os.path.isfile(error_file):
        os.remove(error_file)

    command_profile={'label':profileID, 'infile':predict_data, 'multi': multi}

    x =flthread.FlThread(target=profileThread, name='predicting_'+profileID,  args=(command_profile,'JSON',temp_dir))

    x.start()
    return Response(profileID, status=status.HTTP_200_OK)     

def predictThread(command, output, temp_dir=''):

    print ("Thread Start")
    success, results = context.predict_cmd(command, output_format=output)
    shutil.rmtree(temp_dir)
    print ("Thread End")


def profileThread(command, output, temp_dir=''):

    print ("Thread Start")
    success, results = context.profile_cmd(command, output_format=output)
    shutil.rmtree(temp_dir)
    print ("Thread End")