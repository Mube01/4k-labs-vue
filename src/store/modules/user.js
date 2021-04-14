import userApi from '../../api/userApi'
export default {
    namespaced: true,

    state:{
        user:"",
    },
    getters:{
        getUserInformation: state => state.user,
        getUserId: state => state.user.user_id

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
        }
    },
    mutations:{
        addUserInformation(state,userData){
            state.user = userData
        }
    }
  };