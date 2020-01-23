from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from drf.serializers import User_Serializer, Branch_Serializer, Account_Serializer, Customer_Serializer
from drf.models import Account, Branch, Customer

class user_viewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = User_Serializer

class Branch_Viewset(viewsets.ModelViewSet):
    queryset = Branch.objects.all()
    serializer_class = Branch_Serializer

class Account_Viewset(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = Account_Serializer

class Customer_Viewset(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = Customer_Serializer
