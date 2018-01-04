// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import '../static/css/base.less'
import '../static/js/flex.js'

import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import store from './store/index'
// Vue.prototype.$http = axios;

import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
