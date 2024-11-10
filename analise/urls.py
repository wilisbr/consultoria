from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import viewsets_dict

router = DefaultRouter()

# Register each viewset with the router
for viewset_name, viewset in viewsets_dict.items():
    router.register(viewset_name, viewset)

urlpatterns = [
    path('', include(router.urls)),
]