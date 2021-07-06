#! -*- coding: utf-8 -*-

# Description    Flame API manage views
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
from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view


from rest_framework.response import Response
from rest_framework import status

# dirty
from random import randint

# Create your views here.


class ManageVerification(APIView):
    """
    Manage verification
    """
    
    def get(self, request,modelname):
        """
        Retrieve info of model verification
        """
        # TODOO
        if randint(0,1) == 1:
            staticModelVerification = {'stage':'Data cheking', 'status':'Passed','Comments':''},{'stage':'Model testing', 'status':'Passed','Comments':''},{'stage':'Inspection of model', 'status':'Failed','Comments':'Missing information: Version'},{'stage':'examination of executive summary','status':'','comments':''}
            return Response(staticModelVerification,status=status.HTTP_200_OK)
        else:
           return Response(False,status=status.HTTP_200_OK) 

    def post(self, request, modelname):
        """
        Generate Model verification
        """
        # TODOO
        generateVerification =  {'stage':'Data cheking', 'status':'Passed','Comments':'Not description'},{'stage':'Model testing', 'status':'Passed','Comments':''},{'stage':'Inspection of model', 'status':'Failed','Comments':'Missing information: Version'},{'stage':'examination of executive summary','status':'','comments':''}
        return Response(generateVerification,status.HTTP_200_OK)

    def delete(self,request,modelname):
        """
        Delete Model verification
        """
        # TODOO
        return HttpResponse("<h1>TODO DELETE VERIFICATION</h1>")

class Report(APIView):
    """
    Report
    """
    def post(self, request,verificationname,verificatorname):
        """
        Generate a verification report 
        """
        # TODOO
        message = "Reported successfully"
        return Response(message,status=status.HTTP_200_OK)


class Sign(APIView):
    """
    Sign report
    """
    def post(self,request,verificatorname,nreport):
        # TODOO
        message = "Signed successfully"
        return Response(message,status=status.HTTP_200_OK)


    
