const axios = require('axios');


function renameTask(task_code,task_name){
    var data = JSON.stringify({"task_code":task_code,"task":task_name});
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1,token.length-1)
    var config = {
    method: 'post',
    url: 'http://127.0.0.1:5000/api_v1/renameTask',
    headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,

    },
    data : data
    };

    return axios(config)

}

function updateTask(task_code,status){
    var data = JSON.stringify({"task_code":task_code,"status":status});
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1,token.length-1)
    var config = {
    method: 'put',
    url: 'http://127.0.0.1:5000/api_v1/updateTask',
    headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,

    },
    data : data
    };

    return axios(config)
}

function deleteTask(task_code){

    var data = JSON.stringify({"task_code":task_code});
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1,token.length-1)
    var config = {
    method: 'post',
    url: `http://127.0.0.1:5000/api_v1/deleteTask/${task_code}`,
    headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,

    },
    data : data
    };

    return axios(config)
}

function addTask(project_code,task){
    var data = JSON.stringify({"project_code":project_code,"task":task});
    var token = localStorage.getItem('access_token') || ''
    token = token.substring(1,token.length-1)
    var config = {
    method: 'post',
    url: '/api_v1/addTask',
    headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
    data : data
    };

    return axios(config)
}




export default {renameTask,updateTask,deleteTask,addTask}