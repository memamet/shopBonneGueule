from django.db import models

# Create your models here.
class Shop(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    google_link = models.CharField(max_length=255)
    address = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class PriceRange(models.Model):
    id = models.AutoField(primary_key=True)
    label = models.CharField(max_length=255)

    def __str__(self):
        return self.label

class Apparel(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    brands = models.ManyToManyField('Brand', related_name='apparels')

    def __str__(self):
        return self.name

class Brand(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    website = models.CharField(max_length=255)
    price_range = models.ForeignKey(PriceRange, on_delete=models.CASCADE)
    shops = models.ManyToManyField('Shop', related_name='brands')

    def __str__(self):
        return self.name
