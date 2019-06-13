import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout/index'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/components/errorPage/404')
    },
    {
      path: '/',
      component: Layout,
      children: [{
        path: 'home',
        name: 'Home',
        component: () => import('@/components/home')
      }]
    },
    {
      path: '/',
      component: Layout,
      children: [{
        path: 'echart',
        name: 'Echart',
        component: () => import('@/components/echart')
      }]
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'menuOne',
          name: 'MenuOne',
          component: () => import('@/components/routers/menuOne/index')
        },
        {
          path: 'menuTwo',
          name: 'MenuTwo',
          component: () => import('@/components/routers/menuTwo/index'),
          children: [
            {
              path: 'menuTwoOne',
              name: 'MenuTwoOne',
              component: () => import('@/components/routers/menuTwo/menuTwoOne')
            },
            {
              path: 'menuTwoTwo',
              name: 'MenuTwoTwo',
              component: () => import('@/components/routers/menuTwo/menuTwoTwo')
            },
            {
              path: 'menuTwoThree',
              name: 'MenuTwoThree',
              component: () => import('@/components/routers/menuTwo/menuTwoThree/index'),
              children: [{
                path: 'menuTwoThreeOne',
                name: 'MenuTwoThreeOne',
                component: () => import('@/components/routers/menuTwo/menuTwoThree/menuTwoThreeOne')
              }, {
                path: 'menuTwoThreeTwo',
                name: 'MenuTwoThreeTwo',
                component: () => import('@/components/routers/menuTwo/menuTwoThree/menuTwoThreeTwo')
              }]
            }]
        }
      ]
    },
    {
      path: '/newView',
      name: 'NewView',
      component: () => import('@/components/newView/index'),
      children: [{
        path: '/newView/ONE',
        name: 'newViewONE',
        component: () => import('@/components/newView/newViewComponents/mainComponents/mainComponentsONE')
      }, {
        path: '/newView/TWO',
        name: 'newViewTWO',
        component: () => import('@/components/newView/newViewComponents/mainComponents/mainComponentsTwo')
      }, {
        path: '/newView/THREE',
        name: 'newViewTHREE',
        component: () => import('@/components/newView/newViewComponents/mainComponents/mainComponentsThree')
      }, {
        path: '/newView/Four',
        name: 'newViewFOUR',
        component: () => import('@/components/newView/newViewComponents/mainComponents/mainComponentsFour')
      }]
    },
    {
      path: '*',
      redirect: {name: '404'}
    }
  ]
})
