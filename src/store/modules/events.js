import { Promise } from 'core-js';
import EventApi from '../../api/EventApi'
export default {
    namespaced: true,

    state:{
        allEvents: []
    },
    getters:{
        getAllEvents:(state)=>state.allEvents,
        getEventById:(state)=>(id)=>{
            return state.allEvents.find((event)=>event.event_id===id)
        }
    },
    actions:{
        addEvent({commit,dispatch},data){
            return new Promise((resolve, reject) => {
                EventApi.addEvent(data).then((result) => {
                    commit('addEvent',result.data.event)
                    resolve(result.data)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                });
            })
        },
        getEvents({commit,dispatch}){
            return new Promise((resolve, reject) => {
                EventApi.getEvents().then((result) => {
                    commit('storeEvents',result.data.events)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                });
            })
        },
        deleteEvent({commit,dispatch},event_id){
            commit('deleteEvent',event_id)
            return new Promise((resolve, reject) => {
                EventApi.deleteEvent(event_id).then((result) => {
                    resolve(result.data)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                });
            })
        },
        updateEvent({dispatch},data){
            return new Promise((resolve,reject)=>{
                EventApi.updateEvent(data.event_id,data.event_data).then((result) => {
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
        addEvent(state,event){
            state.allEvents.unshift(event)
        },
        storeEvents(state,events){
            state.allEvents = events
        },
        deleteEvent(state,event_id){
            state.allEvents = state.allEvents.filter((event)=>event.event_id!==event_id)
            
        }
    }
  };