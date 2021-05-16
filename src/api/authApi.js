const axios = require('axios');


function login (username,password){
    
    var data = JSON.stringify({"username":username,"password":password});
    var config = {
    method: 'post',
    url: '/api_v1/login',
    headers: { 
        'Content-Type': 'application/json',
    },
    data : data
    };
    return  axios(config)
}
function register(fullname,username,password,token){
    var data = JSON.stringify({"username":username,"password":password,"fullname":fullname,"token":token});

    var config = {
    method: 'post',
    url: '/api_v1/register_member',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    return axios(config)

}

function adminLogin(id_token){
    var data = JSON.stringify({"id_token":id_token});
    var config = {
    method: 'post',
    url: '/api_v1/adminlogin',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    return axios(config)
}

export {login,register,adminLogin}
