<template>
    <div>
        <div v-if="dashboard_URL">
            <iframe
                :src="dashboard_URL"
                width="100%"
                height="600"
                frameborder="0"
            ></iframe>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'analiseAnual',
        inject: ['apiUrl'],
        data() {
            return {
                ano: null,
                id_empresa: null,
                DREs: [],
                lancamentos: [],
                dashboard_URL: null,
            }
        },
        async mounted() {
            if (this.$route.params.id){
                this.id_empresa=this.$route.params.id
                this.fetch_DREs(this.$route.params.id);
                this.atualiza_dashboard();
                console.log(this.dashboard_URL)
            }
            
        },
        computed: {
        },    
        watch: {
            '$route.params.id'(newId) {
                this.fetch_DREs(newId);
                this.id_empresa=newId;
                this.atualiza_dashboard();
           },
        },
        methods:{
            atualiza_dashboard(){
                this.dashboard_URL=process.env.VUE_APP_DASHBOARD_URL+"empresa="+this.id_empresa+"&"+"ano=2024#hide_parameters=empresa,natureza_custos_fixos,natureza_receita,natureza_cv,natureza_desp_finan_emp,natureza_invest";
            },
            async fetch_DREs(id) {
                await axios.get(`${this.apiUrl}/dre_mensal/?empresa__id=${id}`)
                .then(response => {
                this.DREs = response.data;
                })
                .catch(error => {
                console.error('Error fetching empresa:', error);
                });
            },
            async fetch_lancamentos(idsDREMensal) {
                if (!Array.isArray(idsDREMensal) || idsDREMensal.length === 0) {
                    console.warn("Nenhum ID fornecido para buscar lançamentos.");
                    return;
                }

                // Cria uma string de parâmetros para múltiplos IDs
                const params = idsDREMensal.map(id => `DRE_mensal=${id}`).join("&");

                try {
                    const response = await axios.get(`${this.apiUrl}/lancamento_dre/?${params}`);
                    this.lancamentos = response.data;
                } catch (error) {
                    console.error("Erro ao buscar lançamentos:", error);
                }
            }
        }

    }

</script>