<template>
  <Header />
  <div class="container">
    <Add
      @toggle-add="toggleAdd"
      :text="showAddProject ? 'X Close' : '+ Add New Project'"
      :border="showAddProject ? '3px dashed #B6212D' : '3px dashed #B7C68B'"
      v-show="
        division == user_info.Division &&
        (user_info.Role === '2' || user_info.Role === '4')
      "
    />
    <div v-show="showAddProject">
      <AddProject @projectAdded="toggleShowAddProject" />
    </div>

    <div class="row">
      <div :key="project.project_code" v-for="project in projects">
        <router-link
          :to="{ name: 'Tasks', params: { projectCode: project.project_code } }"
        >
          <Project :project="project" />
        </router-link>
      </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#a97c50"
      fill-opacity="1"
      d="M0,224L34.3,213.3C68.6,203,137,181,206,170.7C274.3,160,343,160,411,181.3C480,203,549,245,617,229.3C685.7,213,754,139,823,138.7C891.4,139,960,213,1029,229.3C1097.1,245,1166,203,1234,160C1302.9,117,1371,75,1406,53.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
    ></path>
  </svg>
</template>

<script>
import Header from "@/components/Header.vue";
import Project from "@/components/Project.vue";
import Add from "@/components/Add.vue";
import AddProject from "@/components/AddProject.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Projects",
  components: {
    Project,
    Add,
    AddProject,
    Header,
  },
  props: {
    division: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showAddProject: false,
    };
  },
  methods: {
    toggleAdd() {
      this.showAddProject = !this.showAddProject;
    },
    toggleShowAddProject() {
      console.log("got here");
      this.showAddProject = false;
    },
    ...mapActions({
      fetchProjects: "projects/getAllProjects",
    }),
  },
  computed: {
    ...mapGetters({
      user_info: "user/getUserInformation",
    }),

    projects() {
      return this.$store.getters["projects/divisionProjectGetter"](
        this.division
      );
    },
  },
};
</script>
