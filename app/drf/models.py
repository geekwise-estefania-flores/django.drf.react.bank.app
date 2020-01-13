from django.db import models
from django.contrib.auth import authenticate, login


from django.contrib.auth import authenticate, login

def my_view(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        # Redirect to a success page.
        ...
    else:
        'Incorrect login'


class Branch(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200, default='123 Fake Street, 93291')

    def __str__(self):
        return f"{self.name}: {self.address}"

class Customer(models.Model):
    name = models.CharField(max_length=100)
    branch = models.ForeignKey(
    Branch,
    on_delete=models.CASCADE,
    null=True,
    )

    def __str__(self):
        return f"{self.name}: {self.branch}"

class Account(models.Model):
    name = models.CharField(max_length=30)
    balance = models.DecimalField(max_digits=100, decimal_places=2, default=0)
    holder = models.OneToOneField(
        Customer,
        on_delete=models.CASCADE,
        null=True,
    )

    def __str__(self):
        return f"{self.name}: {self.holder}"