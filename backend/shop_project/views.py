from .models import Apparel, Brand, PriceRange
from rest_framework import viewsets
from .serializers import ApparelSerializer, PriceRangeSerializer, BrandSerializer
from django.http.response import JsonResponse
from rest_framework.decorators import api_view

class ApparelView(viewsets.ModelViewSet):
    serializer_class = ApparelSerializer
    queryset = Apparel.objects.all()

class PriceRangeView(viewsets.ModelViewSet):
    serializer_class = PriceRangeSerializer
    queryset = PriceRange.objects.all()

class BrandView(viewsets.ModelViewSet):
    serializer_class = BrandSerializer
    queryset = Brand.objects.all()

@api_view(['GET'])
def filtered_brands(request):
    price_range_id = request.query_params.get('price_range_id')
    apparel_id = request.query_params.get('apparel_id')
    
    brands = Brand.objects.filter(
        price_range__id__exact=price_range_id,
        apparels__id__in=[apparel_id]
    )
    return JsonResponse(BrandSerializer(brands, many=True).data, safe=False)