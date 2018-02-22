import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from '@/views/Index'
import Login from '@/views/Login'
import UserList from '@/views/UserList'
import Home from '@/views/Home'
import Content from '@/components/Content'
import CreateArticle from "@/views/CreateArticle"
import ArticleList from "@/views/ArticleList"
import ArticlelDetail from "@/views/ArticlelDetail"
import Abouts from "@/views/Abouts"

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
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
          path: '/article',
          component: Content,
          children :[
            {
              path: '/article/createarticle',
              component: CreateArticle
            },
            {
              path: '/article/articlelist',
              component: ArticleList
            },
            {
              path: '/article/articleldetail',
              component: ArticlelDetail
            }
          ]
        },
        {
          path: '/abouts',
          component: Abouts
        }
      ]
    }
  ]
})
