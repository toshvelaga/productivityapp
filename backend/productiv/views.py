    # todo/views.py

from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import ProductivitySerializer      # add this
from .models import Productivity                     # add this

class ProductivityView(viewsets.ModelViewSet):       # add this
  serializer_class = ProductivitySerializer          # add this
  queryset = Productivity.objects.all()              # add this