<template>
  <div class="container" >
    <div ref="tabulator" class="tabulator-table"></div>
    <button @click="addTipoLancamento">Adicionar nova rubrica p/ DRE</button>
    

  </div>
</template>
<script>

import axios from 'axios'
const Tabulator = require("tabulator-tables");
import "tabulator-tables/dist/css/tabulator.min.css";

export default {
  name: 'Tipos_Lancamentos',
  data() {
    return {
      tipos_lancamentos_dre: null,
      tabulator: null,
      apiUrlTipoLancamentos: "http://localhost:8000/api/tipo_lancamento_dre/"
    }
  },
  computed: {
  },
  async mounted() {
    
    this.tabulator = new Tabulator(this.$refs.tabulator, {
    layout: "fitColumns",
    placeholder: "Nenhum lançamento disponível",
    columns: [
      { 
        title:"Natureza", field:"natureza", editor:"list", editorParams:{
            values:["receita", "custos_variaveis", "custos_fixos", "despesas_financiamentos_emprestimos", "investimentos"],
        },
        validator: function(value) {
              if (value === null || value === "") {
                  return [false, "O tipo não pode ser vazio"];
              }
              return true;
        },
      },
      { 
      title: "Descrição", 
      field: "descricao", 
      editor: "input", 
      },
      {
        title: "Ações",
        formatter: "buttonCross",
        width: 100,
        cellClick: (e, cell) => {
            console.log("Deletando item:", cell.getRow().getData());
            this.deleteTipoLancamento(cell.getRow().getData());
            }
        },
    ],
    });
    this.tabulator.on("cellEdited", (cell) => {
      const value = cell.getValue();
      if (value === null || value === "") {
          alert("O valor não pode ser vazio.");
          cell.restoreOldValue();
      } else {
          this.updateTipoLancamento(cell);
      }
    });
    await this.fetchTiposLancamentos();
    this.tabulator.setData(this.tipos_lancamentos_dre);
  },

  methods: {
    async fetchTiposLancamentos(){
      await axios.get(this.apiUrlTipoLancamentos)
      .then(response => {
        this.tipos_lancamentos_dre = response.data;
        
      })
      .catch(error => {
      console.error('Error fetching empresa:', error);
      });
    },
    updateTipoLancamento(cell) {
      console.log('atualizando')
      const updatedItem = cell.getRow().getData();
      axios.put(`${this.apiUrlTipoLancamentos}${updatedItem.id}/`, updatedItem).then(() => {
          console.log("TipoLancamento atualizado com sucesso!");
      });
    },
    addTipoLancamento() {
        const newItem = { natureza: "receita", descricao: "Altere a descrição e a natureza!"};
        axios.post(this.apiUrlTipoLancamentos, newItem).then((response) => {
            this.tabulator.addRow(response.data);
        });
    },
    async deleteTipoLancamento(item) {
      await axios.delete(`${this.apiUrlTipoLancamentos}${item.id}/`).then(() => {
          this.tabulator.deleteRow(item.id);
      });
    },
   }
}
</script>