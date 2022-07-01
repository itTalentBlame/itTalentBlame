import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('toDown', val => val.toLowerCase())
Vue.filter('toReverse', (val, split) => val.split('').reverse().join(split || ''))

new Vue({
  render: h => h(App),
}).$mount('#app')
