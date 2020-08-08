
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# User Serializer

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email')


# Register Serializer

class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password')
    extra_kwargs = {'password': {'write_only':True}}
    
  
  def create(self, validate_data):
    user = User.objects.create_user(validate_data['username'], validate_data['email'], validate_data['password'])
    
    return user