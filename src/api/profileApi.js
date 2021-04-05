const axios = require('axios');

function fetchProfile(user_id){
    var config = {
    method: 'get',
    url: `http://127.0.0.1:5000/api_v1/members/${user_id}`,
    };

    return axios(config)
}

function updateProfile(data){

    var config = {
    method: 'put',
    url: `http://127.0.0.1:5000/api_v1/${data.user_id}/upadate_infromation`,
    headers: { 
        'Content-Type': 'application/json'
    },
    data : JSON.stringify(data)
    };

    return axios(config)
}
export default {fetchProfile,updateProfile}
 