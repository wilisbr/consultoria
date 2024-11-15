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

    <div ref="tabulator"></div>
    <button @click="addLancamento">Adicionar Lançamento</button>
    

  </div>
</template>

<script>
    const Tabulator = require("tabulator-tables");
    import "tabulator-tables/dist/css/tabulator.min.css";
    import axios from 'axios'
    export default {
        name: 'lancamentosCrud',
        data() {
            return {
            DREs: null,
            lancamentos: null,
            idDREMensal: null,
            tipo_lancamento_dre: null,
            
            apiUrlLancamentos: "http://localhost:8000/api/lancamento_dre/", // Substitua pelo endpoint real
            tabulator: null,
            
            }
        },
        mounted() {
            this.fetch_DREs(this.$route.params.id);
            this.fetch_tipo_lancamento();

            this.tabulator = new Tabulator(this.$refs.tabulator, {
            layout: "fitColumns",
            placeholder: "Nenhum lançamento disponível",
            columns: [
                { title: "ID", field: "id", width: 50, headerSort: false },
                { 
                title: "Tipo", 
                field: "tipo", 
                editor: "input", // Pode ser ajustado para dropdown se necessário
                headerSort: false 
                },
                { 
                title: "Valor (R$)", 
                field: "valor", 
                editor: "number", 
                formatter: "money", 
                formatterParams: { symbol: "R$", precision: 2 }, 
                headerSort: false 
                },
                { 
                title: "DRE Mensal", 
                field: "DRE_mensal", 
                editor: "input", // Pode ser ajustado para dropdown se necessário
                headerSort: false 
                },
                {
                title: "Ações",
                formatter: "buttonCross",
                width: 100,
                cellClick: (e, cell) => {
                    console.log("Deletando item:", cell.getRow().getData());
                    this.deleteLancamento(cell.getRow().getData());
                    }
                },
            ],
            //cellEdited: (cell) => this.updateLancamento(cell),
            //});
            cellEdited: (cell) => {
                console.log("Célula editada:", cell);
                //this.updateLancamento(cell);
            }
            });
            

        },
        watch: {
            '$route.params.id'(newId) {
                this.fetch_DREs(newId);
            },
            'idDREMensal'(newDREMensal) {
                this.fetch_lancamentos(newDREMensal);
                //console.log(this.lancamentos)
                
            }
        },
        methods: {
            async fetch_DREs(id) {
            await axios.get(`http://localhost:8000/api/dre_mensal/?empresa__id=${id}`)
                .then(response => {
                this.DREs = response.data;
                //console.log (this.DREs)
                })
                .catch(error => {
                console.error('Error fetching empresa:', error);
                });
            },
            async fetch_lancamentos(id_DREMensal) {
            //await axios.get(`http://localhost:8000/api/lancamento_dre/?DRE_mensal=${id_DREMensal}`)
            await axios.get(`${this.apiUrlLancamentos}?DRE_mensal=${id_DREMensal}`)
                .then(response => {
                this.lancamentos = response.data;
                this.tabulator.setData(this.lancamentos);
                console.log (this.lancamentos)
                })
                .catch(error => {
                console.error('Error fetching empresa:', error);
                });
            },
            addLancamento() {
                const newItem = { tipo: 1, valor: 0.0, DRE_mensal: this.idDREMensal };
                axios.post(this.apiUrlLancamentos, newItem).then((response) => {
                    this.tabulator.addRow(response.data);
                });
            },
            updateLancamento(cell) {
                console.log('atualizando')
                const updatedItem = cell.getRow().getData();
                axios.put(`${this.apiUrlLancamentos}${updatedItem.id}/`, updatedItem).then(() => {
                    console.log("Lançamento atualizado com sucesso!");
                });
            },
            async deleteLancamento(item) {
                await axios.delete(`${this.apiUrlLancamentos}${item.id}/`).then(() => {
                    this.tabulator.deleteRow(item.id);
                });
            },
            async fetch_tipo_lancamento(){
                await axios.get(`http://localhost:8000/api/tipo_lancamento_dre`)
                .then(response => {
                this.tipo_lancamento_dre = response.data;
                //console.log (this.DREs)
                })
                .catch(error => {
                console.error('Error fetching empresa:', error);
                });
            },
        }
    }
</script>