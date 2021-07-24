from rest_framework import serializers
from .models import Apparel, Brand, PriceRange, Shop

class ApparelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apparel
        fields = ('name','id')

class PriceRangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceRange
        fields = ('label',)

class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields= ('name','address', 'google_link')

class BrandSerializer(serializers.ModelSerializer):
    shops = ShopSerializer(many=True)
    class Meta:
        model = Brand
        fields = ('name','website','shops')

