import Vue from 'vue'
import store from '@/store'
import App from './App.vue'

Vue.config.productionTip = false

new App({
  store,
}).$mount()
