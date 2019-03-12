from django.urls import path
from .views import BuildModel

urlpatterns = [
    path('models/<str:modelname>/version/<str:version>', BuildModel.as_view()),
]