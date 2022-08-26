#! -*- coding: utf-8 -*-

# Description    Flame API manage sviews
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

from django.shortcuts import render
import json
import time

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render
from django.http import JsonResponse

from flame import smanage

# Create your views here.
class ListSpaces(APIView):
    """
    Spaces list
    """
    roles = {'kh-access'}

    def get(self, request):
        spaces = smanage.action_dir()
        return Response(spaces, status=status.HTTP_200_OK)

class ManageSpaces(APIView):
    """
    Manage flame space
    """
    roles = {'kh-access'}

    def get(self, request, spacename):
        """
        Retrieves model information or metadata
        TODO: dont use hardcoded 0 version
        TODO: haandle info errors 
        """
        # TODO: FIX model info and metadata for  whole endpoint in flame
        flame_status = smanage.action_info(spacename, 0, 'bin')
        
        if flame_status[0]:
            return Response(flame_status[1], status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)
            
    def post(self, request, spacename):
        """
        Creates a new flame space
        """
        flame_status = smanage.action_new(spacename)
        if flame_status[1] == f"Endpoint {spacename} already exists":
            return JsonResponse({'error':flame_status[1]}, status=status.HTTP_409_CONFLICT)

        response = {"spacename": spacename, "versions": "0"}

        return JsonResponse(response, status=status.HTTP_201_CREATED)

    def delete(self, request, spacename):
        """
        Delete space
        """
        flame_status = smanage.action_kill(spacename)

        if flame_status[0]:
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return JsonResponse({'error':flame_status[1]}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, spacename):
        """
        Publishes a new version of the space
        TODO: Complete  error handling and error status
        """
        flame_status = smanage.action_publish(spacename)
        if flame_status[0]:
            response = {'spacename':spacename,'version':flame_status[1]}
            return JsonResponse(response, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)

class ManageVersions(APIView):
    """
    Manage spaces to the version level
    """
    roles = {'kh-access'}

    def get(self, request, spacename, version):
        """
        Retrieves space information or metadata
        TODO: dont use hardcoded 0 version
        TODO: haandle info errors 
        """
        success, result = smanage.action_info(spacename, version, output='bin')
        if success:
            return Response(result, status=status.HTTP_200_OK)
        else:
            if 'code' in result and result['code'] == 0:
                return JsonResponse({'waiting': time.ctime(time.time())}, status=status.HTTP_200_OK)
    
        return JsonResponse (result,status = status.HTTP_404_NOT_FOUND)
            

    def delete(self, request, spacename, version):
        """
        Delete space
        """
        flame_status = smanage.action_remove(spacename, version)
        if flame_status[0]:
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return JsonResponse({'error':flame_status[1]}, status = status.HTTP_404_NOT_FOUND)

class ManageParameters(APIView):
    """
    Manage space parameters
    """
    roles = {'kh-access'}

    def get(self,request,spacename,version):
        """
        Retrieve parameters of space version
        """
        flame_status = smanage.action_parameters(spacename, version, oformat = 'JSON')       
        if flame_status[0]:
            return Response(json.loads(flame_status[1].dumpJSON()), status=status.HTTP_200_OK)
        else:
            return JsonResponse({'error':flame_status[1]},status = status.HTTP_404_NOT_FOUND)


class ManageSearches(APIView):

    roles = {'kh-access'}

    def get(self, request, searchName):
        """
        Retrieve info of sesrch
        """

        success, result = smanage.action_searches_result(searchName, output='JSON')
        if success:
            results_json = json.loads(result.getJSON())
            results_json.pop('var_nam', None)
            return Response(results_json, status=status.HTTP_200_OK)
        else:
            if 'code' in result and result['code'] == 0:
                return JsonResponse({'waiting': time.ctime(time.time())}, status=status.HTTP_200_OK)
            if 'code' in result and result['code'] == 1:
                return JsonResponse({'aborted': result['message']}, status=status.HTTP_200_OK)
        
        return JsonResponse(result,status = status.HTTP_404_NOT_FOUND)

class ManageSearchesTH(APIView):

    roles = {'kh-access'}

    def get(self, request, searchName):
        """
        Retrieve info of search and reformat for Toxhub
        """

        success, result = smanage.action_searches_result(searchName, output='JSON')
        if success:
            results_json = json.loads(result.getJSON())
            results_json.pop('var_nam', None)
            results_json.pop('meta', None)
            results_json.pop('manifest', None)

            # we will process ONLY the first query molecule
            search_results = results_json['search_results'][0]

            n_results = len(search_results['distances'])
            if not 'obj_id' in search_results:
                search_results['obj_id'] = search_results['obj_nam']

            search_results_TH = []
            for i in range (n_results):
                idict = {'distances': search_results['distances'][i], 
                         'obj_nam': search_results['obj_nam'][i],
                         'obj_id': search_results['obj_id'][i],
                         'SMILES': search_results['SMILES'][i]
                        }
                search_results_TH.append(idict) 

            # only the results for the first molecule are returned    
            results_json['search_results'] = search_results_TH
            results_json['obj_nam'] = [results_json['obj_nam'][0]]
            results_json['SMILES'] = [results_json['SMILES'][0]]

            return Response(results_json, status=status.HTTP_200_OK)
        else:
            if 'code' in result and result['code'] == 0:
                return JsonResponse({'waiting': time.ctime(time.time())}, status=status.HTTP_200_OK)
            if 'code' in result and result['code'] == 1:
                return JsonResponse({'aborted': result['message']}, status=status.HTTP_200_OK)
        
        return JsonResponse(result,status = status.HTTP_404_NOT_FOUND)