from django.urls import path
from .views import Predict, PredictName

urlpatterns = [
    path("model/<str:modelname>/version/<str:version>", Predict.as_view()),
    path("model/<str:modelname>/version/<str:version>/predictionName/<str:predictionName>", PredictName.as_view())]
