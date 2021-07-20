from django.shortcuts import render
from django.http import HttpResponse
from .models import Shop

def index(request):
    message = "Salut tout le monde !"
    return HttpResponse(message)
