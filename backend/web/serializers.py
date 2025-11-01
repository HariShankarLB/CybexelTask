from rest_framework import serializers
from .models import ImageGallery

class ImageGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageGallery
        fields = ('id','image',)