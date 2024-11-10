// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import informacoesGerais from './components/informacoesGerais.vue';
import lancamentosCrud from './components/lancamentos.vue';

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

  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
