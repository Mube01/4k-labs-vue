import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth'
import user from './modules/user';
import projects from './modules/projects';
import profile from './modules/profile'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    logtest({commit},data){
      console.log('this is root',data)
    },
  },
  getters:{
    test(){
      return true
    }
  },
  modules: {
    auth,
    user,
    projects,
    profile
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
})
