var axios = require('axios');

function generateToken(division){
    var data = JSON.stringify({"Division":division});

    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)

    var config = {
    method: 'post',
    url: 'http://127.0.0.1:5000/api_v1/generate_token',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
    data : data
    };

    return axios(config)
}

function listTokens(){


    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)

    var config = {
    method: 'get',
    url: 'http://127.0.0.1:5000/api_v1/list_tokens',
    headers: {
        Authorization: `Bearer ${token}`,
    }
    };

    return axios(config)
}

function deleteToken(token){

    var access_token = localStorage.getItem('access_token') || ''
    access_token = token.substring(1, token.length - 1)

    var config = {
        method: 'get',
        url: `http://127.0.0.1:5000/api_v1/delete_token/${token}`,
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
      };

    return axios(config)
}

export default {generateToken,listTokens,deleteToken}