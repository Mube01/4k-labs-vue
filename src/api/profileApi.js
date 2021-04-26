const axios = require('axios');

function fetchProfile(user_id){
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)
    var config = {
    method: 'get',
    url: `/api_v1/members/${user_id}`,
    headers: {
        Authorization: `Bearer ${token}`,
    }
    };

    

    return axios(config)
}

function updateProfile(data){
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)

    var config = {
    method: 'put',
    url: `/api_v1/${data.user_id}/upadate_infromation`,
    headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
    data : JSON.stringify(data)
    };

    return axios(config)
}

function updateAdminProfile(data){
    data = JSON.stringify({"username":data.username,"password":data.password,"newpassword":data.newpassword,"user_id":data.user_id});

    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)

    var config = {
    method: 'put',
    url: '/api_v1/upadate_admin_profile',
    headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,

    },
    data : data
    };

    return axios(config)
}
export default {fetchProfile,updateProfile,updateAdminProfile}
 