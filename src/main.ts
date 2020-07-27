import Vue from 'vue'
import App from './App.vue'

const uiModule = require('uview-ui')

Vue.config.productionTip = false
Vue.use(uiModule)

new App().$mount()
