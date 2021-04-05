const axios = require('axios');

function fetchProfile(user_id){
    var config = {
    method: 'get',
    url: `http://127.0.0.1:5000/api_v1/members/${user_id}`,
    };

    return axios(config)
}

export default {fetchProfile}
 