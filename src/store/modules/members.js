import membersApi from '../../api/membersApi'
export default {
    namespaced: true,

    state:{
        members: []
    },
    getters:{
        getMembers(state) {
            var copy_members = state.members
            for (let i = 0; i < copy_members.length; i++) {
                copy_members[i]['value'] = copy_members[i]['user_id']
            }
            return copy_members
        },
        getMembersAdmin(state){
            return state.members
        },
        getMemberById:(state)=>(id)=>{
            return state.members.filter((member)=>member.user_id==id)
        }

    },
    actions:{
        updateUser({commit,dispatch,rootGetters},members){
            var user_id = rootGetters['user/getUserId']
            var user = members.find((member)=>member.user_id === user_id)
            dispatch('user/storeUserInformation',user,{root:true})
        },
        getMembers({ commit, dispatch,rootGetters }) {
            return new Promise((resolve, reject) => {
                membersApi.getMembers().then((result) => {
                    commit('storeMembers', result.data.members)
                    if(!rootGetters['user/isSuperAdmin']){
                        dispatch('updateUser',result.data.members)
                    }
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                });
            })
        },
        updateProjectMembers({ commit, dispatch }, data) {
            return new Promise((resolve, reject) => {
                membersApi.updateProjectMembers(data).then((result) => {
                    resolve(result.data)
                }).catch((err) => {
                    reject(err.response.data)
                });
            })
        },
        async changeRole({dispatch,commit},{user_id,role}){
            role = await dispatch('getKeyByValueRole',role,{root:true})
            commit('changeRole',{user_id,role})
            return new Promise((resolve,reject)=>{
                membersApi.changeMemberRole(user_id,role).then((result) => {
                    resolve(result.data)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                });
            })
        },
        changeDivsion({commit,dispatch},{user_id,division}){
            commit('changeDivsion',{user_id,division})
            return new Promise((resolve,reject)=>{
                membersApi.changeMemberDivision(user_id,division).then((result) => {
                    resolve(result.data)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                });
            })
        }
    },
    mutations:{
        storeMembers(state, members) {
            state.members = members
        },
        changeRole(state,{user_id,role}){
            for (let index = 0; index < state.members.length; index++) {
                if(state.members[index].user_id === user_id){
                    state.members[index].Role = role
                }
            }
        },
        changeDivsion(state,{user_id,division}){
            for (let index = 0; index < state.members.length; index++) {
                if(state.members[index].user_id === user_id){
                    state.members[index].Division = division
                }
            }
        }
    }
  };