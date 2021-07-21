from django.shortcuts import render
from django.http import HttpResponse
from .models import Apparel, Brand, PriceRange, Shop
from rest_framework import viewsets
from .serializers import ApparelSerializer



def index(request):
    message = "Salut tout le monde !"
    return HttpResponse(message)


class ApparelView(viewsets.ModelViewSet):
    serializer_class = ApparelSerializer
    queryset = Apparel.objects.all()
