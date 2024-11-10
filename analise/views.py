from django.shortcuts import render
from rest_framework import viewsets
from django.apps import apps
from .serializers import serializers_dict
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import ForeignKey

# Create your views here.
def generate_viewsets():
    viewsets_dict = {}
    app_models = apps.get_app_config('analise').get_models()

    for model in app_models:
        serializer_class = serializers_dict[model]

        # Define filterable fields for each model dynamically or you can use a predefined list.
        #filterable_fields = [field.name for field in model._meta.fields]  # This includes all fields dynamically

        # Create a list to store filterable fields
        filterable_fields = []

        # Iterate over model fields and add them to filterable fields
        for field in model._meta.fields:
            # Add all fields dynamically that are directly on the model
            filterable_fields.append(field.name)

            # Check if the field is a ForeignKey or a related field
            if isinstance(field, ForeignKey):
                # If it's a ForeignKey, add the related model's field as a filterable field
                related_model_name = field.related_model.__name__.lower()
                # Here we use `related_field__field_name` for filtering
                filterable_fields.append(f"{field.name}__{field.related_model._meta.pk.name}")  # This is for filtering by related model's PK

        print (f"{model} - {filterable_fields}")
        # Creating a dynamic viewset class
        viewset_class = type(
            f"{model.__name__}ViewSet", 
            (viewsets.ModelViewSet,), 
            {
                'queryset': model.objects.all(),
                'serializer_class': serializer_class,
                'filter_backends': [DjangoFilterBackend],
                'filterset_fields': filterable_fields,
            }
        )

        viewsets_dict[model.__name__.lower()] = viewset_class

    return viewsets_dict

viewsets_dict = generate_viewsets()