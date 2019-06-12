// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'// 使用element-ui
import axios from 'axios'// 使用axios
import VueAxios from 'vue-axios'

import App from './App'
import router from './router'
import store from './store'
import './needLogin'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
  components: { App },
  template: '<App/>'
})
