#! -*- coding: utf-8 -*-

# Description    Flame API search urls
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
from .views import Search, SearchName

urlpatterns = [
  path("space/<str:spacename>/version/<int:version>", Search.as_view()),
  path("space/<str:spacename>/version/<int:version>/searchName/<str:searchName>", SearchName.as_view())
  ]
