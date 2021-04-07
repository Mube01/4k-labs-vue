import projectsApi from '../../api/projectsApi'
import tasksApi from '../../api/tasksApi'

export default {
    namespaced: true,

    state:{
        projects:"",
        project:"",
        members:""
    },
    getters:{
        listOfProjects(state){
            return state.projects
        },
        getProject(state){
            var project_copy = state.project
            for(let i = 0 ; i<project_copy.team_members.length; i++){
                project_copy.team_members[i]['value'] = project_copy.team_members[i]['user_id']
            }
            return project_copy
        },
        listOfProjectsByUserId:(state)=>(user_id)=>{
            return state.projects.filter((project)=>project.members.includes(user_id))
        },
        getMembers(state){
            var copy_members = state.members
            for(let i = 0 ; i<copy_members.length; i++){
                copy_members[i]['value'] = copy_members[i]['user_id']
            }
            return copy_members
        }
    },
    actions:{
        getMembers({commit,dispatch}){
            return new Promise((resolve,reject)=>{
                projectsApi.getMembers().then((result) => {
                    console.log(result.data.members)
                    commit('storeMembers',result.data.members)
                }).catch((err) => {
                    if(err.response.status == 401){
                        dispatch('auth/logoutUser',err.response.data,{root:true})
                    }
                    reject(err.response.data)
                });
            })
        },
        getAllProjects({commit,dispatch}){
            return new Promise((resolve,reject)=>{
                projectsApi.fetchProjects().then((result) => {
                    commit('storeAllProjects',result.data.projects)
                    dispatch('getMembers')
                    resolve()
                }).catch((err) => {
                    if(err.response.status == 401){
                        dispatch('auth/logoutUser',err.response.data,{root:true})
                    }
                    reject(err.response.data)
                });
            })
        },
        getProject({commit,dispatch},project_code){
            return new Promise((resolve,reject)=>{
                projectsApi.fetchProject(project_code).then((result)=>{
                    commit('saveProject',result.data.project)
                    resolve(result.data.project)
                }).catch((err) => {
                    if(err.response.status == 401){
                        dispatch('auth/logoutUser',err.response.data,{root:true})
                    }
                    reject(err.response.data)
                });
            })
        },
        renameTask({commit,dispatch},payload){
            return new Promise((resolve,reject)=>{
                var ans =  tasksApi.renameTask(payload.task_code,payload.task).then((result)=>{
                    resolve (result.data)
                }).catch((err)=>{
                    if(err.response.status == 401){
                        dispatch('auth/logoutUser',err.response.data,{root:true})
                    }
                    reject(err.response.data)
                })
            })
        },
        completeTask({commit,dispatch},data){
            return new Promise((resolve,reject)=>{
                var ans =  tasksApi.completeTask(data.task_code).then((result)=>{
                    commit('completeTask',data)
                    commit('updateProgress')
                    resolve (result.data)
                }).catch((err)=>{
                    if(err.response.status == 401){
                        dispatch('auth/logoutUser',err.response.data,{root:true})
                    }
                    reject(err.response.data)
                })
            })
        },
        deleteTask({commit,dispatch},task_code){
            return new Promise((resolve,reject)=>{
                var ans =  tasksApi.deleteTask(task_code).then((result)=>{
                    commit('deleteTask',task_code)
                    commit('updateProgress')
                    resolve (result.data)
                }).catch((err)=>{
                    if(err.response.status == 401){
                        dispatch('auth/logoutUser',err.response.data,{root:true})
                    }
                    reject(err.response.data)
                })
            })
        },
        addTask({commit,dispatch},data){
            return new Promise((resolve,reject)=>{
                var ans =  tasksApi.addTask(data.project_code,data.task).then((result)=>{
                    commit('addTask',result.data.task)
                    commit('updateProgress')
                    resolve (result.data)
                }).catch((err)=>{
                    if(err.response.status == 401){
                        dispatch('auth/logoutUser',err.response.data,{root:true})
                    }
                    reject(err.response.data)
                })
            })
        },
        createNewProject({commit,dispatch},data){
            return new Promise((resolve,reject)=>{
                console.log(data)
                projectsApi.createNewProject(data).then((result)=>{
                    commit('addProject',result.data.project)
                    resolve (result.data)
                }).catch((err)=>{
                    if(err.response.status == 401){
                        dispatch('auth/logoutUser',err.response.data,{root:true})
                    }
                    reject(err.response.data)
                })
            })
        },
        updateProjectMembers({commit,dispatch},data){
            console.log(data)
        }
    },
    mutations:{
        storeAllProjects(state,projectData){
            state.projects = projectData
        },
        saveProject(state,project){
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
         completeTask(state,data){
            
            console.log('update_task')

            let len = state.project.tasks.length
            data.completed = (data.completed=='1')?'0':'1'
            for (var i=0;i<len; i++){
                if(state.project.tasks[i].task_code == data.task_code){
                    state.project.tasks[i].completed = data.completed
                }
            }
        },
        /**
         * this update progress doesn't take any parameter
         */
        updateProgress(state){
            
            var total = 0
            let len = state.project.tasks.length

            for (let i=0;i<len; i++){
                if(state.project.tasks[i].completed == '1'){
                    total++;
                }
            }

            var percentile = (total*100/len).toFixed(2)
            state.project.progress = percentile
            
            // change the percentile from the parent component
            var code = state.project.project_code
            for (let i=0; i<state.projects.length; i++){
                if(state.projects[i].project_code == code){
                    state.projects[i].progress = percentile
                }
            }

        },
        deleteTask(state,task_code){
            var filteredTasks = []
            state.project.tasks.forEach(element => {
                if(element.task_code !== task_code){
                    filteredTasks.push(element)
                }
            });
            state.project.tasks = filteredTasks
        },
        addTask(state,task){
            state.project.tasks.push(task)
        },
        addProject(state,project){
            state.projects.push(project)
        },
        storeMembers(state,members){
            state.members = members
        }
    }
  };

  /**
   * TODO: update every information there is
   */