from rest_framework import serializers
from django.contrib.auth.models import User, Permission, Group
from django.contrib.auth import authenticate
from rest_framework.decorators import permission_classes, APIView
from rest_framework.views import APIView
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS


# class ReadOnly(BasePermission):
#     def has_permission(self, request, view):
#         return request.method in SAFE_METHODS

# class ExampleView(APIView):
#     permission_classes = [IsAuthenticated]

    # def get(self, request, format=None):
    #     content = {
    #         'status': 'request was permitted'
    #     }
    #     return Response(content)

class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = '__all__'


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    groups = PermissionSerializer(many=True)

    class Meta: 
        model = User
        fields = ('id', 'username', 'email', 'groups')

    def create(self, validated_data):
        permissions_data = validated_data.pop('userpermissions')
        user = User.objects.create(**validated_data)
        for permission_data in permissions_data:
            Permission.objects.create(user=user, **permission_data)
        return user


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}
    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user
        
# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")

#Groups Serializer
class GroupSerializer(serializers.Serializer):
    class Meta: 
        model = Group
        fields = '__all__'

# Reset Serializer
class PasswordSerializer (serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    def validate(self, data):
        """ check that username and new password are different """
        if data["username"] == data["password"]:
            raise serializers.ValidationError("Password should be different")
        return data

