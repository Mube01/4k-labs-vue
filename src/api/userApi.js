var axios = require('axios');

function userInformation(user_id){

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

export default {userInformation}