var axios = require('axios');

function userInformation(){

    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)

    var config = {
    method: 'get',
    url: '/api_v1/members/SBHGLB0EE5PY',
    headers: {
        Authorization: `Bearer ${token}`,
     }
    };

    return axios(config)
}

export default {userInformation}