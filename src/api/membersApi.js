var axios = require('axios');


function changeMemberRole(user_id,role){
    var data = JSON.stringify({"user_id":user_id,"Role":role});

    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)
    
    var config = {
    method: 'put',
    url: '/api_v1/changeRole',
    headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
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
        url: '/api_v1/members',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    return axios(config)
}


function updateProjectMembers(data) {

    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)

    var config = {
        method: 'post',
        url: '/api_v1/project/updatemembers',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify(data)
    };

    return axios(config)
}

function changeMemberDivision(user_id,division){
    var data = JSON.stringify({"user_id":user_id,"division":division});
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)

    var config = {
    method: 'post',
    url: '/api_v1/changeDivision',
    headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
    data : data
    };

    return axios(config)
}

export default {changeMemberRole,getMembers,updateProjectMembers,changeMemberDivision}