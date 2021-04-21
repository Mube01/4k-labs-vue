import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import auth from './modules/auth'
import user from './modules/user';
import projects from './modules/projects';
import profile from './modules/profile'
import tokens from './modules/tokens'
import members from './modules/members'
import events from './modules/events'

export default createStore({
  state: {
    roleMap : {
      0:'Intern',
      1:'Regular Member',
      2:'Team Leader',
      3:'Alumni',
      4:'Admin'
    },
    alertData : {
      status:false,
      message:"",
      success:"",
    },
  },
  mutations: {
   
    errorAlert(state,message){
      state.alertData.message = message
      state.alertData.status = true
      state.alertData.success = false
      setTimeout(()=>{
        this.commit('setDefault')
      },3000)
    },
    successAlert(state,message){
      state.alertData.message = message
      state.alertData.status = true
      state.alertData.success = true
      setTimeout(()=>{
        this.commit('setDefault')
      },3000)
    },
    setDefault(state){
      state.alertData.message=""
      state.alertData.status=false,
      state.alertData.success=false
    }
  },
  actions: {
    getKeyByValueRole({dispatch},value) {
      var roleMap = this.state.roleMap 
      return Object.keys(roleMap).find(key => roleMap[key] === value);
    },
    errorAlert({commit},message){
      commit('errorAlert',message)
    },
    successAlert({commit},message){
      commit('successAlert',message)
    }
  },
  getters:{
    getRoleByKey:(state)=>(roleID)=>{
      return state.roleMap[roleID]
    },
    getData:(state)=>{
      return {'message':state.alertData.message,'status':state.alertData.status,'success':state.alertData.success}
    }

  },
  modules: {
    auth,
    user,
    projects,
    profile,
    tokens,
    members,
    events,
  },
  plugins: [createPersistedState({
  })],
})
