import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router/index';
import store from './store';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
