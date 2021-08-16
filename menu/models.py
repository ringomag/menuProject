from django.db import models
from django.db.models.deletion import SET_NULL

# Create your models here.

class Menu(models.Model):
    name = models.CharField(max_length=100)
    parent = models.ForeignKey('self', null=True, blank=True, related_name="children", on_delete=SET_NULL)

    def __str__(self):
        return self.name