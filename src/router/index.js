import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/views/Home'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    }
    // {
    //   path: '/daily',
    //   name: 'daily',
    //   component: Daily
    // },
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
