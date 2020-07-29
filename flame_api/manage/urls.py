#! -*- coding: utf-8 -*-

# Description    Flame API manage usrls
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

from django.urls import path
from .views import ListModels, ManageModels, ManageVersions
from .views import ManageParameters, ManageValidation, ManageExport, ManageImport
from .views import ListPredictions, ManagePredictions, ManageDocumentation
from .views import ManageLabels, ManageConfiguration

urlpatterns = [
    path("models", ListModels.as_view()),
    path("predictions", ListPredictions.as_view()),
    path("prediction/<str:predictionName>", ManagePredictions.as_view()),
    path("model/import", ManageImport.as_view()),
    path("model/<str:modelname>", ManageModels.as_view()),
    path("model/<str:modelname>/export",ManageExport.as_view()),
    path("model/<str:modelname>/version/<int:version>", ManageVersions.as_view()),
    path("model/<str:modelname>/version/<int:version>/parameters", ManageParameters.as_view()),
    path("model/<str:modelname>/version/<int:version>/documentation", ManageDocumentation.as_view()),
    path("model/<str:modelname>/version/<int:version>/validation", ManageValidation.as_view()),
    path("model/<str:modelname>/version/<int:version>/labels", ManageLabels.as_view()),
    path("configuration", ManageConfiguration.as_view()),
]
