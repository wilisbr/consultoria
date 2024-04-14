from django.contrib import admin
from .models import Enquadramento_tributario, Empresa, Tipo_lancamento_DRE, Lancamento_DRE, DRE_mensal

# Register your models here.

class DRE_mensalAdmin(admin.ModelAdmin):
    list_display = ('empresa', 'ano', 'mes', 'tipo_DRE', 'receita_total', 'custos_variaveis', 'margem_contribuicao', 'custos_fixos', 'resultado_operacional', 'financiamentos_emp', 'investimentos', 'resultado_final')


admin.site.register(Enquadramento_tributario)
admin.site.register(Empresa)
admin.site.register(Tipo_lancamento_DRE)
admin.site.register(Lancamento_DRE)
admin.site.register(DRE_mensal, DRE_mensalAdmin)