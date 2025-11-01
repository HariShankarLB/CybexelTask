from django.db import models

class ImageGallery(models.Model):
    image = models.ImageField(upload_to='images/')
