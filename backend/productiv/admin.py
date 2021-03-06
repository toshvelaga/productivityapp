from django.contrib import admin
from .models import Productivity

# Register your models here.

class ProductivityAdmin(admin.ModelAdmin): 
    list_display = ('description', 'date', 'rating')

admin.site.register(Productivity, ProductivityAdmin)