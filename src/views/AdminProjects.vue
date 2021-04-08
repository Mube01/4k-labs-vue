<template>
  <div>
    <Header />
    <div class="container">
      <router-link to="/admin"><h4>Members</h4></router-link>
      <h4>Projects</h4>
      <GenerateToken style="float: right; margin: 15px 0 20px 0" />
      <div
        :key="project.project_code"
        v-for="project in projects"
        class="Projects"
      >
        <ProjectList :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import GenerateToken from "@/components/GenerateToken.vue";
import ProjectList from "@/components/ProjectList.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AdminProjects",
  components: {
    Header,
    GenerateToken,
    ProjectList,
  },
  methods: {
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

<style scoped>
h4 {
  float: left;
  font-weight: 700;
  margin: 30px 15px 30px 5px;
  letter-spacing: 0.5px;
}
a h4 {
  color: green;
  opacity: 0.7;
}
a h4:hover {
  opacity: 1;
}
</style>