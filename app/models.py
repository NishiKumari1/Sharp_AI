# Create your models here.
from django.db import models

class UserProfile(models.Model):
    experience = models.IntegerField()
    skills = models.CharField(max_length=100)
    profile = models.CharField(max_length=100)




