<template>
  <div>
    <Header />
    <div class="container">
      <Add
        @toggle-add="toggleAdd"
        :text="showAddProject ? 'X Close' : '+ Add New Project'"
        :border="showAddProject ? '3px dashed red' : '3px dashed green'"
      />
      <div v-show="showAddProject">
        <AddProject />
      </div>

      <div
        :key="project.project_code"
        v-for="project in projects"
        class="Projects"
      >
        <Project :project="project" />
      </div>
    </div>
  </div>
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
    Header,
    Project,
    Add,
    AddProject,
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
    ...mapActions({
      fetchProjects: "projects/getAllProjects",
    }),
  },
  computed: {
    ...mapGetters({
      projects: "projects/listOfProjects",
    }),
  },
  created() {
    this.fetchProjects().then(() => {});
    console.log("succes full fetch");
  },
};
</script>