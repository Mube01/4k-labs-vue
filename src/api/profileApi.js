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

function updateAdminProfile(data){
    data = JSON.stringify({"username":data.username,"password":data.password,"newpassword":data.newpassword,"user_id":data.user_id});

    var config = {
    method: 'put',
    url: 'http://127.0.0.1:5000/api_v1/upadate_admin_profile',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    return axios(config)
}
export default {fetchProfile,updateProfile,updateAdminProfile}
 