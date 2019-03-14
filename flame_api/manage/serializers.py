from rest_framework import serializers

from manage.models import FlameModel

class FlameModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlameModel
        fields = ('name', 'version')