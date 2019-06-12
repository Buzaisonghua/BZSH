import router from './router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getCookies } from '@/utils/cookie'

NProgress.configure({ // 进度条设置
  minimum: 1,
  showSpinner: false
})
router.beforeEach((to, from, next) => {
  NProgress.start() // 使用进度条
  // 路由中设置的needLogin字段就在to当中
  if (getCookies('username')) { // 判断是否存在username的cookie，存在则是登录状态
    // 登录状态
    if (to.path === '/login') { // 如果要进入登录页跳转至主页
      next({path: '/home'})
      console.log(111)
    } else { // 否则 跳转到指定页面
      next()
    }
  } else {
    // 未登录状态
    if (to.path === '/login') {
      next() // 可以进入login页
    } else {
      next({ path: '/login' })// 进入除login页面的其他页面自动跳转至登录页
    }
  }
})
