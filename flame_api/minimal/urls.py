from django.urls import path
from .views import API, Ready, Alive

from django.views.generic import TemplateView

urlpatterns = [
   
    path('api', API.as_view()),
    path("alive", Alive.as_view()),
    path("ready", Ready.as_view()),  
]
