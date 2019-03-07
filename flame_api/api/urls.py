from django.urls import path
from snippets import views

urlpatterns = [
    path('api/', views.snippet_list),
    path('api/<int:pk>/', views.snippet_detail),
]