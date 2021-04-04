const axios = require('axios');


function renameTask(task_code,task_name){
    var data = JSON.stringify({"task_code":task_code,"task":task_name});

    var config = {
    method: 'post',
    url: 'http://127.0.0.1:5000/api_v1/renameTask',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    return axios(config)

}

function completeTask(task_code){
    var axios = require('axios');
    var data = JSON.stringify({"task_code":task_code});

    var config = {
    method: 'put',
    url: 'http://127.0.0.1:5000/api_v1/completeTask',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    return axios(config)
}

function deleteTask(task_code){
    var axios = require('axios');
    var data = JSON.stringify({"task_code":task_code});

    var config = {
    method: 'post',
    url: `http://127.0.0.1:5000/api_v1/deleteTask/${task_code}`,
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    return axios(config)
}

function addTask(project_code,task){
    var axios = require('axios');
    var data = JSON.stringify({"project_code":project_code,"task":task});

    var config = {
    method: 'post',
    url: 'http://127.0.0.1:5000/api_v1/addTask',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    return axios(config)
}




export default {renameTask,completeTask,deleteTask,addTask}