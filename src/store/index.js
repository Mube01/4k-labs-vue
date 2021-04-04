import { createStore } from 'vuex'
import auth from './modules/auth'
import user from './modules/user';
import projects from './modules/projects';
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
    projects
  }
})
