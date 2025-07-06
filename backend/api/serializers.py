from rest_framework import serializers
from .models import Members,Membership
from django.contrib.auth.models import User

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields ="__all__"
        extra_kwargs = {
            "user": {"read_only":True}
        }

class MembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Membership
        fields = "__all__"

class UserSerailizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id","username","password"]
        extra_kwargs={
            "password":{"write_only":True}
        }
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
    def validate_email(self,value):
        if User.objects.filter(email = value).exists():
            raise serializers.ValidationError("This email already exist.")
        return value