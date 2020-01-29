from django.urls import path
from .views import Search, SearchName

urlpatterns = [
  path("space/<str:spacename>/version/<int:version>", Search.as_view()),
  path("space/<str:spacename>/version/<int:version>/searchName/<str:searchName>", SearchName.as_view())
  ]
