const axios = require('axios');


function allPortalInfo(){
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)
    
    var config = {
        method: 'get',
        url: '/api_v1/get_all_info_portal',
        headers: { 
            Authorization: `Bearer ${token}`,
        }
    };

    return axios(config)
}



function fetchProjectsStatic() {
    var axios = require('axios');

    var config = {
        method: 'get',
        url: '/api_v1/_get_all_info',
    };

    return axios(config)

}

function fetchProjects() {
    var config = {
        method: 'get',
        url: '/api_v1/get_projects',
        headers: {
        }
    };

    return axios(config)

}

function fetchProject(project_code) {
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)
    var config = {
        method: 'get',
        url: `/api_v1/get_projects/${project_code}`,
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };

    return axios(config)
}

function createNewProject(data) {
    var config = {
        method: 'post',
        url: '/api_v1/create_new_project',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    };

    return axios(config)

}




function deleteProject(project_code){
    var axios = require('axios');

    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)

    var config = {
    method: 'get',
    url: `/api_v1/delete_project/${project_code}`,
    headers: {
            Authorization: `Bearer ${token}`,
        }
    };

    return axios(config)


}

function updateProject(data){
    
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)
    
    var config = {
    method: 'post',
    url: '/api_v1/updateproject',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
    
    data : JSON.stringify(data)
    };

    return axios(config)
}

export default { fetchProjects, fetchProject, createNewProject, deleteProject,updateProject,fetchProjectsStatic,allPortalInfo}