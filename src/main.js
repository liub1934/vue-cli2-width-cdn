import App from './App'
import Vue from 'vue'
import router from './router'
import store from "./store"
import * as config from '@/assets/js/config'
import storage from 'good-storage'
import './assets/js/element-config'
import './assets/stylus/index.styl'
Vue.config.productionTip = false

Vue.prototype.$storage = storage
Vue.prototype.$config = config

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
