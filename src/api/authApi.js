const axios = require('axios');


function login (id_token){
    
    var data = JSON.stringify({"id_token":id_token});
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
function register(fullname,email,token,username){
    var data = JSON.stringify({"email":email,"fullname":fullname,"username":username,"token":token});
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
