#! -*- coding: utf-8 -*-

# Description    Flame API minimum API for ToxHub integration
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

import os
import yaml
from django.shortcuts import render
from django.conf import settings
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework_yaml.renderers import YAMLRenderer
from rest_framework.views import APIView

class Ready(APIView):
    """
    Ready service
    """
    roles = {'kh-access'}

    def get(self, request):
       
        return Response("I am ready", 200)

class Alive(APIView):
    """
    Alive service
    """
    roles = {'kh-access'}

    def get(self, request):
       
        return Response("I am alive", 200)

class API(APIView):
    """
    Returns the API definition file
    """
    roles = {'kh-access'}

    renderer_classes = [YAMLRenderer]
    def get(self, request):
        # Read YAML file

        with open("../flameAPI.yaml", 'r') as stream:
            data_loaded = yaml.safe_load(stream)
        return Response(data_loaded, status=200)

  

