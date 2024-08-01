from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, CartViewSet

router = DefaultRouter()
router.register(r'books', BookViewSet)
router.register(r'carts', CartViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
