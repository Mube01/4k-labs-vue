const axios = require('axios');

function fetchProjects(){
    var axios = require('axios');
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1,token.length-1)
    var config = {
    method: 'get',
    url: 'http://127.0.0.1:5000/api_v1/get_projects',
    headers: { 
        Authorization: `Bearer ${token}`,
    }
    };

    return axios(config)

}



function fetchProject(project_code){
    var axios = require('axios');
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1,token.length-1)
    var config = {
        method: 'get',
        url: `http://127.0.0.1:5000/api_v1/get_projects/${project_code}`,
        headers: { 
            Authorization: `Bearer ${token}`,
        }
    };

    return axios(config)
}

function createNewProject(data){
    var config = {
    method: 'post',
    url: 'http://127.0.0.1:5000/api_v1/create_new_project',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : JSON.stringify(data)
    };

    return axios(config)

}

function getMembers(){
    
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1,token.length-1)
    var config = {
    method: 'get',
    url: 'http://127.0.0.1:5000/api_v1/members',
    headers: { 
        Authorization: `Bearer ${token}`,
    }
    };
    return axios(config)
}
function updateMembers(data){
    
    var config = {
    method: 'post',
    url: 'http://127.0.0.1:5000//api_v1/project/updatemembers',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : JSON.stringify(data)
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });

}
export default {fetchProjects,fetchProject,createNewProject,getMembers,updateMembers}
