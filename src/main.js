import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Input from './components/Input.vue'
import Results from './components/Results.vue'
import Clarifai from 'clarifai'

Vue.component('app-input', Input);
Vue.component('app-results', Results);

Vue.config.productionTip = false

const clarifaiApp = new Clarifai.App({
  apiKey: '3a7f9e4ec5474163bec285c80e4dc7ff'
});

clarifaiApp.models.predict("bd367be194cf45149e75f01d59f77ba7", "https://www.blondelish.com/wp-content/uploads/2017/08/1-1.jpg").then(
    function(response) {
      var ingredients = response.outputs[0].data.concepts;
      console.log(ingredients);
    },
    function(err) {
      console.log(err);
    }
  );

new Vue({
  render: h => h(App),
}).$mount('#app')