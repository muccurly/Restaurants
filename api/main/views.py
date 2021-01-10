from django.shortcuts import render
from main.serializer import RestaurantSerializer, ReviewSerializer
from main.models import Restaurant, Review
from rest_framework import viewsets


class ReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()


class RestaurantViewSet(viewsets.ModelViewSet):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()
