# Generated by Django 3.2.12 on 2024-03-25 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('analise', '0002_auto_20240325_1637'),
    ]

    operations = [
        migrations.AlterField(
            model_name='empresa',
            name='historico_empresa',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='empresa',
            name='pontos_criticos',
            field=models.TextField(blank=True, null=True),
        ),
    ]
