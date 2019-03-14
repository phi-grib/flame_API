from django.db import models
from django.contrib.postgres.fields import ArrayField
# Create your models here.

class FlameModel(models.Model):
    name = models.CharField(max_length=20, blank=False)
    versions = ArrayField(models.CharField(max_length=20, blank=False))
