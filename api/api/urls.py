from django.conf.urls import include
from django.urls import path
from rest_framework import routers

from .views import CreateUserView, VideoViewSet

router = routers.DefaultRouter()
router.register("videos", VideoViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("create/", CreateUserView.as_view(), name="create"),
]
