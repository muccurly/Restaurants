from main.models import Restaurant, Review, Kitchen
from rest_framework import serializers


class KitchenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kitchen
        fields = ['title']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['name', 'date', 'rating', 'comments']


class RestaurantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Restaurant
        fields = '__all__'
    reviews = ReviewSerializer(many=True, read_only=True)
    kitchen = KitchenSerializer(many=True, read_only=True)
