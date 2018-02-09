import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from '@/views/Index'
import Login from '@/views/Login'
import UserList from '@/views/UserList'
import Home from '@/views/Home'
import CreateArticle from "@/views/CreateArticle"
import ArticleList from "@/views/ArticleList"

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      children :[
        {
          path: '/home',
          component: Home
        },
        {
          path: '/userlist',
          component: UserList
        },
        {
          path: '/createarticle',
          component: CreateArticle
        },
        {
          path: '/articlelist',
          component: ArticleList
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
