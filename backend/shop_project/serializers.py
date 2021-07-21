from rest_framework import serializers
from .models import Apparel, Brand, PriceRange, Shop

class ApparelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apparel
        fields = ('name',)