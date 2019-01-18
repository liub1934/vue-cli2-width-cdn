import Vue from 'vue'
import Vuex from 'vuex'

import module1 from './module-1'

import createLogger from "vuex/dist/logger"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    module1
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})