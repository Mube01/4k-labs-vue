import profileApi from '../../api/profileApi'
import router from '../../router'
export default {
    namespaced: true,

    state:{
        user:"",
    },
    getters:{

    },
    actions:{
        getUserInformation({commit},user_id){
            return new Promise((resolve,reject)=>{
                profileApi.fetchProfile(user_id).then((result)=>{
                    resolve(result.data)
                }).catch((err) => {
                    if(err.response.status == 404){
                        router.push('/404')
                    }
                });
            })
        },
        editProfile({dispatch},data){
            return new Promise((resolve,reject)=>{
                profileApi.updateProfile(data).then((result) => {
                    dispatch('user/storeUserInformation',result.data.data,{root:true})
                    resolve(result.data)
                }).catch((err) => {
                    
                });
            })
        },
        updateAdminProfile({dispatch},data){         
            return new Promise((resolve,reject)=>{
                profileApi.updateAdminProfile(data).then((result) => {
                    dispatch('user/storeUserInformation',result.data.data,{root:true})
                    resolve(result.data)
                }).catch((err) => {
                    
                });
            })
        }
    },
    mutations:{
    }
  };