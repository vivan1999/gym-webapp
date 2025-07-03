from django.urls import path
from . import views

urlpatterns=[path("",views.get_api,name="api_entry_point"),
             path("post/",views.post_api,name="saving_members")]