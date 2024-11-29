<template>
    <div>
        <h2> Análise Anual </h2>
        {{ this.DREs }}
        {{ this.anosUnicos }}
        {{ this.lancamentos }}
        <select v-model="ano">
        <option disabled value="">Ano</option>
        <option v-for="ano in this.anosUnicos" :key="ano" :value="ano">
            {{ ano }}
        </option>
        </select>
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
                DREs: [],
                lancamentos: []
            }
        },
        async mounted() {
            if (this.$route.params.id){
                this.fetch_DREs(this.$route.params.id);
            }
        },
        computed: {
            anosUnicos() {
                // Extrai os anos únicos do array DREs
                return [...new Set(this.DREs.map(dre => dre.ano))].sort();
            }
        },    
        watch: {
            '$route.params.id'(newId) {
                this.fetch_DREs(newId);
            },
            ano(newAno) {
                const filteredDREIds = this.DREs
                .filter(dre => dre.ano === parseInt(newAno)) // Filtra pelo ano
                .map(dre => dre.id); // Extrai apenas os IDs
                this.fetch_lancamentos(filteredDREIds)
            }
        },
        methods:{
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