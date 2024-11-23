// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import informacoesGerais from './components/informacoesGerais.vue';
import lancamentosCrud from './components/lancamentos.vue';
import Tipos_Lancamentos from './components/Tipos_Lancamentos.vue'

const routes = [
  {
    path: '/informacoesGerais/:id',
    name: 'informacoesGerais',
    component: informacoesGerais
  },
  {
    path: '/lancamentos/:id',
    name: 'lancamentos',
    component: lancamentosCrud
  },
  {
    path: '/tiposLancamentos/',
    name: 'tiposLancamentos',
    component: Tipos_Lancamentos
  },

  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
