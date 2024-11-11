<template>
  
  <div class="container" >
    <select v-model="idDREMensal">
      <option disabled value="">Selecione a data base</option>
      <option v-for="DRE in DREs" :key="DRE.id" :value="DRE.id">
        {{ DRE.ano }}-{{ DRE.mes }}
      </option>
    </select>
    <p>DREs</p>
    {{DREs}}
    <br>
    <p> Lancamentos: </p>
    {{lancamentos}}
    <br> <p>Tipo Lancamentos:</p>
    {{tipo_lancamento_dre}}

    <hr>
    

  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'lancamentosCrud',
        data() {
            return {
            DREs: null,
            lancamentos: null,
            idDREMensal: null,
            tipo_lancamento_dre: null,
            
            
            }
        },
        created() {
            this.fetch_DREs(this.$route.params.id);
            this.fetch_tipo_lancamento();
        },
        watch: {
            '$route.params.id'(newId) {
                this.fetch_DREs(newId);
            },
            'idDREMensal'(newDREMensal) {
                this.fetch_lancamentos(newDREMensal);
            }
        },
        methods: {
            async fetch_DREs(id) {
            await axios.get(`http://localhost:8000/api/dre_mensal/?empresa__id=${id}`)
                .then(response => {
                this.DREs = response.data;
                console.log (this.DREs)
                })
                .catch(error => {
                console.error('Error fetching empresa:', error);
                });
            },
            async fetch_lancamentos(id_DREMensal) {
            await axios.get(`http://localhost:8000/api/lancamento_dre/?DRE_mensal=${id_DREMensal}`)
                .then(response => {
                this.lancamentos = response.data;
                console.log (this.DREs)
                })
                .catch(error => {
                console.error('Error fetching empresa:', error);
                });
            },
            async fetch_tipo_lancamento(){
                await axios.get(`http://localhost:8000/api/tipo_lancamento_dre`)
                .then(response => {
                this.tipo_lancamento_dre = response.data;
                console.log (this.DREs)
                })
                .catch(error => {
                console.error('Error fetching empresa:', error);
                });
            },
        }
    }
</script>