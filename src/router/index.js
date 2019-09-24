import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import Personal from '@/pages/personal'
import News from '@/pages/news'
import Datas from '@/pages/datas'
import Show from '@/pages/show'
import Garden from '@/pages/garden'
import Popular from '@/pages/popular'
import Intro from '@/pages/intro'

import NewsDetail from '@/pages/newsDetail'
import DatasDetail from '@/pages/datasDetail'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/datas',
      name: 'datas',
      component: Datas
    },
    {
      path: '/show',
      name: 'show',
      component: Show
    },
    {
      path: '/garden',
      name: 'garden',
      component: Garden
    },
    {
      path: '/popular',
      name: 'popular',
      component: Popular
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/newsDetail',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/DatasDetail',
      name: 'DatasDetail',
      component: DatasDetail
    }
  ]
})

router.beforeEach((to,from,next)=>{
  console.log(to);
  console.log(from);
  next();
})
export default router;
