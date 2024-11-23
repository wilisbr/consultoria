<template>

  <div id="wrapper">
    <select v-model="idEmpresa">
      <option disabled value="">Selecione a empresa</option>
      <option v-for="empresa in empresas" :key="empresa.id" :value="empresa.id">
        {{ empresa.nome }}
      </option>
    </select>
    <nav class="navbar is-success">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>Gestão e Consultoria</strong></router-link> 
        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
           <div  class="navbar-item">
            <div class="buttons">
                <router-link :to="{ name: 'informacoesGerais', params: { id: this.idEmpresa} }" > Informações  </router-link>
                <router-link :to="{ name: 'lancamentos', params: { id: this.idEmpresa} }" v-if="idEmpresa"> Lançamentos  </router-link>
                <router-link :to="{ name: 'tiposLancamentos', params: {} }" > Configurações  </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view :key="idEmpresa" @empresasAlteradas="fetchEmpresas"/>
    </section>
    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2021</p>
    </footer>
  
    <div>
  </div>
  </div>

</template>

<script>
import fetchEmpresasMixin from '../mixins/fetchItemsMixin';

export default {
  name: 'AnaliseEmpresa',
  mixins: [fetchEmpresasMixin],
  props: {
  },
  data() {
    return {
      empresas: [],
      idEmpresa: 0
    };
  },
  created() {
    console.log(this.$cookies.get('csrftoken'))
    this.fetchEmpresas();
    console.log('fetchItems')
  },
  methods: {
  },
  watch: {
  idEmpresa(newVal, oldVal) {
    console.log(newVal)
    console.log(oldVal)
    if (newVal !== oldVal) {
      this.$router.push({ name: 'lancamentos', params: { id: newVal } });
    }
  }
}
}
</script>

<style lang="scss">
@import 'node_modules/bulma/bulma.scss';
</style>