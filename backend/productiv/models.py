from django.db import models

# Create your models here.

# add this
class Productivity(models.Model):
    date = models.CharField(max_length=120, default='date.today()')
    description = models.TextField()

def _str_(self):
    return self.title