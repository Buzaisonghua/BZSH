import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import app from './module/app'

import { getCookies, setCookies } from '@/utils/cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isNav: Boolean(getCookies('isNav')),
    isView: true
  },
  getters,
  modules: {
    app
  },
  mutations: {
    changeNav (state) {
      if (state.isNav) {
        setCookies('isNav', '')
        state.isNav = Boolean(getCookies('isNav'))
      } else {
        setCookies('isNav', 'true')
        state.isNav = Boolean(getCookies('isNav'))
      }
    },
    changeIsView (state) {
      if (state.isView) {
        state.isView = false
      } else {
        state.isView = true
      }
    }
  }
})
export default store
