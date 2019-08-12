from django.urls import path
from .views import API, Ready, Alive

from django.views.generic import TemplateView

urlpatterns = [
    # ...
    # Route TemplateView to serve Swagger UI template.
    #   * Provide `extra_context` with view name of `SchemaView`.
    path('', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url':'openapi-schema'}
    ), name='swagger-ui'),
    path("alive", Alive.as_view()),
    path("ready", Ready.as_view()),  
]
