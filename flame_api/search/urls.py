from django.urls import path
from .views import Search

urlpatterns = [path("space/<str:spacename>/version/<int:version>", Search.as_view())]
