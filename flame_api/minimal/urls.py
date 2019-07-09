from django.urls import path
from .views import API, Ready, Alive

urlpatterns = [
    path("", API.as_view()),
    path("alive", Alive.as_view()),
    path("ready", Ready.as_view()),  
]
