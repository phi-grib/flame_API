from django.urls import path
from .views import BuildModel

urlpatterns = [
    path('model/<str:modelname>', BuildModel.as_view()),
]