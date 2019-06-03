from django.urls import path
from .views import ListModels, ManageModels, ManageVersions, TestUpload
from .views import ManageParameters, ManageValidation, ManageExport, ManageImport

urlpatterns = [
    path("models", ListModels.as_view()),
    path("models/import", ManageImport.as_view()),
    path("models/<str:modelname>", ManageModels.as_view()),
    path("models/<str:modelname>/export",ManageExport.as_view()),
    path("models/<str:modelname>/version/<int:version>", ManageVersions.as_view()),
    path("models/<str:modelname>/version/<int:version>/parameters",ManageParameters.as_view()),
    path("models/<str:modelname>/version/<int:version>/validation",ManageValidation.as_view()),
   
   
    path("test", TestUpload.as_view()),
]
