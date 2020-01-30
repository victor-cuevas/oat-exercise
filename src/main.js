import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.prototype.endpoint = 'https://hr.oat.taocloud.org/v1';

Vue.filter('capitalize', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1)
});

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app');
