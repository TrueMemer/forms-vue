import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import 'html-duration-picker';

import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
