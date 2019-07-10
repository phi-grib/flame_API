from django.urls import path
from .views import Search

urlpatterns = [path("space/<str:spacename>/version/<str:version>", Search.as_view())]
