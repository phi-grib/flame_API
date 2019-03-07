from django.urls import path
from .views import Build

urlpatterns = [
    path('modelname/<str:modelname>/version/<str:version>', Build.as_view()),
]