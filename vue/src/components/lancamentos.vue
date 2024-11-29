<template>
  <div class="container" >
    <!-- Dropdown para seleção de DRE -->
    <select v-model="idDREMensal">
      <option disabled value="">Selecione a data base</option>
      <option v-for="DRE in DREs" :key="DRE.id" :value="DRE.id">
        {{ DRE.ano }}-{{ DRE.mes }}
      </option>
    </select>
    <button @click="openPopup">Criar Nova DRE</button>
    <div ref="tabulator"></div>

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
    <select v-if="idDREMensal" v-model="selectTipoLancamento" @change="enableAddLancamento">
      <option disabled value="">Adicionar</option>
      <option v-for="tipo in tipo_lancamento_dre" :key="tipo.id" :value="tipo.id">
        {{ tipo.descricao }}
      </option>
    </select>
    <button @click="addLancamento" v-if="selectTipoLancamento && idDREMensal">Adicionar</button>

  </div>
</template>

<script>
    const Tabulator = require("tabulator-tables");
    import "tabulator-tables/dist/css/tabulator.min.css";
    import axios from 'axios'
    export default {
        name: 'lancamentosCrud',
        inject: ['apiUrl'],
        data() {
            return {
              empresa:this.$route.params.id,
              DREs: [],
              lancamentos: null,
              selectTipoLancamento: '', // Modelo para o tipo de lançamento selecionado
              idDREMensal: null,
              tipo_lancamento_dre: null,
              select_tipo_lancamento: null,
              apiUrlDRE: `${this.apiUrl}/dre_mensal/`, // URL para criar DRE
              apiUrlLancamentos: `${this.apiUrl}/lancamento_dre/`, // Substitua pelo endpoint real
              tabulator: null,
              showPopup: false, // Controle de exibição do popup
              newDRE: {
                ano: "", // Dados para a nova DRE
                mes: "",
                tipo_DRE:"previsto",
                empresa:this.$route.params.id
              },
            }
        },
        async mounted() {
            await this.fetch_DREs(this.$route.params.id);
            await this.fetch_tipo_lancamento();
            console.log("Tipos de lançamentos:")
            console.log(this.tipo_lancamento_dre)

            // Garante que os dados estão disponíveis antes de configurar o Tabulator
            if (!this.tipo_lancamento_dre || this.tipo_lancamento_dre.length === 0) {
              console.error("Nenhum tipo de lançamento encontrado.");
              return;
            }

            this.tabulator = new Tabulator(this.$refs.tabulator, {
            layout: "fitColumns",
            placeholder: "Nenhum lançamento disponível",
            columns: [
                { 

                  title:"Tipo", field:"tipo", editor:"list", editorParams:{
                      values:this.select_tipo_lancamento,
                  },

                  formatter: function(cell) {
                      if (!cell.getValue() || !this.select_tipo_lancamento ){
                        return "Não definido"
                      }
                      return this.select_tipo_lancamento[cell.getValue()];  // Exibindo o valor formatado
                  }.bind(this),
                  validator: function(value) {
                        if (value === null || value === "") {
                            return [false, "O tipo não pode ser vazio"];
                        }
                        return true;
                  },

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
                title: "Ações",
                formatter: "buttonCross",
                width: 100,
                cellClick: (e, cell) => {
                    console.log("Deletando item:", cell.getRow().getData());
                    this.deleteLancamento(cell.getRow().getData());
                    }
                },
            ],
            });


            /*this.tabulator.on("cellEdited", (cell) => {
                console.log("Evento cellEdited disparado:", cell);
                this.updateLancamento(cell);
            });*/
            
            this.tabulator.on("cellEdited", (cell) => {
                const value = cell.getValue();
                if (value === null || value === "") {
                    alert("O valor não pode ser vazio.");
                    cell.restoreOldValue();
                } else {
                    this.updateLancamento(cell);
                }
            });
            

        },
        watch: {
            '$route.params.id'(newId) {
                this.empresa=newId;
                this.newDRE.empresa=newId;
                this.fetch_DREs(newId);
            },
            'idDREMensal'(newDREMensal) {
                this.fetch_lancamentos(newDREMensal);
                //console.log(this.lancamentos)   
            },
        },
        methods: {
            async fetch_DREs(id) {
            await axios.get(`${this.apiUrl}/dre_mensal/?empresa__id=${id}`)
                .then(response => {
                this.DREs = response.data;
                })
                .catch(error => {
                console.error('Error fetching empresa:', error);
                });
            },
            async fetch_lancamentos(id_DREMensal) {
            await axios.get(`${this.apiUrlLancamentos}?DRE_mensal=${id_DREMensal}`)
                .then(response => {
                this.lancamentos = response.data;
                this.tabulator.setData(this.lancamentos);
                })
                .catch(error => {
                console.error('Error fetching empresa:', error);
                });
            },
            addLancamento() {
                console.log('Adicionando lancamento')
                console.log(this.tipo_lancamento_dre)
                const newItem = { tipo: this.selectTipoLancamento, valor: 0.0, DRE_mensal: this.idDREMensal };
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
                await axios.get(`${this.apiUrl}/tipo_lancamento_dre`)
                .then(response => {
                this.tipo_lancamento_dre = response.data;
                this.select_tipo_lancamento=response.data.reduce((acc, item) => {
                  acc[item.id] = item.descricao;
                  return acc;
                }, {});
                })
                .catch(error => {
                console.error('Error fetching empresa:', error);
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
        }
    }
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
