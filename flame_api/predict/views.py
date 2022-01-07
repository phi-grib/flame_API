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
from urllib.parse import unquote

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

from rdkit import Chem

import flame.context as context
import threading        

class Predict(APIView):
    
    """
    Prediction, input file is provided as a SDFile
    """
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

        if predictionName is None:
            predictionName = 'temp'

        command_predict={'endpoint': modelname, 'version':int(version) ,'label':predictionName, 'infile':predict_data}
        
        x =threading.Thread(target=predictThread, args=(command_predict,'JSON',temp_dir))
        x.setName('predicting_'+predictionName)
        x.start()
        return Response("Predicting " + predictionName, status=status.HTTP_200_OK)  

class PredictSmiles(APIView):
    
    """
    Prediction, nput file is provided as a SMILES
    """
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

        if predictionName is None:
            predictionName = 'temp'

        command_predict={'endpoint': modelname, 'version':int(version) ,'label':predictionName, 'infile':predict_data}
        
        x = threading.Thread(target=predictThread, args=(command_predict,'JSON',temp_dir))
        x.start()
        return Response("Predicting " + predictionName, status=status.HTTP_200_OK)  
        
def predictThread(command, output, temp_dir=''):

    print ("Thread Start")
    success, results = context.predict_cmd(command, output_format=output)
    shutil.rmtree(temp_dir)
    # print (f"Folder {temp_dir} removed")
    print ("Thread End")