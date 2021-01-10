from django.urls import path, include
from rest_framework import routers
from main import views
router = routers.DefaultRouter()
router.register('restaurants', views.RestaurantViewSet)
router.register('reviews', views.ReviewViewSet)
urlpatterns = [
    path('', include(router.urls))
]
