from django.urls import path
from . import views

urlpatterns=[path("",views.get_api,name="api_entry_point"),
             path("add_member/",views.AddNewMember.as_view(),name="saving_members"),
             path("add_new_membership/",views.AddNewMembership.as_view(),name="add new membership option")]