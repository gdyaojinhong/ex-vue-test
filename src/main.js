// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/base.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import axios from 'axios'
import './assets/css/theme/index.css'
import  './assets/js/fliters' 

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
