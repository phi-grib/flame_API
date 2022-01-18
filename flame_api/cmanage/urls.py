#! -*- coding: utf-8 -*-

# Description    Flame API build urls
#
# Authors:       Manuel Pastor (manuel.pastor@upf.edu)
#                Rodrigo Lorenzo Lorenzo
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
from .views import Cmanage
from .views import CHead
from .views import CurateParams
from .views import CurationFile
from .views import ExportCurationFile


urlpatterns = [
    path("list", Cmanage.as_view()),
    path("head/<str:endpoint>", CHead.as_view()),
    path("params/<str:endpoint>", CurateParams.as_view()), 
    path("fullfile/<str:endpoint>", CurationFile.as_view()),
    path("exportFile/<str:endpoint>/format/<str:oformat>", ExportCurationFile.as_view())
]
