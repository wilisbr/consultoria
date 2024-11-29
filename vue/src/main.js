import { createApp } from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies';
import router from './router'; // Import the router


const app=createApp(App)
app.provide('apiUrl', `http://${window.location.hostname}:8000/api`);
app.use(VueCookies);
app.use(router);
app.mount('#app')

//createApp(App).use(router,VueCookies).mount('#app')