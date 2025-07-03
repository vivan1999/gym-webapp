from django.db import models

# Create your models here.

class Members(models.Model):
    email_id = models.EmailField(blank= True,null=True)
    first_name = models.CharField(blank=False)
    last_name = models.CharField(blank=True,null=True)
    phone_number = models.IntegerField(max_length=10, null=False)
    dob = models.DateField(blank=True,null=True)
    gender = models.CharField(blank=False)
    address = models.CharField(blank=False, max_length=200)
    created = models.DateTimeField(auto_now=True)
    class Meta:
        ordering = ["-created"]
    def __str__(self):
        return str(self.first_name)