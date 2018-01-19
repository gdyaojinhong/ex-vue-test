import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/views/Home'
import Login from '@/views/Login'
import UserList from '@/views/UserList'
console.log("--------55555555555------------")
console.log(UserList)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
      children :[
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
