<template>
  <div>
    <Analise />
  </div>
  
</template>

<script>
import Analise from './components/Analise.vue'


export default {
  name: 'App',

  components: {
    Analise
  },
  data() {
    return {
      empresaSelecionada: ''
    };
  },
  created() {
    console.log(this.$cookies.get('csrftoken'))

  },
  methods: {
  },
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
