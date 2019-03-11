from django.urls import path
from .views import ListModels, CreateModel

urlpatterns = [
    path('list', ListModels.as_view()),
    path('create/modelname/<str:modelname>', CreateModel.as_view()),
]