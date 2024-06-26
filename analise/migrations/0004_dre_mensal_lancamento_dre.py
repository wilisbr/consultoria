# Generated by Django 3.2.12 on 2024-04-14 15:57

import analise.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('analise', '0003_auto_20240325_1643'),
    ]

    operations = [
        migrations.CreateModel(
            name='DRE_mensal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ano', models.IntegerField(validators=[analise.models.validate_year_range])),
                ('mes', models.IntegerField(choices=[(1, 'Janeiro'), (2, 'Fevereiro'), (3, 'Março'), (4, 'Abril'), (5, 'Maio'), (6, 'Junho'), (7, 'Julho'), (8, 'Agosto'), (9, 'Setembro'), (10, 'Outubro'), (11, 'Novembro'), (12, 'Dezembro')])),
                ('tipo_DRE', models.CharField(choices=[('realizado', 'Realizado'), ('previsto', 'Previsto')], max_length=20)),
                ('empresa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='analise.empresa')),
            ],
        ),
        migrations.CreateModel(
            name='Lancamento_DRE',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('valor', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=10)),
                ('DRE_mensal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='analise.dre_mensal')),
                ('tipo', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='analise.tipo_lancamento_dre')),
            ],
        ),
    ]
