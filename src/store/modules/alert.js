export default {
    namespaced: true,

    state:{
        status:false,
        message:"test this",
        success:false

    },
    getters:{
        status:(state)=>state.status,
        data(state){
            return state.message
        }
    },
    actions:{
        successAlert({commit},message){
            commit('successAlert',message)
        },
        errorAlert({commit},message){
            commit('errorAlert',message)
        }
    },
    mutations:{
        successAlert(state,message){
            state.status = true
            state.message = message
            state.success = true
        },
        errorAlert(state,message){

            state.status = true
            state.message = message
            state.success = false


            console.log('updated all the staff ',message)
        }
    }
  };