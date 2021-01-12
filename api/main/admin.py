from django.contrib import admin

# Register your models here.

from main.models import Restaurant, Review, Kitchen, PlaceInMap

admin.site.register(Restaurant)
admin.site.register(PlaceInMap)
admin.site.register(Kitchen)
admin.site.register(Review)
