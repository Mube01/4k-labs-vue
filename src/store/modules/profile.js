import profileApi from '../../api/profileApi'
import router from '../../router'
import user from './user';
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
    },
    mutations:{
        addUserInformation(state,userData){
            state.user = userData
        }
    }
  };