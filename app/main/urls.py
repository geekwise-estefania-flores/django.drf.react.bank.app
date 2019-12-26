from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from drf import views as drf_views

router = routers.DefaultRouter()

router.register(r'accounts', drf_views.Account_Viewset)
router.register(r'branches', drf_views.Branch_Viewset)
router.register(r'customers', drf_views.Customer_Viewset)


urlpatterns = [
    path('', admin.site.urls),
    path('api/', include(router.urls)),
    path('auth', include('rest_framework.urls', namespace='rest_framework')),
]