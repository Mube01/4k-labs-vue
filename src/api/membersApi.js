var axios = require('axios');


function changeMemberRole(user_id,role){
    var data = JSON.stringify({"user_id":user_id,"Role":role});

    var config = {
    method: 'put',
    url: 'http://127.0.0.1:5000/api_v1/changeRole',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    return axios(config)
}

function getMembers() {

    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)
    var config = {
        method: 'get',
        url: 'http://127.0.0.1:5000/api_v1/members',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    return axios(config)
}


function updateProjectMembers(data) {

    var config = {
        method: 'post',
        url: 'http://127.0.0.1:5000//api_v1/project/updatemembers',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    };

    return axios(config)
}

function changeMemberDivision(user_id,division){
    var axios = require('axios');
    var data = JSON.stringify({"user_id":user_id,"division":division});

    var config = {
    method: 'post',
    url: 'http://127.0.0.1:5000/api_v1/changeDivision',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    return axios(config)
}

export default {changeMemberRole,getMembers,updateProjectMembers,changeMemberDivision}