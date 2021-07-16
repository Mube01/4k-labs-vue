<template>
  <Loading v-show="loading" />
  <div v-show="!loading">
    <Header />
    <div class="container">
      <div class="status">
        <h3>{{ project.project_title }}</h3>
        <div class="links">
          <a target="_blank" :href="project.github || '#'" class="card-link"
            ><i title="Github link" class="fab fa-github"></i
          ></a>
          <a target="_blank" :href="project.docs || '#'" class="card-link"
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
          <p>Specialization:</p>
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
            style="margin-left: 10px; margin-bottom:5px"
          >
            <router-link
              :to="{
                name: 'Profile',
                params: { user_code: member.user_id },
              }"
            >
              <ProfilePicture
                imgWeight="45px"
                fontSize="20px"
                :name="member.username[0]"
                top="6px"
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

      <h5>Description</h5>
      <p class="desc">{{ project.description }}</p>
      <h5>Deadline</h5>
      <p class="desc">{{ project.deadline }}</p>
      <h5>Tasks</h5>
      <br />
      <br />
      <Activities :project_code="project.project_code" />
    </div>
  </div>
</template>

<script>
import Activities from "@/components/Activities.vue";
import Header from "@/components/Header.vue";
import MultiSelect from "@/components/MultiSelect.vue";
import ProfilePicture from "@/components/ProfilePicture.vue";
import AddMember from "@/components/AddMember.vue";
import Loading from "@/components/Loading.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Tasks",
  components: {
    Header,
    MultiSelect,
    ProfilePicture,
    AddMember,
    Loading,
    Activities,
  },
  data() {
    return {
      showAddMember: false,
      showAddTask: false,
      project_code: this.$route.params.projectCode,
      loading: false,
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
      errorAlert: "errorAlert",
      successAlert: "successAlert",
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
          this.successAlert(result.msg);
        })
        .catch((err) => {
          this.errorAlert(err.message);
        });
    },
  },
  computed: {
    project() {
      return this.$store.getters["projects/getProjectByProjectCode"](
        this.project_code
      );
    },
    ...mapGetters({
      allMembers: "members/getMembers",
      user_info: "user/getUserInformation",
    }),
  },
  mounted(){
    this.fetchProject(this.project_code).then((result) => {
    }).catch((err) => {
    });
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
  clear: both;
  font-weight: 300;
  margin: 15px 0 0 10px;
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
  font-size: 29px;
  margin: 0;
}
@media screen and (max-width: 720px) {
  .links,
  h3 {
    clear: both;
  }
  .links {
    float: left;
    margin: 5px 0 15px -14px;
  }
}
</style>
