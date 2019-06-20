import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout/index'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login'),
      hidden: true
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/components/errorPage/404'),
      hidden: true
    },
    {
      path: '/',
      component: Layout,
      children: [{
        path: 'index',
        name: 'Home',
        component: () => import('@/components/home'),
        meta: {
          title: 'HOME',
          icon: 'el-icon-setting'
        }
      }]
    },
    {
      path: '/echart',
      component: Layout,
      children: [{
        path: 'index',
        name: 'Echart',
        component: () => import('@/components/echart'),
        meta: {
          title: 'ECHART',
          icon: 'el-icon-guide'
        }
      }]
    },
    {
      path: '/router',
      component: Layout,
      meta: {
        title: 'ROUTER',
        icon: 'el-icon-location'
      },
      children: [
        {
          path: 'menuOne',
          name: 'MenuOne',
          component: () => import('@/components/routers/menuOne/index'),
          meta: {
            title: 'MENU-1'
          }
        },
        {
          path: 'menuTwo',
          name: 'MenuTwo',
          component: () => import('@/components/routers/menuTwo/index'),
          meta: {
            title: 'MEMU-2'
          },
          children: [
            {
              path: 'menuTwoOne',
              name: 'MenuTwoOne',
              component: () => import('@/components/routers/menuTwo/menuTwoOne'),
              meta: {
                title: 'MENU-2-1'
              }
            },
            {
              path: 'menuTwoTwo',
              name: 'MenuTwoTwo',
              component: () => import('@/components/routers/menuTwo/menuTwoTwo'),
              meta: {
                title: 'MENU-2-2'
              }
            },
            {
              path: 'menuTwoThree',
              name: 'MenuTwoThree',
              component: () => import('@/components/routers/menuTwo/menuTwoThree/index'),
              meta: {
                title: 'MENU-2-3'
              },
              children: [{
                path: 'menuTwoThreeOne',
                name: 'MenuTwoThreeOne',
                component: () => import('@/components/routers/menuTwo/menuTwoThree/menuTwoThreeOne'),
                meta: {
                  title: 'MENU-2-3-1'
                }
              }, {
                path: 'menuTwoThreeTwo',
                name: 'MenuTwoThreeTwo',
                component: () => import('@/components/routers/menuTwo/menuTwoThree/menuTwoThreeTwo'),
                meta: {
                  title: 'MENU-2-3-2'
                }
              }]
            }]
        }
      ]
    },
    {
      path: '/newView',
      name: 'NewView',
      component: () => import('@/components/newView/index'),
      meta: {
        title: 'NEWVIEW',
        icon: 'el-icon-medal-1'
      },
      children: [
        {
          path: '/newView/ONE',
          name: 'newViewONE',
          component: () => import('@/components/newView/newViewComponents/mainComponents/mainComponentsONE'),
          meta: {
            title: 'VIEW-1'
          }
        }, {
          path: '/newView/TWO',
          name: 'newViewTWO',
          component: () => import('@/components/newView/newViewComponents/mainComponents/mainComponentsTwo'),
          meta: {
            title: 'VIEW-2'
          }
        }, {
          path: '/newView/THREE',
          name: 'newViewTHREE',
          component: () => import('@/components/newView/newViewComponents/mainComponents/mainComponentsThree'),
          meta: {
            title: 'VIEW-3'
          }
        }, {
          path: '/newView/Four',
          name: 'newViewFOUR',
          component: () => import('@/components/newView/newViewComponents/mainComponents/mainComponentsFour'),
          meta: {
            title: 'VIEW-4'
          }
        }]
    },
    {
      path: '*',
      redirect: {name: '404'},
      hidden: true
    }
  ]
})
