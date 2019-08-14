from django.urls import path
from django.conf.urls import include
from .views import API, Ready, Alive

from django.views.generic import TemplateView

urlpatterns = [
   
    path('api', include('swagger_ui.urls')),
    path("alive", Alive.as_view()),
    path("ready", Ready.as_view()),  
]
