from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

#request -> respond
#request handler 
# user sees

# def say_hello(request): #func
#     # return HttpResponse('hello world')
#     return render(request, 'hello.html', {'name': 'Amit'})

def index(request):
    return render(request,'index.html')

def Signup(request):
    return render(request, "Signup.html")