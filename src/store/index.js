import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import auth from './modules/auth'
import user from './modules/user';
import projects from './modules/projects';
import profile from './modules/profile'
import tokens from './modules/tokens'
import members from './modules/members'

export default createStore({
  state: {
    roleMap : {
      0:'Intern',
      1:'Regular Member',
      2:'Team Leader',
      3:'Alumni',
      4:'Admin'
    }
  },
  mutations: {
  },
  actions: {
    getKeyByValueRole({dispatch},value) {
      var roleMap = this.state.roleMap 
      return Object.keys(roleMap).find(key => roleMap[key] === value);
    }
  },
  getters:{

  },
  modules: {
    auth,
    user,
    projects,
    profile,
    tokens,
    members
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
})
