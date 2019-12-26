from django.db import models
    # Create your models here.


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

