"""flame_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
#from django.contrib import admin
#from django.urls import path, include

from django.conf.urls import url, include
from django.views.generic import RedirectView
from django.contrib.staticfiles.views import serve

urlpatterns = [

    url(r'^$', serve, kwargs={'path': 'index.html'}),
    url(r'^(?!/?static/)(?!/?media/)(?P<path>.*\..*)$', RedirectView.as_view(url='/static/%(path)s', permanent=False)),
    url("flame/api/",include("minimal.urls")),
    url("flame/api/manage/", include("manage.urls")),
    url("flame/api/build/", include("build.urls")),
    url("flame/api/predict/", include("predict.urls")),
]
