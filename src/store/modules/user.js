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
        }
    },
    mutations:{
        addUserInformation(state,userData){
            state.user = userData
        }
    }
  };