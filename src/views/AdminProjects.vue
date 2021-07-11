<template>
      <Header />
      <div class="container">
        <router-link :to="{ name: 'Admin' }"><h4>Members</h4></router-link>
        <h4>Projects</h4>
        <router-link :to="{ name: 'Events' }"><h4>Events</h4></router-link>
        <router-link :to="{ name: 'GenerateToken' }"
          ><h4>Generate Token</h4></router-link
        >
        <div
          :key="project.project_code"
          v-for="project in projects"
          class="Projects"
        >
          <ProjectList :project="project" />
        </div>
      </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ProjectList from "@/components/ProjectList.vue";

import { mapGetters } from "vuex";
export default {
  name: "AdminProjects",
  components: {
    Header,
    ProjectList,
  },
  methods: {},
  computed: {
    ...mapGetters({
      projects: "projects/listOfProjects",
    }),
  },
};
</script>

<style scoped>
h4 {
  float: left;
  font-weight: 700;
  margin: 30px 15px 30px 5px;
  letter-spacing: 0.5px;
}
a h4 {
  color: #a97c50;
  margin-right: 25px;
}
a h4:hover {
  color: #8b5e3b;
}
</style>