<template>
  
  <div class="container" >
    <button class="button is-primary" @click="prepareForCreate">Criar Nova Empresa</button>

    <h1 class="title">Dados</h1>
    <form @submit.prevent="handleSubmit" v-if="empresa">
      <div class="field">
        <label class="label">Nome</label>
        <div class="control">
          <input class="input" type="text" v-model="empresa.nome" required />
        </div>
      </div>
      
      <div class="field">
        <label class="label">Nome do Contato</label>
        <div class="control">
          <input class="input" type="text" v-model="empresa.nome_contato" required />
        </div>
      </div>
      
      <div class="field">
        <label class="label">Tempo de Atividade</label>
        <div class="control">
          <input class="input" type="number" v-model="empresa.tempo_atividade" required />
        </div>
      </div>
      
      <div class="field">
        <label class="label">Quantidade de Sócios</label>
        <div class="control">
          <input class="input" type="number" v-model="empresa.quant_socios" required />
        </div>
      </div>
      
      <div class="field">
        <label class="label">Quantidade de Funcionários</label>
        <div class="control">
          <input class="input" type="number" v-model="empresa.quant_funcionarios" required />
        </div>
      </div>
      
      <div class="field">
        <label class="label">Ramo de Atividade</label>
        <div class="control">
          <input class="input" type="text" v-model="empresa.ramo_atividade" required />
        </div>
      </div>
      
      <div class="field">
        <label class="label">Principal Atividade</label>
        <div class="control">
          <input class="input" type="text" v-model="empresa.principal_atividade" required />
        </div>
      </div>
      
      <div class="field">
        <label class="label">Receita Anual</label>
        <div class="control">
          <input class="input" type="number" step="0.01" v-model="empresa.receita_anual" required />
        </div>
      </div>
      
      <div class="field">
        <label class="label">Total de Investimento</label>
        <div class="control">
          <input class="input" type="number" step="0.01" v-model="empresa.total_investimento" required />
        </div>
      </div>
      
      <div class="field">
        <label class="label">Histórico da Empresa</label>
        <div class="control">
          <textarea class="textarea" v-model="empresa.historico_empresa"></textarea>
        </div>
      </div>
      
      <div class="field">
        <label class="label">Pontos Críticos</label>
        <div class="control">
          <textarea class="textarea" v-model="empresa.pontos_criticos"></textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">Enquadramento Tributário</label>
        <div class="control">
          <select class="input" v-model="empresa.enquadramento_tributario" required>
            <option v-for="option in enquadramentosTributarios" :key="option.id" :value="option.id">
              {{ option.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" type="submit">Salvar</button>
        </div>
        <div class="control">
          <button class="button is-link is-light" type="button" @click="resetForm">Cancelar</button>
        </div>
        <div class="control">
          <button class="button is-danger is-light" type="button" @click="handleDelete">Excluir</button>
        </div>
      </div>
    </form>

  </div>
    
 

</template>
<script>
import fetchEmpresasMixin from '../mixins/fetchItemsMixin';
import fetchEnquadramentosTributariosMixin from '../mixins/fetchItemsMixin';
import axios from 'axios'

export default {
  name: 'informacoesGerais',
  data() {
    return {
      empresa: null
    }
  },
  computed: {
    textEnquadramento() {
      return 'simples';
    }
  },
  mixins: [fetchEmpresasMixin, fetchEnquadramentosTributariosMixin],
  watch: {
    '$route.params.id'(newId) {
      console.log('Route parameter changed:', newId);
      // Handle the new parameter value
      this.fetchEmpresa(newId);
    }
  },
  created() {
    this.fetchEmpresa(this.$route.params.id);
    this.fetchEnquadramentosTributarios();
  },
   methods: {
    async fetchEmpresa(id) {
      await axios.get(`http://localhost:8000/api/empresa/${id}/`)
        .then(response => {
          this.empresa = response.data;
        })
        .catch(error => {
          console.error('Error fetching empresa:', error);
        });
    },
    handleSubmit() {
      if (this.empresa.id) {
        this.updateEmpresa();
      } else {
        this.createEmpresa();
      }
    },
    createEmpresa() {
      axios.post('http://localhost:8000/api/empresa/', this.empresa)
        .then(response => {
          this.empresa = response.data;
          alert('Empresa criada com sucesso!');
          this.$emit('empresasAlteradas');
        })
        .catch(error => {
          console.error('Error creating empresa:', error);
        });
    },
    updateEmpresa() {
      axios.put(`http://localhost:8000/api/empresa/${this.empresa.id}/`, this.empresa)
        .then(response => {
          this.empresa = response.data;
          alert('Empresa atualizada com sucesso!');
        })
        .catch(error => {
          console.error('Error updating empresa:', error);
        });
    },
    handleDelete() {
      if (confirm('Tem certeza que deseja excluir esta empresa?')) {
        axios.delete(`http://localhost:8000/api/empresa/${this.empresa.id}/`)
          .then(() => {
            this.resetForm();
            alert('Empresa excluída com sucesso!');
            this.$emit('empresasAlteradas');
          })
          .catch(error => {
            console.error('Error deleting empresa:', error);
          });
      }
    },
    resetForm() {
      this.empresa = {
        id: null,
        nome: '',
        nome_contato: '',
        tempo_atividade: '',
        quant_socios: '',
        quant_funcionarios: '',
        ramo_atividade: '',
        principal_atividade: '',
        receita_anual: '',
        total_investimento: '',
        historico_empresa: '',
        pontos_criticos: '',
        enquadramento_tributario: ''
      };
    },
    prepareForCreate() {
      this.resetForm();
    }
  }
}
</script>