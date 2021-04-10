import tokenApi from '../../api/tokenApi'

export default {
    namespaced: true,

    state:{
        tokens:[]
    },
    getters:{
        getTokens: state => state.tokens,
    },
    actions:{
        generateTokens({commit,dispatch},division){
            console.log('the division is ',division)
            return new Promise((resolve,reject)=>{
                tokenApi.generateToken(division).then((result) => {
                    commit('addToken',result.data)
                    resolve(result.data)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                });
            })
        },
        fetchAllTokens({commit,dispatch}){
            return new Promise((resolve, reject) => {
                tokenApi.listTokens().then((result) => {
                    commit('storeTokens',result.data.tokens)
                    resolve(result.data.tokens)
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
        storeTokens(state,tokens){
            state.tokens = tokens
        },
        addToken(state,data){
            state.tokens.push(data)
        }
        
    }
  };