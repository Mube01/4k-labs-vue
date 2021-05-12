import projectsApi from '../../api/projectsApi'



export default {
    namespaced: true,
    state:{
      projects:"",
      members:"",
      events:"",
    },
    getters:{
      getProjects:(state)=>state.projects,
      getMembers:(state)=>state.members,
      getEvents:(state)=>state.events,
      getProjectsByUserId: (state) => (user_id) => {
        return state.projects.filter((project)=>{
            return project.members.includes(user_id)
        })
      },
      getUserInformation:(state)=>(user_id)=>{
        return state.members.filter((member)=>member.user_id === user_id)
      }
    },
    actions:{
      getAllInfo({ commit }) {
          return new Promise((resolve, reject) => {
              projectsApi.fetchProjectsStatic().then((result) => {
                  commit('storeInfo',result.data)
                  resolve(result.data);
              }).catch((err) => {
                  reject(err.response.data)
              });
          })
      },

    },
    mutations:{
      storeInfo(state,data){
        state.members = data.members;
        state.projects = data.projects;
        state.events = data.events;
      }
    }
  };