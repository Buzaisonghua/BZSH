import Vue from 'vue'
import Vuex from 'vuex'

import { getCookies, setCookies } from '@/utils/cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isNav: Boolean(getCookies('isNav'))
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
    }
  }
})
export default store
