<template>
  <div class="container">
    <div class="card-group">
      <div class="col-md-4 card">
        <h3>To Do</h3>
        <draggable
          class="list-group"
          v-model="todos"
          group="people"
          itemKey="id"
        >
          <template #item="{ element }">
            <div class="list-group-item1">
              <span v-if="!toogleRename[element.task_code]">{{ element.task }}</span>
              <input
                @change="task_name_changed = true"
                type="text"
                v-show="toogleRename[element.task_code]"
                v-model="element.task"
                @keyup.enter="
                  rename(element.task,element.task_code);
                "
              />
              
              <div v-if="isProjectMember" class="more">
                <div class="dropdown">
                  <i
                    title="More options"
                    class="fa fa-ellipsis-v"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-hidden="false"
                  ></i>

                  <ul
                    class="dropdown-menu multi-level"
                    role="menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li
                     v-if="isProjectMember"
                     class="dropdown-item" 
                     @click="showRename(element.task_code)"
                    >
                      Rename
                    </li>
                    <li
                      v-if="isProjectMember"
                      class="dropdown-item"
                      @click="delteTask(element.task_code)"
                    >
                      Delete
                    </li>

                    <li v-if="user_role == 2" class="dropdown-submenu">
                      <a class="dropdown-item" tabindex="-1">Assign Member</a>
                      <ul class="dropdown-menu">
                        <form>
                          <li :key="member.user_id" v-for="member in getMemberInfo" class="dropdown-item">
                            <div class="form-check">
                              <input
                                type="checkbox"
                                :value="member.user_id"
                                :class="element.task_code"
                                :checked="element.assigned_to.includes(member.user_id)"
                              />
                              <label
                                class="form-check-label"
                              >
                              {{member.username}}
                              </label>
                            </div>
                          </li>
                          <li class="dropdown-item">
                            <a @click="assignTask(element.task_code)" class="btn btn-primary">
                              Assign
                            </a>
                          </li>
                        </form>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <p>Assigned to</p>
              <ul>
              <li
                :key="member"
                v-for="member in element.assigned_to"
                style="margin-left: 10px"
              >
                {{getMemberInfo[member].username}}
                <router-link
                  :to="{
                    name: 'Profile',
                    params: { user_code: member },
                  }"
                >
                  <ProfilePicture
                    imgWeight="45px"
                    fontSize="20px"
                    :name="getMemberInfo[member].username[0]"
                    :srcText="getMemberInfo[member]['profile_picture']"
                  />
                </router-link>
              </li>
              </ul>
            </div>
          </template>
           v-model="todos"
          group="people"
          itemKey="id"<template #header>
            <Add
              v-if="isProjectMember"
              style="background-color: white; margin-left: 0px"
              @toggle-add="toggleAdd"
              :text="showAddTask ? 'X Close' : '+ Add New Task'"
              :border="showAddTask ? '2px solid #B6212D' : '2px solid #177F75'"
            />
            <AddTask
              v-show="showAddTask"
              @taskAdded="showAddTask = false"
              :project_code="project_code"
            />
          </template>
        </draggable>
      </div>

      <div class="col-md-4 card">
        <h3>Doing</h3>
        <draggable
          class="list-group"
          v-model="inProgress"
          group="people"
          itemKey="id"
        >
          <template #item="{ element }">
            <div class="list-group-item2">
            <span v-if="!toogleRename[element.task_code]">{{ element.task }}</span>
              <input
                @change="task_name_changed = true"
                type="text"
                v-show="toogleRename[element.task_code]"
                v-model="element.task"
                @keyup.enter="
                  rename(element.task,element.task_code);
                "
              />
              <div v-if="isProjectMember" class="more">
                <div class="dropdown">
                  <i
                    title="More options"
                    class="fa fa-ellipsis-v"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="false"
                    aria-expanded="false"
                    aria-hidden="false"
                  ></i>

                  <ul
                    class="dropdown-menu multi-level"
                    role="menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li
                     v-if="isProjectMember"
                     class="dropdown-item" 
                     @click="showRename(element.task_code)">
                      Rename
                    </li>
                    <li
                      v-if="isProjectMember"
                      class="dropdown-item"
                      @click="delteTask(element.task_code)"
                    >
                      Delete
                    </li>
                    <li v-if="user_role == 2" class="dropdown-submenu">
                      <a class="dropdown-item" tabindex="-1">Assign Member</a>
                      <ul class="dropdown-menu">
                        <form>
                          <li :key="member.user_id" v-for="member in getMemberInfo" class="dropdown-item">
                            <div class="form-check">
                              <input
                                type="checkbox"
                                :value="member.user_id"
                                :class="element.task_code"
                                :checked="element.assigned_to.includes(member.user_id)"
                              />
                              <label
                                class="form-check-label"
                              >
                              {{member.username}}
                              </label>
                            </div>
                          </li>
                          <li class="dropdown-item">
                            <a @click="assignTask(element.task_code)" class="btn btn-primary">
                              Assign
                            </a>
                          </li>
                        </form>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <p>Assigned to</p>
              <ul>
              <li
                :key="member"
                v-for="member in element.assigned_to"
                style="margin-left: 10px"
              >
                {{getMemberInfo[member].username}}
                <router-link
                  :to="{
                    name: 'Profile',
                    params: { user_code: member },
                  }"
                >
                  <ProfilePicture
                    imgWeight="45px"
                    fontSize="20px"
                    :name="getMemberInfo[member].username[0]"
                    :srcText="getMemberInfo[member]['profile_picture']"
                  />
                </router-link>
              </li>
              </ul>
            </div>
          </template>
        </draggable>
      </div>

      <div class="col-md-4 card">
        <h3>Done</h3>
        <draggable
          class="list-group"
          v-model="completed"
          group="people"
          itemKey="id"
        >
          <template #item="{ element }">
            <div class="list-group-item3">
            <span v-if="!toogleRename[element.task_code]">{{ element.task }}</span>
              <input
                @change="task_name_changed = true"
                type="text"
                v-show="toogleRename[element.task_code]"
                v-model="element.task"
                @keyup.enter="
                  rename(element.task,element.task_code);
                "
              />
              <div v-if="isProjectMember" class="more">
                <div class="dropdown">
                  <i
                    title="More options"
                    class="fa fa-ellipsis-v"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="false"
                    aria-expanded="false"
                    aria-hidden="false"
                  ></i>

                  <ul
                    class="dropdown-menu multi-level"
                    role="menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li 
                    v-if="isProjectMember"
                    class="dropdown-item" 
                    @click="showRename(element.task_code)">
                      Rename
                    </li>
                    <li
                      v-if="isProjectMember"
                      class="dropdown-item"
                      @click="delteTask(element.task_code)"
                    >
                      Delete
                    </li>
                  </ul>
                </div>
              </div>
              <p>Assigned to</p>
              <ul>
              <li
                :key="member"
                v-for="member in element.assigned_to"
                style="margin-left: 10px"
              >
                {{getMemberInfo[member].username}}
                <router-link
                  :to="{
                    name: 'Profile',
                    params: { user_code: member },
                  }"
                >
                  <ProfilePicture
                    imgWeight="45px"
                    fontSize="20px"
                    :name="getMemberInfo[member].username[0]"
                    :srcText="getMemberInfo[member]['profile_picture']"
                  />
                </router-link>
              </li>
              </ul>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import AddTask from "@/components/AddTask.vue";
import Add from "@/components/Add.vue";
import draggable from "vuedraggable";
import ProfilePicture from "@/components/ProfilePicture.vue";
import { mapActions,mapGetters } from "vuex";
export default {
  name: "Activities",
  props: {
    project_code: {
      type: String,
    },
  },
  components: {
    draggable,
    AddTask,
    Add,
    ProfilePicture
  },
  data() {
    return {
      newtask: "",
      showAddTask: false,
      destination: {
        known: false,
        value: "",
        status: "",
      },
      toogleRename:{}
    };
  },
  created(){

      var result = {}
      var tasks = this.project.tasks;
      for(let i=0;i<tasks.length;i++){
        result[tasks[i].task_code] = false
      }
      this.toogleRename = result;
      
  },
  methods: {
    showRename (task_code) {
      this.toogleRename[task_code] = true;
    },
    hideRename (task_code) {
      this.toogleRename[task_code] = false;
    },
    assignTask(task_code){
      var elements = document.getElementsByClassName(task_code);
      var members = [];
      for(var i=0; i<elements.length; i++) {
          if(elements[i].checked){
            members.push(elements[i].value);
          }
      }
      this.AssignTask({task_code:task_code,members:members,project_code:this.project_code})
    },
    toggleAdd() {
      this.showAddTask = !this.showAddTask;
    },
    ...mapActions({
      updateTask: "projects/updateTask",
      AssignTask: "projects/assignTask"
    }),
    rename(task,task_code) {

      if(task.length>0){
        var reqest_payload = {
          task_code: task_code,
          task: task,
          project_code:this.project_code
      };
      this.hideRename(task_code);
        this.$store
          .dispatch("projects/renameTask", reqest_payload)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      
    },
    completeTask(task_code, completed) {
      this.$store
        .dispatch("projects/completeTask", { task_code, completed })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delteTask(task_code) {
      this.$store
        .dispatch("projects/deleteTask", {
          task_code: task_code,
          project_code: this.project_code,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  computed: {
    ...mapGetters({
      user_role : 'user/getUserRole'
    }),
    getMemberInfo(){
      var data = {}
      this.project.team_members.forEach(member => {
        data[member.user_id] = member
      });
      return data
    },
    project() {
      return this.$store.getters["projects/getProjectByProjectCode"](
        this.project_code
      );
    },
    user_id(){
      return this.$store.getters["user/getUserId"]
    },
    isProjectMember(){
      return this.project.members.includes(this.user_id);
    },
    todos: {
      get() {
        return this.$store.getters["projects/getProjectTasks"]({
          project_code: this.project_code,
          status: 0,
        });
        // return this.list1
      },
      set(value) {
        if (this.destination.known === false) {
          let result = value.filter(
            (o1) => !this.todos.some((o2) => o1.task_code === o2.task_code)
          );
          this.destination.known = true;
          this.destination.value = result;
          this.destination.status = 0;
        } else {
          this.updateTask({
            destination: this.destination,
            project_code: this.project_code,
            user_id:this.user_id,
          });
          this.destination.known = false;
        }
      },
    },
    inProgress: {
      get() {
        return this.$store.getters["projects/getProjectTasks"]({
          project_code: this.project_code,
          status: 1,
        });
      },
      set(value) {
        if (this.destination.known === false) {
          let result = value.filter(
            (o1) => !this.inProgress.some((o2) => o1.task_code === o2.task_code)
          );
          this.destination.known = true;
          this.destination.value = result;
          this.destination.status = 1;
        } else {
          this.updateTask({
            destination: this.destination,
            project_code: this.project_code,
            user_id:this.user_id,
          });
          this.destination.known = false;
        }
      },
    },
    completed: {
      get() {
        return this.$store.getters["projects/getProjectTasks"]({
          project_code: this.project_code,
          status: 2,
        });
      },
      set(value) {
        if (this.destination.known === false) {
          let result = value.filter(
            (o1) => !this.completed.some((o2) => o1.task_code === o2.task_code)
          );
          this.destination.known = true;
          this.destination.value = result;
          this.destination.status = 2;
        } else {
          this.updateTask({
            destination: this.destination,
            project_code: this.project_code,
            user_id:this.user_id,
          });
          this.destination.known = false;
        }
      },
    },
  },
};
</script>

<style scoped>
.btn-group {
  padding: -10px;
}
.card {
  background: #c9ccd3;
  background-image: linear-gradient(
    -180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background-blend-mode: lighten;
  border-radius: 15px;
  border: 2px solid #e6e6e6;
  margin: 15px 10px;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
}
h3 {
  font-size: 19px;
  font-weight: 400;
  margin: 18px 0 10px 0;
  font-weight: 500;
  color: #333;
}
.more {
  float: right;
}
.list-group {
  border: 0;
  margin-bottom: 10px;
}
.list-group-item1 {
  padding: 20px;
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
  border-radius: 10px;
  margin: 8px 0;
}
.list-group-item2 {
  padding: 20px;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
  border-radius: 10px;
  margin: 8px 0;
}
.list-group-item3 {
  padding: 20px;
  background-image: linear-gradient(
    106.1deg,
    rgba(69, 242, 143, 0.52) 10.2%,
    rgba(14, 228, 175, 0.61) 83.6%
  );
  border-radius: 10px;
  margin: 8px 0;
}
.dropdown-item {
  font-size: 17px;
  font-weight: 500;
}
span {
  font-size: 19px;
}
p {
  font-size: 15px;
  margin: 3px 0 -3px 0;
}
.dropdown-submenu {
  position: relative;
}
.dropdown-submenu > .dropdown-item {
  font-size: 17px;
}
.dropdown-submenu > .dropdown-menu {
  top: 0;
  left: 100%;
  font-size: 15px;
  margin-top: -8px;
  margin-left: -1px;
  -webkit-border-radius: 0 6px 6px 6px;
  -moz-border-radius: 0 6px 6px;
  border-radius: 0 6px 6px 6px;
}

.dropdown-submenu:hover > .dropdown-menu {
  display: block;
}

.dropdown-submenu > a:after {
  display: block;
  content: " ";
  float: right;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px 0 5px 5px;
  border-left-color: #333;
  margin-top: 8px;
  margin-right: -12px;
}

.dropdown-submenu:hover > a:after {
  border-left-color: #fff;
}

.dropdown-submenu.pull-left {
  float: none;
}

.dropdown-submenu.pull-left > .dropdown-menu {
  left: -100%;
  margin-left: 10px;
  -webkit-border-radius: 6px 0 6px 6px;
  -moz-border-radius: 6px 0 6px 6px;
  border-radius: 6px 0 6px 6px;
}
.dropdown-item a,
a.dropdown-item {
  color: #333;
  font-size: 20px;
  font-weight: 400;
}
.btn {
  width: 100%;
}
</style>