from django.urls import path
from .views import ListModels, ManageModels, ManageVersions, TestUpload

urlpatterns = [
    path('models', ListModels.as_view()),
    path('models/<str:modelname>', ManageModels.as_view()),
    path('models/<str:modelname>/version/<str:version>', ManageVersions.as_view()),
    path('test', TestUpload.as_view())
]