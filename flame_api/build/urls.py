from django.urls import path
from . import views

urlpatterns = [
    path('modelname/<str:modelname>/version/<str:version>', views.build),
]