<template>
  <Header />
  <div class="container">
    <h2 class="mt-2">Bots</h2>
    <hr />
    <div class="row">
      <div :key="project.project_code" v-for="project in projects">
        <router-link
          :to="{ name: 'Tasks', params: { projectCode: project.project_code } }"
        >
          <StaticProject :project="project" />
        </router-link>
      </div>
    </div>
    <h2>Devs</h2>
    <hr />
    <div class="row">
      <div :key="project.project_code" v-for="project in projects">
        <router-link
          :to="{ name: 'Tasks', params: { projectCode: project.project_code } }"
        >
          <StaticProject :project="project" />
        </router-link>
      </div>
    </div>
    <h2>Things</h2>
    <hr />
    <div class="row">
      <div :key="project.project_code" v-for="project in projects">
        <router-link
          :to="{ name: 'Tasks', params: { projectCode: project.project_code } }"
        >
          <StaticProject :project="project" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import StaticProject from "@/components/StaticProject.vue";
import Header from "@/components/Header.vue";
import { mapActions } from "vuex";

export default {
  name: "Teams",
  components: {
    StaticProject,
    Header,
  },
  methods: {
    ...mapActions({
      fetchProjects: "projects/getAllProjects",
    }),
  },
  computed: {
    projects() {
      return this.$store.getters["projects/divisionProjectGetter"](
        this.division
      );
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 25px;
  font-weight: 600;
  color: #177f75;
  padding: 5px 0;
}
</style>