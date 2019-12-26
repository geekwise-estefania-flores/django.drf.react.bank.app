from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Branch, Account, Customer

class User_Serializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = User
        fields = [
            'url',
            'username',
            'email',
            'groups',
        ]

class Branch_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Branch
        fields = [
            'id', 
            'name'
        ]

class Account_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id','name']
        model = Account

class Customer_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id','name']
        model = Customer

# class Product_Serializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         fields = ['id', 'name']
#         model = Product