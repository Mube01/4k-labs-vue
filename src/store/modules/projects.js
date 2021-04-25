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
            return new Promise((resolve, reject) => {
                var ans = tasksApi.renameTask(payload.task_code, payload.task).then((result) => {
                    resolve(result.data)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                })
            })
        },
        // TODO remve the tasks data from the back end 
        updateTask({commit,dispatch},data){
            console.log('the data is ',data.destination)              
            if(data.destination.value[0]){
                return new Promise((resolve,reject)=>{
                    tasksApi.updateTask(data.destination.value[0].task_code,data.destination.status).then((result) => {
                        commit('updateTask',data)
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
            return new Promise((resolve, reject) => {
                var ans = tasksApi.deleteTask(data.task_code).then((result) => {
                    commit('deleteTask', data)
                    commit('updateProgress')
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
                var ans = tasksApi.addTask(data.project_code, data.task).then((result) => {
                    commit('addTask', {'task':result.data.task,'project_code':data.project_code})
                    commit('updateProgress')
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
            return new Promise((resolve, reject) => {
                projectsApi.deleteProject(project_code).then((result) => {
                    commit('deleteProject', project_code)
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
            commit('updateProjectMembers',{'selectedMembers':data.team_members,'allMembers':allMembers})
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
            // var copyTasks = state.project.tasks
            // data.completed = (data.completed == '1') ? '0' : '1'
            // console.log('the reversed is ',data.completed)
            // for (var i = 0; i < copyTasks.length; i++) {
            //     if(copyTasks[i].task_code == data.task_code){

            //         console.log('the copy is ',copyTasks[i].task_code,' ',data.task_code)
            //         copyTasks[i].completed = data.completed
            //     }
            // }
            // console.log(copyTasks)
            // state.project.tasks = ['abel','abebe'];
        },
        /**
         * this update progress doesn't take any parameter
         */
        updateProgress(state) {

            var total = 0
            let len = state.project.tasks.length

            for (let i = 0; i < len; i++) {
                if (state.project.tasks[i].completed == '1') {
                    total++;
                }
            }
            var percentile = 0

            console.log('the total is ',total);

            if(total==0){
                percentile = 0;
            }else{
                percentile = total*100/len
            }

            console.log('the percentiole is ',percentile,' ', total)
            state.project.progress = percentile.toFixed(2)

            // change the percentile from the parent component
            var code = state.project.project_code
            for (let i = 0; i < state.projects.length; i++) {
                if (state.projects[i].project_code == code) {
                    state.projects[i].progress = percentile
                }
            }

        },
        deleteTask(state, data) {
            var filteredTasks = []
            state.project.tasks.forEach(element => {
                if (element.task_code !== data.task_code) {
                    filteredTasks.push(element)
                }
            });
            console.log('the filted task is ',filteredTasks)
            state.project.tasks = filteredTasks


            for(let i=0; i<state.projects.length; i++ ){
                if(state.projects[i].project_code === data.project_code){
                    state.projects[i].tasks = state.projects[i].tasks.filter((task)=>task.task_code !== data.task_code)
                }
            }

        },
        addTask(state, data) {
            for(let i=0; i<state.projects.length; i++ ){
                if(state.projects[i].project_code === data.project_code){
                    state.projects[i].tasks.push(data.task)
                    break;
                }
            }
            state.project.tasks.push(data.task)
        },
        addProject(state, project) {
            state.projects.push(project)
        },
        deleteProject(state,project_code){
            state.projects = state.projects.filter((project)=>project.project_code!==project_code)
        },
        updateProjectMembers(state,members){
            var selected = members.selectedMembers;
            var all = members.allMembers
            state.project.members = members.selectedMembers;
            var finalSelect = []
            all.forEach(element => {
                if(selected.includes(element.user_id)){
                    finalSelect.push(element)
                }
            });
            state.project.team_members = finalSelect
        },
    }
};

/**
 * TODO: update every information there is
 */