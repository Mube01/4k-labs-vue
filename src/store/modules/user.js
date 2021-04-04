export default {
    namespaced: true,

    state:{
        user:"",
    },
    getters:{
        getUserInformation: state => state.user

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