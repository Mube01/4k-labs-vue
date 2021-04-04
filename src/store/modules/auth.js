import {login} from '../../api/authApi'

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
        loginUser({dispatch,commit},{username,password}){
            console.log(login())
            return new Promise((resolve,reject)=>{
                login(username,password).then((result) => {
                    console.log(result.data)
                    localStorage.setItem("access_token", JSON.stringify(result.data.access_token));
                    dispatch('user/addUserInformation',result.data.user,{root:true})
                    dispatch('storeUserInfo',result.data.user)
                    commit('authSuccesfull',result.data)
                    resolve()
                }).catch((err) => {
                    commit('authError')
                    localStorage.removeItem("access_token");
                    reject(err)
                });
            })
        },
        logoutUser({commit}){
            return new Promise((resolve,reject)=>{
                commit('authLogout')
                localStorage.removeItem("access_token");
                resolve();
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

