import userApi from '../../api/userApi'
export default {
    namespaced: true,

    state:{
        user:"",
    },
    getters:{
        getUserInformation: state => state.user,
        getUserId: state => state.user.user_id,
        getUserRole: state => state.user.Role,
        isSuperAdmin: state => state.user.superadmin

    },
    actions:{
        storeUserInformation({commit},userData){
            commit('storeUserInformation',userData)
        },
        fetchuserInformation({commit},user_id){
            userApi.userInformation(user_id).then((result) => {
                commit('storeUserInformation',result.data)
            }).catch((err) => {
                
            });
        },
        clearUserInformation({commit}){
            commit("clearUserInformation")
        }
    },
    mutations:{
        storeUserInformation(state,userData){
            state.user = userData
        },
        clearUserInformation(state){
            state.user = ""
        },
        RemoveUserInfo(state){
            state.user = ""
        },
    }
  };