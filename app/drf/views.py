from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from drf.serializers import user_serializer, Branch_Serializer, Account_Serializer, Customer_Serializer
from .models import Account, Branch, Customer

class user_viewset(viewsets.ModelViewSet):
    """ note:
    - api endpoint that allows `users` to be viewed and edited
    """
    queryset = User.objects.all()
    serializer_class = user_serializer

class Branch_Viewset(viewsets.ModelViewSet):
    queryset = Branch.objects.all()
    serializer_class = Branch_Serializer

class Account_Viewset(viewsets.ModelViewSet):
    queryset = Account.objects.all
    serializer_class = Account_Serializer

class Customer_Viewset(viewsets.ModelViewSet):
    queryset = Customer_Serializer
    serializer_class = Customer_Serializer
