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
        addUserInformation({commit},userData){
            commit('addUserInformation',userData)
        },
        userInformation({commit},user_id){
            userApi.userInformation(user_id).then((result) => {
                commit('addUserInformation',result.data)
            }).catch((err) => {
                
            });
        },
        clearUserInformation({commit}){
            commit("clearUserInformation")
        }
    },
    mutations:{
        addUserInformation(state,userData){
            console.log('the user data is ',userData)
            state.user = userData
        },
        clearUserInformation(state){
            state.user = ""
        }
    }
  };