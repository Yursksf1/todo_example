from django.shortcuts import render
from .serializers import TodoSerializer
from rest_framework import viewsets
from .models import Todo
from django.http import JsonResponse
import time

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()



def saludo(request):
    response = {
        'saludo': 'hola mundo',
        'despedida': 'chao mundo'
    }
    time.sleep(2)

    return JsonResponse(response)
