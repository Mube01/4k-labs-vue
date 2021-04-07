<template>
  <div>
    <Header />
    <div class="container">
      <div class="status">
        <h3>{{ project.project_title }}</h3>
        <div class="links">
          <a href="#" class="card-link">Github</a>
          <a href="#" class="card-link">Docs</a>
        </div>
        <div class="left">
          <p>Division:</p>
          <p>Progress:</p>
        </div>
        <div class="right">
          <p>{{ project.Division }}</p>
          <p>{{ project.progress || "0" }}%</p>
        </div>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            :style="{ width: new String(project.progress + '%') }"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <br />
<<<<<<< HEAD
      <h5>Members</h5>
=======

      <div class="members">
          <h5 class="member_class">Members</h5>
          <ul  v-show="!showAddMember">
            <li :key="member.user_id" v-for="member in project.team_members">
              <router-link :to="'/profile/' + member.user_id">
                <ProfilePicture
                  imgWeight="45px"
                  fontSize="20px"
                  :name="member.username[0]"
                  :srcText="member['profile picture']"
                />
              </router-link>
            </li>
          </ul>
        </div>

>>>>>>> creat_new_project
      <AddMember
        @toggle-add="toggleAddMember"
        :text="showAddMember ? 'Close' : 'Add Members'"
        :bgColor="showAddMember ? 'red' : 'green'"
        color="white"
        border="none"
      />
      <div v-show="showAddMember">
<<<<<<< HEAD
        <MultiSelect style="margin-top: 70px" />
        <button>Add Members</button>
      </div>

      <div class="members">
        <ul>
          <li
            :key="member.user_id"
            v-for="member in project.project_code.team_members"
          >
            <router-link :to="'/profile/' + member.user_id">
              <ProfilePicture
                imgWeight="45px"
                fontSize="20px"
                :name="member.username[0]"
                :srcText="member['profile picture']"
              />
              {{ member.username }}
            </router-link>
          </li>
        </ul>
      </div>
=======
        <MultiSelect ref="selected_members" :memberIds="project.members" :allMembers="allMembers" style="margin-top: 70px" />
        <button @click="updateMembers()">Update Members</button>
      </div>

      

>>>>>>> creat_new_project
      <br />
      <h5>Tasks</h5>
      <Add
        @toggle-add="toggleAdd"
        :text="showAddTask ? 'X Close' : '+ Add New Task'"
        :border="showAddTask ? '3px dashed red' : '3px dashed green'"
      />
      <div v-show="showAddTask">
        <AddTask :project_code="project_code" />
      </div>

      <Task :key="task.task_code" v-for="task in project.tasks" :task="task" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Task from "@/components/Task.vue";
import Add from "@/components/Add.vue";
import AddTask from "@/components/AddTask.vue";
import MultiSelect from "@/components/MultiSelect.vue";
import ProfilePicture from "@/components/ProfilePicture.vue";
import AddMember from "@/components/AddMember.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Tasks",
  components: {
    Header,
    Task,
    Add,
    AddTask,
    MultiSelect,
    ProfilePicture,
    AddMember,
  },
  data() {
    return {
      showAddMember: false,
      showAddTask: false,
      project_code: this.$router.currentRoute._value.params.projectCode,
    };
  },
  methods: {
    toggleAdd() {
      this.showAddTask = !this.showAddTask;
    },
    toggleAddMember() {
      console.log("click");
      this.showAddMember = !this.showAddMember;
    },
    ...mapActions({
      fetchProject: "projects/getProject"
    }),
    updateMembers(){
      var data = {
        'project_code':this.project_code,
        'team_members':Object.values(this.$refs.selected_members.value),
      }
      console.log(data)
    }
  },
  created() {
    this.fetchProject(this.project_code).then((result) => {
      console.log(result);
    });
  },
  computed: {
    ...mapGetters({
      project: "projects/getProject",
      allMembers: "projects/getMembers",
    }),
  },
};
</script>

<style scoped>
.status {
  margin: 20px 0px 0px 0px;
  width: 100%;
}
h3 {
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 15px;
  float: left;
}
h5 {
  clear: both;
  float: left;
  font-size: 19px;
  font-weight: 600;
  margin: 15px 5px;
}
Button {
  float: right;
}
p {
  font-size: 18px;
}
.links {
  float: right;
}
.left {
  clear: both;
  float: left;
}
.right {
  float: right;
}
.progress {
  height: 25px;
  border: 1px solid #e6e6e6;
  clear: both;
}
li {
  float: left;
<<<<<<< HEAD
=======
  padding: 2px;
>>>>>>> creat_new_project
}
button {
  padding: 10px 45px;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  color: white;
  margin: 5px 0 7px 0;
  background-color: green;
  opacity: 0.7;
  font-weight: 600;
  transition: 0.5s;
}
<<<<<<< HEAD

button:hover {
  opacity: 1;
}
=======
button:hover {
  opacity: 1;
}
.member_class{
  font-size: 17px;
  padding-top: 5px;
  display: inline;
  float: left;
}
>>>>>>> creat_new_project
</style>