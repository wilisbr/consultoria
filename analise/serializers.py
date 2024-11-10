from rest_framework import serializers
from django.apps import apps

def generate_serializers():
    serializers_dict = {}
    app_models = apps.get_app_config('analise').get_models()

    for model in app_models:
        # Creating a dynamic Meta class inside the loop to capture the current model
        meta_class = type('Meta', (object,), {'model': model, 'fields': '__all__'})

        # Creating a dynamic serializer class
        serializer_name = f"{model.__name__}Serializer"
        serializer_class = type(serializer_name, (serializers.ModelSerializer,), {'Meta': meta_class})
        
        # Adding the serializer class to the dictionary
        serializers_dict[model] = serializer_class

    return serializers_dict

serializers_dict = generate_serializers()