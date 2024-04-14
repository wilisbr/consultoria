from django.db import models
from django.core.exceptions import ValidationError

class Enquadramento_tributario(models.Model):
    nome = models.CharField(max_length=300)
    def __str__(self):
        return self.nome

class Empresa(models.Model):
    nome = models.CharField(max_length=300)
    nome_contato = models.CharField(max_length=300)
    tempo_atividade=models.IntegerField()
    quant_socios=models.IntegerField()
    quant_funcionarios=models.IntegerField()
    ramo_atividade = models.CharField(max_length=300)
    principal_atividade = models.CharField(max_length=300)
    enquadramento_tributario = models.ForeignKey('Enquadramento_tributario', on_delete=models.PROTECT)
    receita_anual=models.DecimalField(max_digits = 15, decimal_places = 2)
    total_investimento=models.DecimalField(max_digits = 15, decimal_places = 2)
    historico_empresa=models.TextField(blank=True, null=True)
    pontos_criticos=models.TextField(blank=True, null=True)
    def __str__(self):
        return self.nome

class Tipo_lancamento_DRE(models.Model):
    descricao = models.CharField(max_length=50, blank=False, null=False)
    NATUREZA_CHOICES = [
        ('receita', 'Receita'),
        ('custos_variaveis', 'Custos Variáveis'),
        ('custos_fixos', 'Custos Fixos'),
        ('despesas_financiamentos_emprestimos', 'Despesas c/ Financ/Empr'),
        ('investimentos', 'Investimentos')
    ]
    natureza = models.CharField(max_length=50, choices=NATUREZA_CHOICES)
    def __str__(self):
        return self.descricao

class Lancamento_DRE(models.Model):
    tipo = models.ForeignKey(Tipo_lancamento_DRE, on_delete=models.CASCADE, blank=True, null=True)
    valor = models.DecimalField(max_digits=10, decimal_places=2, default=0, blank=True)
    DRE_mensal= models.ForeignKey('DRE_mensal', on_delete=models.CASCADE, related_name='lancamentos_DRE')
    def __str__(self):
        return (self.tipo.descricao + ' = ' + str(self.valor))

def validate_year_range(value):
    if value < 1900 or value > 2100:  # Defina o intervalo desejado
        raise ValidationError(
            f'O ano deve estar entre 1900 e 2100, mas o valor fornecido é {value}.'
        )
    
class DRE_mensal(models.Model):
    empresa= models.ForeignKey('Empresa', on_delete=models.CASCADE)
    ano= models.IntegerField(validators=[validate_year_range]) 
    mes = models.IntegerField(choices=[
        (1, 'Janeiro'),
        (2, 'Fevereiro'),
        (3, 'Março'),
        (4, 'Abril'),
        (5, 'Maio'),
        (6, 'Junho'),
        (7, 'Julho'),
        (8, 'Agosto'),
        (9, 'Setembro'),
        (10, 'Outubro'),
        (11, 'Novembro'),
        (12, 'Dezembro'),
    ], blank=False, null=False)
    tipo_DRE = models.CharField(choices=[
        ('realizado', 'Realizado'),
        ('previsto', 'Previsto')
    ],blank=False, null=False, max_length=20)

    def __str__(self):
        return (self.empresa.nome + ' - ' + str(self.ano) + '/' + str(self.mes))

    #retorna todos os lançamentos dessa DRE mensal
    @property
    def lancamentos(self):
        return self.Lancamento_DRE_set.all()

    @property
    def receita_total(self):
        receita_lancamentos=self.lancamentos_DRE.filter(tipo__natureza='receita')
        total_receitas = sum(lancamento.valor for lancamento in receita_lancamentos)
        return total_receitas

    @property
    def custos_variaveis(self):
        cv_lancamentos=self.lancamentos_DRE.filter(tipo__natureza='custos_variaveis')
        total_cv = sum(lancamento.valor for lancamento in cv_lancamentos)
        return total_cv

    @property
    def margem_contribuicao(self):
        return self.receita_total - self.custos_variaveis

    @property
    def custos_fixos(self):
        cf_lancamentos=self.lancamentos_DRE.filter(tipo__natureza='custos_fixos')
        total_cf = sum(lancamento.valor for lancamento in cf_lancamentos)
        return total_cf

    @property
    def resultado_operacional(self):
        return self.receita_total - self.custos_variaveis - self.custos_fixos

    @property
    def financiamentos_emp(self):
        fe_lancamentos=self.lancamentos_DRE.filter(tipo__natureza='despesas_financiamentos_emprestimos')
        total_fe = sum(lancamento.valor for lancamento in fe_lancamentos)
        return total_fe
    
    @property
    def investimentos(self):
        invest_lancamentos=self.lancamentos_DRE.filter(tipo__natureza='investimentos')
        total_invest = sum(lancamento.valor for lancamento in invest_lancamentos)
        return total_invest
    
    @property
    def resultado_final(self):
        return self.resultado_operacional - self.financiamentos_emp - self.investimentos