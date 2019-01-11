import App from './App'
import router from './router'
import Vue from 'vue'
import './assets/js/element-config'
import './assets/stylus/index.styl'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
