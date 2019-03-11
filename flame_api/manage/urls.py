from django.urls import path
from .views import ListModels, ManageModel

urlpatterns = [
    path('list', ListModels.as_view()),
    path('/model/<str:modelname>', ManageModel.as_view()),
]