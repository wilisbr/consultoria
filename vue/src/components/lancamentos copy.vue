<template>
  <div class="container">
    <!-- Dropdown para seleção de DRE -->
    <select v-model="idDREMensal">
      <option disabled value="">Selecione a data base</option>
      <option v-for="DRE in DREs" :key="DRE.id" :value="DRE.id">
        {{ DRE.ano }}-{{ DRE.mes }}
      </option>
    </select>
    <button @click="openPopup">Criar Nova DRE</button>
    <!-- Popup -->
    <div v-if="showPopup" class="popup-overlay">
      <div class="popup-content">
        <h3>Criar Nova DRE</h3>
        <label for="ano">Ano:</label>
        <input id="ano" type="number" min="1900" max="2099" v-model="newDRE.ano" />

        <label for="mes">Mês:</label>
        <input id="mes" type="number" min="1" max="12" v-model="newDRE.mes" />

        <button @click="createDRE">Salvar</button>
        <button @click="closePopup">Cancelar</button>
      </div>
    </div>
  

    <!-- Tabela Tabulator -->
    <div ref="tabulator"></div>
    <button @click="addLancamento">Adicionar Lançamento</button>
    {{this.DREs}}
    {{this.lancamentos}}
  </div>

</template>

<script>
const Tabulator = require("tabulator-tables");
import "tabulator-tables/dist/css/tabulator.min.css";
import axios from "axios";

export default {
  name: "lancamentosCrud",
  data() {
    return {
      DREs: [], // Lista de DREs carregados do backend
      lancamentos: null, // Lançamentos da tabela
      idDREMensal: null, // DRE selecionada
      apiUrlDRE: "http://localhost:8000/api/dre_mensal/", // URL para criar DRE
      apiUrlLancamentos: "http://localhost:8000/api/lancamento_dre/", // URL para lançamentos
      tabulator: null, // Referência ao Tabulator
      showPopup: false, // Controle de exibição do popup
      newDRE: {
        ano: "", // Dados para a nova DRE
        mes: "",
        tipo_DRE:"previsto",
        empresa:this.$route.params.id
      },
    };
  },
  mounted() {
    // Inicializar Tabela e carregar DREs
    this.fetchDREs();
    this.initTabulator();
  },
  methods: {
    async fetchDREs() {
      try {
        const response = await axios.get(this.apiUrlDRE);
        this.DREs = response.data;
      } catch (error) {
        console.error("Erro ao carregar DREs:", error);
      }
    },
    initTabulator() {
      this.tabulator = new Tabulator(this.$refs.tabulator, {
        layout: "fitColumns",
        placeholder: "Nenhum lançamento disponível",
        columns: [
          { title: "ID", field: "id", width: 50, headerSort: false },
          { title: "Tipo", field: "tipo", editor: "input", headerSort: false },
          {
            title: "Valor (R$)",
            field: "valor",
            editor: "number",
            formatter: "money",
            formatterParams: { symbol: "R$", precision: 2 },
            headerSort: false,
          },
          {
            title: "Ações",
            formatter: "buttonCross",
            width: 100,
            cellClick: (e, cell) => {
              this.deleteLancamento(cell.getRow().getData());
            },
          },
        ],
      });
    },
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
      this.resetNewDRE();
    },
    resetNewDRE() {
      this.newDRE = { ano: "", mes: "", tipo_DRE:'previsto', empresa:this.$route.params.id };
    },
    async createDRE() {
      try {
        const response = await axios.post(this.apiUrlDRE, this.newDRE);
        
        this.DREs.push(response.data); // Adiciona a nova DRE à lista
        this.closePopup();
      } catch (error) {
        console.error("Erro ao criar DRE:", error);
        console.log(this.newDRE);
      }
    },
    addLancamento() {
      const newItem = { tipo: 1, valor: 0.0, DRE_mensal: this.idDREMensal };
      axios.post(this.apiUrlLancamentos, newItem).then((response) => {
        this.tabulator.addRow(response.data);
      });
    },
    async deleteLancamento(item) {
      try {
        await axios.delete(`${this.apiUrlLancamentos}${item.id}/`);
        this.tabulator.deleteRow(item.id);
      } catch (error) {
        console.error("Erro ao excluir lançamento:", error);
      }
    },
  },
};
</script>

<style>
.container {
  margin: 20px;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.popup-content h3 {
  margin-top: 0;
}

.popup-content button {
  margin-right: 10px;
}
</style>
