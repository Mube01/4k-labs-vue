<template>
  <div class="page-container">
    <div class="content-wrap">
      <Loading v-show="loading" />
      <Header v-show="!loading" />
      <div class="container" v-show="!loading">
        <Add
          @toggle-add="toggleAdd"
          :text="showAddProject ? 'X Close' : '+ Add New Project'"
          :border="showAddProject ? '3px dashed #B6212D' : '3px dashed #177F75'"
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
              :to="{
                name: 'Tasks',
                params: { projectCode: project.project_code },
              }"
            >
              <Project :project="project" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Wave />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Project from "@/components/Project.vue";
import Add from "@/components/Add.vue";
import AddProject from "@/components/AddProject.vue";
import Loading from "@/components/Loading.vue";
import Wave from "@/components/Wave.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Projects",
  components: {
    Project,
    Add,
    AddProject,
    Header,
    Loading,
    Wave,
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
      loading: true,
    };
  },
  methods: {
    toggleAdd() {
      this.showAddProject = !this.showAddProject;
    },
    toggleShowAddProject() {
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
  created() {
    this.fetchProjects()
      .then((result) => {
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
}
.content-wrap {
  padding-bottom: 26.5rem;
}
</style>