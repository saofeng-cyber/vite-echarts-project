import { createApp } from 'vue';
import { createPinia } from 'pinia';
import SvgIcom from '@/hooks/svg';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);
app.use(SvgIcom);
app.use(createPinia());
app.use(router);

app.mount('#app');
