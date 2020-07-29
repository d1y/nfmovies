import Vue from 'vue'
import Vuex from 'vuex'
import fs from './fs'
import cache from './modules/cache'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
    
  },
  modules: {
    cache
  },
  plugins: [
    fs()
  ]
})