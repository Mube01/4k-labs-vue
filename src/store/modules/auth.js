import {login,register,adminLogin} from '../../api/authApi'
import router from '../../router'

const axios = require('axios');

export default {
    namespaced: true,

    state:{
        status:null,
        token: localStorage.getItem("access_token") || "",
    },
    getters:{
        isAuthenticated:state => !!state.token

    },
    actions:{
        storeUserInfo({commit},userData){
            commit('user/storeUserInformation',userData,{root:true})
        },
        RemoveUserInfo({commit}){
            commit('user/RemoveUserInfo',{},{root:true})
        },
        adminLogin({dispatch,commit},id_token){
            return new Promise((resolve,reject)=>{
                adminLogin(id_token).then((result) => {
                    localStorage.setItem("refresh_token", JSON.stringify(result.data.refresh_token));
                    localStorage.setItem("access_token", JSON.stringify(result.data.access_token));
                    dispatch('storeUserInfo',result.data.user)
                    commit('authSuccesfull',result.data)
                    resolve(result.data)
                }).catch((err) => {
                    commit('authError')
                    localStorage.removeItem("access_token");
                    reject(err.response.data)
                });
            })
        },
        loginUser({dispatch,commit},id_token){
            return new Promise((resolve,reject)=>{
                login(id_token).then((result) => {
                    localStorage.setItem("refresh_token", JSON.stringify(result.data.refresh_token));
                    localStorage.setItem("access_token", JSON.stringify(result.data.access_token));
                    dispatch('storeUserInfo',result.data.user)
                    commit('authSuccesfull',result.data)
                    resolve(result.data)
                }).catch((err) => {
                    commit('authError')
                    localStorage.removeItem("access_token");
                    reject(err.response.data)
                });
            })
        },
        logoutUser({commit,dispatch}){
            commit('authLogout')
            commit('user/clearUserInformation',{}, { root: true })
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            router.push({ name: "Home" });
            
        },
        // this is another logout but it donesn't push back to the home directory
        logoutUser2({commit,dispatch}){
            commit('authLogout')
            commit('user/clearUserInformation',{}, { root: true })
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token"); 
        },
        deleteAccessTokens({commit}){
            return new Promise((resolve,reject)=>{
                commit('authLogout')
                localStorage.removeItem("access_token");
                resolve();

            })
        },

        register({commit},{fullname,email,token}){
            return new Promise((resolve,reject)=>{
                register(fullname,email,token).then((result) => {
                    resolve(result.data)
                }).catch((err) => {
                    reject(err.response.data);
                });
            })
        }
    },
    mutations:{
        authSuccesfull(state,res){
            state.status = true
            state.token = res.access_token
        },
        authError(state){
            state.status = false
            state.token = null
        },
        authLogout(state){
            state.status = false
            state.token = null
        }
    },
  };

