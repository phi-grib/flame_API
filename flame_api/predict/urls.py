#! -*- coding: utf-8 -*-

# Description    Flame API prediction urls
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
from .views import Predict, PredictName, PredictSmiles

urlpatterns = [
    path("model/<str:modelname>/version/<str:version>", Predict.as_view()),
    path("model/<str:modelname>/version/<str:version>/predictionName/<str:predictionName>", PredictName.as_view()),
    path("model/<str:modelname>/version/<str:version>/predictionName/<str:predictionName>/smiles", PredictSmiles.as_view())
    ]
