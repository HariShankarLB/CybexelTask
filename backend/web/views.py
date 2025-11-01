from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ImageGallerySerializer
from .models import ImageGallery


class ImageGalleryView(viewsets.ModelViewSet):
    serializer_class = ImageGallerySerializer
    queryset = ImageGallery.objects.all()