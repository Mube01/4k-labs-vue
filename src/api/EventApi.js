var axios = require('axios');

function getEvents(){

    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)

    var config = {
    method: 'get',
    url: '/api_v1/get_events',
    headers: {
        'Authorization': `Bearer ${token}`,
     }
    };

    return axios(config)
}

function addEvent(data){
    
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)

    var config = {
    method: 'post',
    url: '/api_v1/add_event',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
    data : JSON.stringify(data)
    };

    return axios(config)
}

function deleteEvent(event_id){

    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)

    var config = {
    method: 'get',
    url: `/api_v1/delete_event/${event_id}`,
    headers: {
        'Authorization': `Bearer ${token}`,
     }
    };

    return axios(config)
}

export default {addEvent,getEvents,deleteEvent}