from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from drf import views as drf_views

router = routers.DefaultRouter()

router.register(r'users', drf_views.user_viewset, 'users')
router.register(r'accounts', drf_views.Account_Viewset, 'account')
router.register(r'branches', drf_views.Branch_Viewset, 'branches')
router.register(r'customers', drf_views.Customer_Viewset, 'customers')



urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth', include('rest_framework.urls', namespace='rest_framework')),
    path('users/', include('account.urls')),
]