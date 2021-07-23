from rest_framework import serializers
from .models import Apparel, Brand, PriceRange

class ApparelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apparel
        fields = ('name',)

class PriceRangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceRange
        fields = ('label',)

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ('name',)