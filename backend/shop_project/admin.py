from django.contrib import admin
from .models import Brand, Shop, Apparel, PriceRange

class ShopAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'address')

class PriceRangeAdmin(admin.ModelAdmin):
    list_display = ('id', 'label')

class ApparelAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

class BrandAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

# Register your models here.

admin.site.register(Brand, BrandAdmin)
admin.site.register(Apparel, ApparelAdmin)
admin.site.register(PriceRange, PriceRangeAdmin)
admin.site.register(Shop, ShopAdmin)

