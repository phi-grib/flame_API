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
from .views import ManageSeries, ManageParameters, ManageValidation, ManageExport, ManageExportTest, ManageExportDownload, ManageImport
from .views import ListPredictions, ManagePredictions, ManageDocumentation
from .views import ManageLabels, ManageConfiguration, ManageParameters2Yaml, ManageYaml2Parameters, ManageRefresh, ManageRefreshTest
from .views import ListProfiles, ManageProfiles, ManageProfilesSummary
from .views import ListCollections, ManageCollections
from .views import ListProfiles, ManageProfiles, ManageProfilesSummary
from .views import ListBaskets, ManageBasket

urlpatterns = [
    path("models", ListModels.as_view()),
    path("predictions", ListPredictions.as_view()),
    path("prediction/<str:predictionName>", ManagePredictions.as_view()),
    path("profiles", ListProfiles.as_view()),
    path("profile/<str:profileName>", ManageProfiles.as_view()),
    path("profile/<str:profileName>/<int:item>", ManageProfiles.as_view()),
    path("profile/<str:profileName>/summary", ManageProfilesSummary.as_view()),
    path("collections",ListCollections.as_view()),
    path("collection/<str:nameCollection>", ManageCollections.as_view()),
    path("model/import", ManageImport.as_view()),
    path("model/<str:modelname>", ManageModels.as_view()),
    path("model/<str:modelname>/version/<int:version>/export",ManageExport.as_view()),
    path("model/<str:modelname>/version/<int:version>/temp_dir/<str:temp_dir>/export_test",ManageExportTest.as_view()),
    path("model/<str:modelname>/version/<int:version>/temp_dir/<str:temp_dir>/export_download",ManageExportDownload.as_view()),
    path("model/<str:modelname>/version/<int:version>", ManageVersions.as_view()),
    path("model/<str:modelname>/version/<int:version>/parameters2yaml", ManageParameters2Yaml.as_view()),
    path("model/<str:modelname>/version/<int:version>/yaml2parameters", ManageYaml2Parameters.as_view()),
    path("model/<str:modelname>/version/<int:version>/series", ManageSeries.as_view()),
    path("model/<str:modelname>/version/<int:version>/parameters", ManageParameters.as_view()),
    path("model/<str:modelname>/version/<int:version>/oformat/<str:oformat>/documentation", ManageDocumentation.as_view()),
    path("model/<str:modelname>/version/<int:version>/validation", ManageValidation.as_view()),
    path("model/<str:modelname>/version/<int:version>/labels", ManageLabels.as_view()),
    path("model/<str:modelname>/refresh", ManageRefresh.as_view()),
    path("model/<str:modelname>/refresh_test", ManageRefreshTest.as_view()),
    path("configuration", ManageConfiguration.as_view()),
    path("basket/add", ManageBasket.as_view()),
    path("baskets", ListBaskets.as_view()),
    path("basket/<int:item>", ManageBasket.as_view())
]
