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
        storeUserInfo({dispatch},userData){
            dispatch('user/addUserInformation',userData,{root:true})
        },
        adminLogin({dispatch,commit},id_token){
            return new Promise((resolve,reject)=>{
                adminLogin(id_token).then((result) => {
                    console.log(result.data)
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
        loginUser({dispatch,commit},{username,password}){
            return new Promise((resolve,reject)=>{
                login(username,password).then((result) => {
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
            return new Promise((resolve,reject)=>{
                commit('authLogout')
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                localStorage.removeItem("vuex");
                router.push('/login')    
                resolve();
            })
        },
        deleteAccessTokens({commit}){
            return new Promise((resolve,reject)=>{
                commit('authLogout')
                localStorage.removeItem("access_token");
                resolve();

            })
        },

        register({commit},{fullname,gmail,token}){
            console.log(fullname,gmail,token)
            return new Promise((resolve,reject)=>{
                register(fullname,gmail,token).then((result) => {
                    console.log(result.data)
                    router.push('/login')
                    resolve(result.data)
                }).catch((err) => {
                    console.log(err.response.data)
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
            sessionStorage.clear();
        }
    },
  };

