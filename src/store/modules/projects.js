import projectsApi from '../../api/projectsApi'
import tasksApi from '../../api/tasksApi'
import members from './members';

export default {
    namespaced: true,

    state: {
        projects: "",
        project: ""
    },
    getters: {
        listOfProjects(state) {
            return state.projects
        },
        getProject(state) {
            return state.project
        },
        listOfProjectsByUserId: (state) => (user_id) => {
            return state.projects.filter((project)=>{
                return project.members.includes(user_id)
            })
        },
        divisionProjectGetter:(state)=>(division)=>{
            return state.projects.filter((project)=>project.Division===division)
        },
        projectMemberGetter:(state)=>{
            return state.project.members
        },
        /**
         * get project task by project_code and status
         */
        getProjectTasks: (state)=>(data)=>{
            var pro = state.projects.find((project)=>project.project_code === data.project_code)
            return pro.tasks.filter((task)=>task.status === data.status);
        },
        getProjectByProjectCode:(state)=>(project_code)=>{
            return state.projects.find((project)=>project.project_code === project_code)
        }
    },
    actions: {
        
        getAllProjects({ commit, dispatch }) {
            return new Promise((resolve, reject) => {
                projectsApi.fetchProjects().then((result) => {
                    commit('storeAllProjects', result.data.projects)
                    dispatch('members/getMembers',{},{root:true})
                    resolve(result.data.projects)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                });
            })
        },
        getProject({ commit, dispatch }, project_code) {
            return new Promise((resolve, reject) => {
                projectsApi.fetchProject(project_code).then((result) => {
                    commit('saveProject', result.data.project)
                    resolve(result.data.project)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                });
            })
        },
        renameTask({ commit, dispatch }, payload) {
            commit('renameTask',payload);
            return new Promise((resolve, reject) => {
                var ans = tasksApi.renameTask(payload.task_code, payload.task).then((result) => {
                    resolve(result.data);
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                })
            })
        },
        // TODO remve the tasks data from the back end 
        updateTask({commit,dispatch,state},data){
            var original = state.projects;
            console.log('the original is ', original);   
            if(!data.destination.value[0].assigned_to.includes(data.user_id)){
                dispatch('errorAlert', ("only assigned member can move task"), { root: true })
            }  
            else if(data.destination.value[0]){

                // first update the front end then do the task
                commit('updateTask',data)
                commit('updateProgress',data.project_code)

                return new Promise((resolve,reject)=>{
                    tasksApi.updateTask(data.destination.value[0].task_code,data.destination.status).then((result) => {
                       
                    }).catch((err) => {
                        if (err.response.status == 401) {
                            dispatch('auth/logoutUser', err.response.data, { root: true })
                        }
                        reject(err.response.data)
                    });
                })
            }
        },
        deleteTask({ commit, dispatch }, data) {
            commit('deleteTask', data)
            commit('updateProgress',data.project_code)
            return new Promise((resolve, reject) => {
                var ans = tasksApi.deleteTask(data.task_code).then((result) => {
                    resolve(result.data)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                })
            })
        },
        addTask({ commit, dispatch }, data) {
            
            return new Promise((resolve, reject) => {
                    tasksApi.addTask(data.project_code, data.task).then((result) => {
                    commit('addTask', {'task':result.data.task,'project_code':data.project_code})
                    commit('updateProgress',data.project_code)
                    resolve(result.data)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                })
            })
        },

        assignTask({ commit, dispatch }, {task_code,members,project_code}) {

            commit('assignTask',{task_code,members,project_code})
            return new Promise((resolve, reject) => {
                var ans = tasksApi.assignTaskToMembers(task_code, members).then((result) => {
                    resolve(result.data)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                })
            })
        },

        createNewProject({ commit, dispatch }, data) {
            return new Promise((resolve, reject) => {
                projectsApi.createNewProject(data).then((result) => {
                    commit('addProject', result.data.project)
                    resolve(result.data)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                })
            })
        },
        deleteProject({ commit, dispatch }, project_code) {
            commit('deleteProject', project_code)
            return new Promise((resolve, reject) => {
                projectsApi.deleteProject(project_code).then((result) => {
                    resolve(result.data)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                })
            })
        },
        updateProjectMembers({commit,rootGetters},data){
            var allMembers = rootGetters['members/getMembers'];
            commit('updateProjectMembers',{'selectedMembers':data.team_members,'allMembers':allMembers,'project_code':data.project_code})
        },
        updateProject({ commit, dispatch }, data) {
            return new Promise((resolve, reject) => {
                projectsApi.updateProject(data).then((result) => {
                    resolve(result.data)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                })
            })
        },
    },
    mutations: {
        resetToPrevios(state, projectData) {
            state.projects = projectData
        },
        storeAllProjects(state, projectData) {
            state.projects = projectData
        },
        saveProject(state, project) {
            state.project = project
        },
        /**
         * 
         * 
         * @param { the state is the input} state 
         * @param {data from the complete task parameter which contain data.task_code and data.completed} data 
         * 
         * the data.completed is change to reverse of previos in terms of string 
         */
         updateTask(state, data) {
            console.log('the data is  and updated',data.destination.value)
            var i = state.projects.findIndex((project)=>project.project_code === data.destination.value[0].project_code)
            var index = state.projects[i].tasks.findIndex((task)=>task.task_code === data.destination.value[0].task_code)
            state.projects[i].tasks[index].status = data.destination.status

        },
        /**
         * this update progress doesn't take any parameter
         */
        updateProgress(state,project_code) {
            console.log('got here with project code ',project_code)
            var total = 0;
            let index = state.projects.findIndex((project)=>project.project_code === project_code)
            let len = state.projects[index].tasks.length    
            for (let i = 0; i < len; i++) {
                if (state.projects[index].tasks[i].status === 2) {
                    total++;
                }
            }
            var percentile = 0

            if(total==0){
                percentile = 0;
            }else{
                percentile = total*100/len
            }

            console.log('the percentiole is ',percentile,' ', total)
            state.projects[index].progress = percentile.toFixed(2)
        },
        deleteTask(state, data) {
            console.log("the data to be deleted is",data)

            var project_index = state.projects.findIndex((project)=>project.project_code === data.project_code);

            console.log("the data to be deleted is ",project_index)
            state.projects[project_index].tasks = state.projects[project_index].tasks.filter((task)=>task.task_code !== data.task_code)

        },
        addTask(state, data) {
            for(let i=0; i<state.projects.length; i++ ){
                if(state.projects[i].project_code === data.project_code){
                    state.projects[i].tasks.push(data.task)
                    break;
                }
            }
        },
        addProject(state, project) {
            state.projects.push(project)
        },
        deleteProject(state,project_code){
            state.projects = state.projects.filter((project)=>project.project_code!==project_code)
        },
        updateProjectMembers(state,members){
            let selected = members.selectedMembers;
            let all = members.allMembers
            let project_code = members.project_code
            let index = state.projects.findIndex((project)=>project.project_code === project_code)
            state.projects[index].members = members.selectedMembers;
            var finalSelect = []
            all.forEach(element => {
                if(selected.includes(element.user_id)){
                    finalSelect.push(element)
                }
            });
            state.projects[index].team_members = finalSelect
        },
        assignTask(state,{task_code,members,project_code}){
            var project_index = state.projects.findIndex((project)=>project.project_code === project_code);
            var task_index = state.projects[project_index].tasks.findIndex((task)=>task.task_code === task_code);
            state.projects[project_index].tasks[task_index].assigned_to = members;
        },
        renameTask(state,{task,task_code,project_code}){
            var project_index = state.projects.findIndex((project)=>project.project_code === project_code);
            var task_index = state.projects[project_index].tasks.findIndex((task)=>task.task_code === task_code); 
            state.projects[project_index].tasks[task_index].task = task;

        }
    },
};

/**
 * TODO: update every information there is
 */