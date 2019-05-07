from django.urls import path
from .views import Predict

urlpatterns = [path("model/<str:modelname>/version/<str:version>", Predict.as_view())]
