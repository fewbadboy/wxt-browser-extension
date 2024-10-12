import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
// 注意库以 @ 开头的引入方式
import Aura from '@/node_modules/@primevue/themes/aura';

import 'primeicons/primeicons.css';
import './style.css';

import App from './App.vue';

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  }
});
app.mount('#app');
