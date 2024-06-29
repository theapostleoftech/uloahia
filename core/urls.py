"""
This is holds the url route points for the core app
"""
from django.urls import path

from . import views

app_name = 'core'
urlpatterns = [
    path('', views.IndexView.as_view(), name='home'),
    path('waitlist/', views.JoinWaitListView.as_view(), name='join_waitlist'),
]
