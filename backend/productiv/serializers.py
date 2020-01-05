    # todo/serializers.py

from rest_framework import serializers
from .models import Productivity

class ProductivitySerializer(serializers.ModelSerializer):
  class Meta:
    model = Productivity
    fields = ('date', 'rating', 'description')