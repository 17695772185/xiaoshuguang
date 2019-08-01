import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from './home'
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
      Home,



    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/404',
      component: () => import('views/common/NotFind')
    },
    {
      path: '**',
      redirect: '/404'
    }
  ],
  
  
})
