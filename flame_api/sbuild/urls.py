from django.urls import path
from .views import BuildSpace

urlpatterns = [
    path('space/<str:spacename>', BuildSpace.as_view()),
]