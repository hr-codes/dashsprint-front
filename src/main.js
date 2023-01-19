import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './core/config/router';
import globalUri from '@/core/config/global_uri';
import Axios from '@/core/plugins/axios';

import '@/core/plugins/bootstrap';

const app = createApp(App);

app.config.globalProperties.URI = globalUri;

app.use(createPinia());
app.use(router);

app.provide('$axios', Axios);

app.mount('#app');
