from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from base.serializers import UserSerializer, UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status
from django.contrib.auth.models import User


# views.py
from django.http import JsonResponse
from django.views import View
import json
from google.oauth2 import id_token
from google.auth.transport import requests

from django.http import JsonResponse
from django.views import View
import json
from google.oauth2 import id_token
from google.auth.transport import requests

from django.http import JsonResponse
from rest_framework.views import APIView
from google.oauth2 import id_token
from google.auth.transport import requests
from rest_framework import status

import json
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views import View

class GoogleAuthView(View):
    @csrf_exempt
    def post(self, request, *args, **kwargs):
        try:
            data = json.loads(request.body)
            token = data.get('token')

            if not token:
                return JsonResponse({'error': 'Token not provided'}, status=400)

            # Verify the token with Google's OAuth2 server
            response = requests.get(
                f'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token={token}'
            )
            
            if response.status_code != 200:
                return JsonResponse({'error': 'Invalid token'}, status=400)

            token_data = response.json()
            email = token_data.get('email')
            
            if not email:
                return JsonResponse({'error': 'Invalid token data'}, status=400)

            # Process the token data as needed (e.g., create or update user)
            # ...

            return JsonResponse({'message': 'Authentication successful'})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)



class TokenVerificationView(View):
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        token = data.get('token') 
        try:
            idinfo = id_token.verify_oauth2_token(token, requests.Request())
            user_id = idinfo['sub']
            # You can also get user details like email or name if needed
            return JsonResponse({'status': 'success', 'user_id': user_id})
        except ValueError as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)



# class TokenVerificationView(View):
#     def post(self, request, *args, **kwargs):
#         data = json.loads(request.body)
#         token = data.get('token')
#         try:
#             idinfo = id_token.verify_oauth2_token(token, requests.Request())
#             user_id = idinfo['sub']
#             # You can also get user details like email or name if needed
#             return JsonResponse({'status': 'success', 'user_id': user_id})
#         except ValueError as e:
#             return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']

    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()

    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

#Admin View To Update Delete Make Admin User

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)




@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUserById(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUser(request, pk):
    user = User.objects.get(id=pk)

    data = request.data

    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']
    user.is_staff = data['isAdmin']

    user.save()

    serializer = UserSerializer(user, many=False)

    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteUser(request, pk):
    userForDeletion = User.objects.get(id=pk)
    userForDeletion.delete()
    return Response('User was deleted')
