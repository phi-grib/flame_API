from django.urls import path
from .views import ListSpaces, ManageSpaces, ManageVersions, ManageParameters, ManageSearches

urlpatterns = [
    path("search/<str:searchName>", ManageSearches.as_view()),
    path("spaces", ListSpaces.as_view()),
    #path("space/import", ManageImport.as_view()),
    path("space/<str:spacename>", ManageSpaces.as_view()),
    #path("space/<str:spacename>/export",ManageExport.as_view()),
    path("space/<str:spacename>/version/<int:version>", ManageVersions.as_view()),
    path("space/<str:spacename>/version/<int:version>/parameters",ManageParameters.as_view()),
    #path("space/<str:spacename>/version/<int:version>/validation",ManageValidation.as_view()),
]
