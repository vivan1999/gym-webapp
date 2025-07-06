from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from rest_framework.response import Response
from .models import Members, Membership
from django.forms.models import model_to_dict
from rest_framework.decorators import api_view
from .serializers import MemberSerializer,MembershipSerializer,UserSerailizer
from rest_framework.generics import CreateAPIView, ListCreateAPIView
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny

@api_view(["GET"])
def get_api(request, *args, **kwargs):
    model_data = Members.objects.first()
    instance = MemberSerializer(model_data)
    print(instance)
    #data= model_to_dict(model_data)
    return Response(instance.data)

@api_view(["POST"])
def post_api(request,*args):
    if request.method =="POST":
        serializer = MemberSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            print("true post")
            serializer.save()
            print(serializer.data)
            return Response(serializer.data)
        
class AddNewUser(CreateAPIView):
    queryset = User
    serializer_class = UserSerailizer
    permission_classes = [AllowAny]

class AddNewMembership(ListCreateAPIView):
    queryset = Membership.objects.all()
    serializer_class = MembershipSerializer

    def perform_create(self, serializer):
        if serializer.is_valid:
            instance = serializer.save()
            return Response(instance.data)
        else:
            return Response(serializer.errors)
# Create your views here.
