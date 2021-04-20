<template>
  <Loading v-show="loading" />
  <div v-show="!loading">
    <Header />
    <div class="container">
      <div class="status">
        <h3>{{ project.project_title }}</h3>
        <div class="links">
          <a :href="project.github" class="card-link"
            ><i title="Github link" class="fab fa-github"></i
          ></a>
          <a :href="project.docs" class="card-link"
            ><i title="Google Docs link" class="far fa-file-alt"></i
          ></a>

          <router-link
            class="card-link"
            :to="{
              name: 'UpdateProject',
              params: { projectCode: project_code },
            }"
          >
            <i
              v-if="project.members.includes(user_info.user_id)"
              title="Edit Project"
              class="far fa-edit"
            ></i>
          </router-link>
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
            class="progress-bar"
            role="progressbar"
            :style="{ width: new String(project.progress + '%') }"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <br />

      <div class="members">
        <h5 class="member_class">Members</h5>
        <ul v-show="!showAddMember">
          <li
            :key="member.user_id"
            v-for="member in project.team_members"
            style="margin-left: 10px"
          >
            <router-link
              :to="{ name: 'Profile', params: { user_code: member.user_id } }"
            >
              <ProfilePicture
                imgWeight="45px"
                fontSize="20px"
                :name="member.username[0]"
                :srcText="member['profile_picture']"
              />
            </router-link>
          </li>
        </ul>
      </div>

      <AddMember
        v-if="project.members.includes(user_info.user_id)"
        style="float: right"
        @toggle-add="toggleAddMember"
        :text="showAddMember ? 'Close' : 'Add Members'"
        :bgColor="showAddMember ? '#B6212D ' : '#177F75'"
        color="white"
        border="none"
      />
      <div class="text-center" v-show="showAddMember">
        <MultiSelect
          ref="selected_members"
          :memberIds="project.members"
          :allMembers="allMembers"
          style="margin-top: 70px"
        />
        <button @click="updateMembers()" style="margin-top: 10px">
          Update Members
        </button>
      </div>

      <br /><br /><br />
      <h5>Description</h5>
      <p class="desc">{{ project.description }}</p>

      <h5>Tasks</h5>
      <Add
        v-if="project.members.includes(user_info.user_id)"
        @toggle-add="toggleAdd"
        :text="showAddTask ? 'X Close' : '+ Add New Task'"
        :border="showAddTask ? '3px dashed #B6212D' : '3px dashed #177F75'"
      />
      <div v-show="showAddTask">
        <AddTask
          @taskAdded="showAddTask = false"
          :project_code="project_code"
        />
      </div>

      <Task :key="task.task_code" v-for="task in project.tasks" :task="task" />
    </div>
  </div>
  <svg
    v-show="!loading"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#a97c50"
      fill-opacity="1"
      d="M0,224L34.3,213.3C68.6,203,137,181,206,170.7C274.3,160,343,160,411,181.3C480,203,549,245,617,229.3C685.7,213,754,139,823,138.7C891.4,139,960,213,1029,229.3C1097.1,245,1166,203,1234,160C1302.9,117,1371,75,1406,53.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
    ></path>
  </svg>
</template>

<script>
import Header from "@/components/Header.vue";
import Task from "@/components/Task.vue";
import Add from "@/components/Add.vue";
import AddTask from "@/components/AddTask.vue";
import MultiSelect from "@/components/MultiSelect.vue";
import ProfilePicture from "@/components/ProfilePicture.vue";
import AddMember from "@/components/AddMember.vue";
import Loading from "@/components/Loading.vue";

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
    Loading,
  },
  data() {
    return {
      showAddMember: false,
      showAddTask: false,
      project_code: this.$router.currentRoute._value.params.projectCode,
      loading: true,
    };
  },
  methods: {
    toggleAdd() {
      this.showAddTask = !this.showAddTask;
    },
    toggleAddMember() {
      this.showAddMember = !this.showAddMember;
      if (!this.showAddMember) {
        this.$refs.selected_members.value = this.project.members;
      }
    },
    ...mapActions({
      fetchProject: "projects/getProject",
      updatemembers: "members/updateProjectMembers",
      updateProjectMembers: "projects/updateProjectMembers",
    }),
    updateMembers() {
      this.showAddMember = false;
      var data = {
        project_code: this.project_code,
        team_members: Object.values(this.$refs.selected_members.value),
      };
      this.updatemembers(data)
        .then((result) => {
          this.updateProjectMembers(data);
        })
        .catch((err) => {});
    },
  },
  created() {
    this.fetchProject(this.project_code)
      .then((result) => {
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    ...mapGetters({
      project: "projects/getProject",
      allMembers: "members/getMembers",
      user_info: "user/getUserInformation"
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
.card-link {
  margin-left: 20px;
  color: #a97c50;
}
.card-link:hover {
  color: #8b5e3b;
}
p {
  font-size: 18px;
}
.desc {
  margin: 55px 0 0 10px;
  font-weight: 300;
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
.progress-bar {
  background-color: #8b5e3b;
}
li {
  float: left;
  list-style-type: none;
}
button {
  padding: 10px 45px;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  color: white;
  margin: 5px 0 7px 0;
  background-color: #177f75;
  opacity: 0.8;
  font-weight: 600;
  transition: 0.5s;
}
button:hover {
  opacity: 1;
}
.far,
.fab {
  float: none;
  font-size: 30px;
  margin: 0;
}
</style>
