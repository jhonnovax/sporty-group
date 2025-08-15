import Vue from 'vue';
import App from './App.vue';
import 'normalize.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/main.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({ render: h => h(App) }).$mount('#app');
