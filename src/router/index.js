import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/views/Home'
import Login from '@/views/Login'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
    // {
    //   path: '/showP',
    //   name: 'showP',
    //   component: ShowP
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // }
  ]
})
