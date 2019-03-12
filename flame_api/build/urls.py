from django.urls import path
from .views import BuildModel

urlpatterns = [
    path('models/<str:modelname>', BuildModel.as_view()),
]