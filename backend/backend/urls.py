from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from base.views.user_views import TokenVerificationView
from base.views.user_views import GoogleAuthView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html'), name='home'),
    path('api/products/', include('base.urls.product_urls')),
    path('api/users/', include('base.urls.user_urls')),
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/social-auth/', include('allauth.urls'), name='social-auth'),
    path('auth/social-auth/google/login/', GoogleAuthView.as_view(), name='google-auth'),
    path('api/orders/', include('base.urls.order_urls')),
    path('api/auth/token/', TokenVerificationView.as_view(), name='token-verification'),
]

# Serve static and media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)