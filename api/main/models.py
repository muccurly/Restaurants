from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Kitchen(models.Model):
    title = models.CharField(verbose_name='Название', max_length=255)

    def __str__(self):
        return self.title


class PlaceInMap(models.Model):
    longitude = models.DecimalField(max_digits=30, decimal_places=15)
    latitude = models.DecimalField(max_digits=30, decimal_places=15)


class Review(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateField()
    rating = models.CharField(max_length=100, default=None)
    comments = models.TextField()

    def __str__(self):
        return self.name


class Restaurant(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default=None)
    photograph = models.TextField()
    address = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    kitchen = models.ManyToManyField(Kitchen)
    longitude = models.DecimalField(
        max_digits=30, decimal_places=15, default=None)
    latitude = models.DecimalField(
        max_digits=30, decimal_places=15, default=None)

    reviews = models.ManyToManyField(Review, default=None)
    genre = models.CharField(max_length=150, default=None)

    def __str__(self):
        return self.name
