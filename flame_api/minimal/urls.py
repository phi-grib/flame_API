from django.urls import path
from .views import API, Ready, Alive

from django.views.generic import TemplateView

urlpatterns = [
   
    path('api', TemplateView.as_view(template_name="API.html")),
    path("alive", Alive.as_view()),
    path("ready", Ready.as_view()),  
]
