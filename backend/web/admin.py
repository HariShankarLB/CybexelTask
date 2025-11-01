from django.contrib import admin
from .models import ImageGallery

class ImageGalleryAdmin(admin.ModelAdmin):
    list_display = ('image',)

# Register your models here.

admin.site.register(ImageGallery, ImageGalleryAdmin)