from django.db import models


class Questionnaire(models.Model):
    name = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    movie = models.CharField(max_length=100)

    def __str__(self):
        return self.name
