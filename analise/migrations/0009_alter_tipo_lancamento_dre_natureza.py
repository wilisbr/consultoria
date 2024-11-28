# Generated by Django 5.1.3 on 2024-11-28 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('analise', '0008_alter_lancamento_dre_dre_mensal'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tipo_lancamento_dre',
            name='natureza',
            field=models.CharField(choices=[('receita', 'Receita'), ('custos_variaveis', 'Custos Variáveis'), ('custos_fixos', 'Custos Fixos'), ('despesas_financiamentos_emprestimos', 'Despesas c/ Financ/Empr'), ('investimentos', 'Investimentos')], max_length=50),
        ),
    ]
