import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from '@/views/Index'
import Login from '@/views/Login'
import UserList from '@/views/UserList'
import Home from '@/views/Home'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children :[
        {
          path: 'Home',
          component: Home
        },
        {
          path: 'userlist',
          component: UserList
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
