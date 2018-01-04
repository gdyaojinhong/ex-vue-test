import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomeList'
import Daily from '@/views/Daily'
import ShowP from '@/views/ShowP'
import About from '@/views/About'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/daily',
      name: 'daily',
      component: Daily
    },
    {
      path: '/showP',
      name: 'showP',
      component: ShowP
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
