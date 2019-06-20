import Cookies from 'js-cookie'

const state = {
  loginStatus: Cookies.get('loginUser') ? !!Cookies.get('loginUser') : false,
  sidebarStatus: false
}

const mutations = {
  TOGGLE_LOGIN (state) {
    Cookies.set('loginUser', 1)
  },
  TOGGLE_LOGOUT (state) {
    Cookies.remove('loginUser')
  },
  TOGGLE_SIDEBAR (state) {
    if (Cookies.get('sidebarStatus')) {
      Cookies.remove('sidebarStatus')
    } else {
      Cookies.set('sidebarStatus')
    }
    if (Cookies.get('sidebarStatus')) {
      state.sidebarStatus = true
    } else {
      state.sidebarStatus = false
    }
    console.log(state.sidebarStatus)
  }
}

const actions = {
  toggleLogin (context) {
    context.commit('TOGGLE_LOGIN')
  },
  toggleLogout ({commit}) {
    commit('TOGGLE_LOGOUT')
  },
  toggleSidebar ({commit}) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  state,
  mutations,
  actions
}
