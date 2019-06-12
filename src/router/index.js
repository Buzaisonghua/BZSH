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
      path: '/',
      component: Layout,
      children: [{
        path: 'html5',
        name: 'Html5',
        component: () => import('@/components/html5'),
        children: [{
          path: '/html5/one',
          name: 'ONE',
          component: () => import('@/components/html5/components/children/one')
        }, {
          path: '/html5/two',
          name: 'TWO',
          component: () => import('@/components/html5/components/children/two')
        }, {
          path: '/html5/three',
          name: 'THREE',
          component: () => import('@/components/html5/components/children/three')
        }]
      }]
    }
  ]
})
