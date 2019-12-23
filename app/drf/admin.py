from django.contrib import admin
from .models import Account, Branch, Customer

class TodoAdmin(admin.ModelAdmin):  # add this
    list_display = ('title', 'description', 'completed') # add this

admin.site.register(Account)
admin.site.register(Branch)
admin.site.register(Customer)
