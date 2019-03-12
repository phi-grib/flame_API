from django.urls import path
from .views import ListModels, ManageModels, ManageVersions

urlpatterns = [
    path('', ListModels.as_view()),
    path('<str:modelname>', ManageModels.as_view()),
    path('<str:modelname>/version/<str:version>', ManageVersions.as_view())
]