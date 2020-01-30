import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.prototype.endpoint = 'https://hr.oat.taocloud.org/v1';

new Vue({
  render: h => h(App),
}).$mount('#app')
