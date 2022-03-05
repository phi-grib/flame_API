#! -*- coding: utf-8 -*-

# Description    Flame API search views
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

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile
from django.utils.datastructures import MultiValueDictKeyError

from rdkit import Chem

import flame.context as context
import threading

import string
import random

class Search(APIView):
    """
    Search, input file is provided as a SDFIle
    """
    roles = {'kh-access'}

    def put(self, request, spacename, version, searchName=None):

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

        if searchName is None:
            searchName = id_generator()

        command_search={'space': spacename, 'version':int(version) ,'label':searchName, 'infile':search_data, 'metric':metric, 'numsel':numsel, 'cutoff':cutoff}
        
        x = threading.Thread(target=searchThread, name = 'searching_'+searchName, args=(command_search,'JSON',temp_dir))
        x.start()
        return Response(searchName, status=status.HTTP_200_OK)  

class SearchSmiles(APIView):
    """
    Search, input file is provided as a SMILES
    """
    roles = {'kh-access'}

    def put(self, request, spacename, version, searchName=None):

        # get the upladed file with name "file"
        metric = request.query_params.get('metric')
        numsel = request.query_params.get('numsel')
        cutoff = request.query_params.get('cutoff')
        
        if cutoff is not None:
            cutoff = float(cutoff)

        if numsel is not None:
            numsel = int(numsel)

        try:
            smiles = request.POST.get("SMILES")
        except MultiValueDictKeyError as e:
            return JsonResponse({'error':'SMILES not provided'}, status=status.HTTP_400_BAD_REQUEST)

        molname = request.POST.get("name")

        if molname is None:
            molname = 'anonymous'
    
         # Set the temp filesystem storage
        temp_dir = tempfile.mkdtemp(prefix="search_data_", dir=None)
        search_data = os.path.join(temp_dir,'smiles.sdf')

        if searchName is None:
            searchName = id_generator()

        # Creates a simple MOLfile from the SMILES
        try:
            m = Chem.MolFromSmiles(smiles)
            if m is None:
                return JsonResponse({'error': 'SMILES format not recognized'}, status=status.HTTP_400_BAD_REQUEST)

            m.SetProp("_Name",molname)

            with open(search_data,'w') as f:
                f.write(Chem.MolToMolBlock(m))

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        command_search={'space': spacename, 'version':int(version) ,'label':searchName, 'infile':search_data , 'metric':metric, 'numsel':numsel, 'cutoff':cutoff}
        
        x = threading.Thread(target=searchThread, args=(command_search,'JSON', temp_dir))
        x.start()
        return Response(searchName, status=status.HTTP_200_OK)

class SearchSmarts(APIView):
    """
    Search, input file is provided as a SMILES
    """
    roles = {'kh-access'}

    def put(self, request, spacename, version, searchName=None):

        # get the upladed file with name "file"
        metric = request.query_params.get('metric')
        numsel = request.query_params.get('numsel')
        cutoff = request.query_params.get('cutoff')
        
        if cutoff is not None:
            cutoff = float(cutoff)

        if numsel is not None:
            numsel = int(numsel)

        # command_search = {'space': args.space,
        #          'version': version,
        #          'infile': args.infile,
        #          'smarts': args.smarts,
        #          'runtime_param': args.parameters,
        #          'label': label}

        try:
            smarts = request.POST.get("SMARTS")
        except MultiValueDictKeyError as e:
            return JsonResponse({'error':'SMARTS not provided'}, status=status.HTTP_400_BAD_REQUEST)

        # Set the temp filesystem storage
        temp_dir = tempfile.mkdtemp(prefix="search_data_", dir=None)

        if searchName is None:
            searchName = id_generator()

        m = Chem.MolFromSmarts(smarts)
        if m is None:
            return JsonResponse({'error': 'SMARTS format not recognized'}, status=status.HTTP_400_BAD_REQUEST)

        command_search={'space': spacename, 'version':int(version) ,'label':searchName, 'smarts':smarts , 'metric':metric, 'numsel':numsel, 'cutoff':cutoff}
        
        x = threading.Thread(target=searchThread, args=(command_search,'JSON', temp_dir))
        x.start()
        return Response(searchName, status=status.HTTP_200_OK)

        
def searchThread(command, output, temp_dir):

    print ("Thread Start")
    success, results = context.search_cmd(command, output_format=output)
    shutil.rmtree(temp_dir)
    print ("Thread End")

def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))
    