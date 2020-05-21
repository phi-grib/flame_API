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
from django.views.generic.base import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [  
    url(r'^$', serve,kwargs={'path': 'index.html'}), 
    # url(r'^$', views.HomePageView.as_view() ),
    # url(r'^(?!/?static/)(?!/?media/)(?P<path>.*\..*)$',
    #    RedirectView.as_view(url='/static/%(path)s', permanent=False)),
    url("api/v1/",include("minimal.urls")),
    url("api/v1/manage/", include("manage.urls")),
    url("api/v1/smanage/", include("smanage.urls")),
    url("api/v1/build/", include("build.urls")),
    url("api/v1/sbuild/", include("sbuild.urls")),
    url("api/v1/predict/", include("predict.urls")),
    url("api/v1/search/", include("search.urls"))
# ]+ static(settings.STATIC_URL)
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
