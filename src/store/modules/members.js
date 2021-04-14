import membersApi from '../../api/membersApi'
export default {
    namespaced: true,

    state:{
        members: ""
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
        }

    },
    actions:{
        updateUser({commit,dispatch,rootGetters},members){
            var user_id = rootGetters['user/getUserId']
            var user = members.find((member)=>member.user_id === user_id)
            console.log('updating user_inforamtion')
            dispatch('user/addUserInformation',user,{root:true})
        },
        getMembers({ commit, dispatch,rootGetters }) {
            return new Promise((resolve, reject) => {
                membersApi.getMembers().then((result) => {
                    console.log(result.data.members)
                    commit('storeMembers', result.data.members)
                    console.log('is the man admin ', rootGetters['user/isSuperAdmin'])
                    if(! rootGetters['user/isSuperAdmin']){
                        console.log('the user is not a  admin')
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
            return new Promise((resolve,reject)=>{
                membersApi.changeMemberRole(user_id,role).then((result) => {
                    commit('changeRole',{user_id,role})
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
            return new Promise((resolve,reject)=>{
                membersApi.changeMemberDivision(user_id,division).then((result) => {
                    commit('changeDivsion',{user_id,division})
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
                    console.log('found one copy',state.members[index].Role)
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