import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './core/config/router';
import globalUri from '@/core/config/global_uri';
import Axios from '@/core/plugins/axios';
import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_BACKEND_URI_WS);

socket.on('connect', () => {
  // console.log('socket ID', socket.id);
});

socket.on('connect_error', (err) => {
  console.log(`connect_error due to ${err.message}`);
});

import '@/core/plugins/bootstrap';

const app = createApp(App);

app.config.globalProperties.URI = globalUri;

app.use(createPinia());
app.use(router);

app.provide('$axios', Axios);
app.provide('$ws', socket);

app.mount('#app');
