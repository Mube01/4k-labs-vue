const axios = require('axios');

function fetchProjects() {
    var axios = require('axios');
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)
    var config = {
        method: 'get',
        url: 'http://127.0.0.1:5000/api_v1/get_projects',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };

    return axios(config)

}



function fetchProject(project_code) {
    var axios = require('axios');
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1, token.length - 1)
    var config = {
        method: 'get',
        url: `http://127.0.0.1:5000/api_v1/get_projects/${project_code}`,
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };

    return axios(config)
}

function createNewProject(data) {
    var config = {
        method: 'post',
        url: 'http://127.0.0.1:5000/api_v1/create_new_project',
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
    url: `http://127.0.0.1:5000/api_v1/delete_project/${project_code}`,
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
    url: 'http://127.0.0.1:5000/api_v1/updateproject',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
    
    data : JSON.stringify(data)
    };

    return axios(config)
}

export default { fetchProjects, fetchProject, createNewProject, deleteProject,updateProject}