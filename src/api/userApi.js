var axios = require('axios');

function userInformation(){

    var config = {
    method: 'get',
    url: 'http://127.0.0.1:5000/api_v1/members/SBHGLB0EE5PY',
    headers: { }
    };

    return axios(config)
}

export default {userInformation}