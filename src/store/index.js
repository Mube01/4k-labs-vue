import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import home from './modules/home'
import auth from './modules/auth'
import user from './modules/user';
import projects from './modules/projects';
import profile from './modules/profile'
import tokens from './modules/tokens'
import members from './modules/members'
import events from './modules/events'

import projectsApi from '../api/projectsApi';


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
    },
    getAllPortalInfo({commit,dispatch}){
      return new Promise((resolve,reject)=>{
        projectsApi.allPortalInfo().then((result) => {
          commit('events/storeEvents', result.data.events, { root: true })
          commit('members/storeMembers', result.data.members, { root: true })
          commit('projects/storeAllProjects', result.data.projects, { root: true })
          commit('tokens/storeTokens', result.data.tokens, { root: true })
          commit('user/storeUserInformation', result.data.user, { root: true })
          resolve();
        }).catch((err) => {
            if (err.response.status == 401) {
              dispatch('auth/logoutUser', err.response.data, { root: true })
            }
            reject(err.response.data)
        });
      })
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
    home
  },
  plugins: [createPersistedState({})],
})
