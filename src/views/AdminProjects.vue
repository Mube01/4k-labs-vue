<template>
  <div>
    <Header />
    <div class="container">
      <router-link :to="{ name: 'Admin' }"><h4>Members</h4></router-link>
      <h4>Projects</h4>
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
import ProjectList from "@/components/ProjectList.vue";
import { mapGetters, mapActions } from "vuex";
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
}
a h4:hover {
  color: #8b5e3b;
}
.link {
  float: right;
  padding: 25px 0;
}
</style>