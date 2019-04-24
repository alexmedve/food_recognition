import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Input from './components/Input.vue'
import Results from './components/Results.vue'

Vue.component('app-input', Input);
Vue.component('app-results', Results);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')