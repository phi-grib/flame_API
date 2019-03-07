from django.urls import path
from .views import ModelsList

urlpatterns = [
    path('list', ModelsList.as_view()),
]