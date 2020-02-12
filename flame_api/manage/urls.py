from django.urls import path
from .views import ListModels, ManageModels, ManageVersions
from .views import ManageParameters, ManageValidation, ManageExport, ManageImport
from .views import ListPredictions, ManagePredictions, ManageDocumentation

urlpatterns = [
    path("models", ListModels.as_view()),
    path("predictions", ListPredictions.as_view()),
    path("prediction/<str:predictionName>", ManagePredictions.as_view()),
    path("model/import", ManageImport.as_view()),
    path("model/<str:modelname>", ManageModels.as_view()),
    path("model/<str:modelname>/export",ManageExport.as_view()),
    path("model/<str:modelname>/version/<int:version>", ManageVersions.as_view()),
    path("model/<str:modelname>/version/<int:version>/parameters", ManageParameters.as_view()),
    path("model/<str:modelname>/version/<int:version>/documentation", ManageDocumentation.as_view()),
    path("model/<str:modelname>/version/<int:version>/validation", ManageValidation.as_view()),
]
