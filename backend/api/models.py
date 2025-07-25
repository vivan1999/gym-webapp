from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Membership(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    months = models.IntegerField(blank=False,null=False)
    price = models.IntegerField(blank=False)
    discount = models.IntegerField(blank=True,null=True)
    final_price = models.IntegerField(blank=True,null=True)
    benefits = models.CharField(blank=True,null=True)
    
    class Meta:
        ordering=["price"]

    def save(self, *args, **kwargs):
        self.final_price = self.price - (self.discount or 0)
        return super().save(*args, **kwargs)
    
    def __str__(self):
        return str(self.title)

class Members(models.Model):
    APPROVAL_CHOICES = [('approved','Approved'),('not approved', 'Not Approved')]
    user = models.ForeignKey(User,on_delete=models.SET_NULL,blank=True,null=True)
    email_id = models.EmailField(blank= True,null=True)
    first_name = models.CharField(blank=False)
    last_name = models.CharField(blank=True,null=True)
    phone_number = models.IntegerField(null=False)
    dob = models.DateField(blank=True,null=True)
    gender = models.CharField(blank=False)
    address = models.CharField(blank=False, max_length=200)
    medical_condition = models.CharField(blank=True,null=True)
    medications = models.CharField(blank=True,null=True)
    membership = models.ForeignKey(Membership,verbose_name="membership_selected", on_delete=models.SET_NULL,blank=True,null=True)
    add_on_services = models.CharField(blank=True,null=True)
    payment_utr = models.CharField(blank=True,null=False)
    approved = models.CharField(blank=False,choices=APPROVAL_CHOICES, default='not approved')
    created = models.DateTimeField(auto_now=True)
    class Meta:
        ordering = ["-created"]
    def __str__(self):
        return str(self.first_name+ " "+ self.last_name)
    

