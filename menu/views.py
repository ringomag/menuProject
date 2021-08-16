from django.shortcuts import render
from .models import *

# Create your views here.

def index(request):
    menu = Menu.objects.filter(parent__isnull=True)
    all = Menu.objects.filter(parent__isnull=False)
    
    return render(request, 'index.html', {"menu":menu, "all":all})