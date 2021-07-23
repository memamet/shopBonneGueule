from django.shortcuts import render
from django.http import HttpResponse
from .models import Apparel, Brand, PriceRange, Shop
from rest_framework import viewsets
from .serializers import ApparelSerializer, PriceRangeSerializer, BrandSerializer 


class ApparelView(viewsets.ModelViewSet):
    serializer_class = ApparelSerializer
    queryset = Apparel.objects.all()

class PriceRangeView(viewsets.ModelViewSet):
    serializer_class = PriceRangeSerializer
    queryset = PriceRange.objects.all()

class BrandView(viewsets.ModelViewSet):
    serializer_class = BrandSerializer
    queryset = Brand.objects.all()
