<template>
  <div class="page-container">
    <div class="content-wrap">
      <!-- <Loading v-show="loading" /> -->
      <SubHeader />
      <div class="container">
        <div class="row">
          <div
            class="col-md-6"
            :key="project.project_code"
            v-for="project in projects"
          >
            <StaticProject :project="project" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeader from "./SubHeader";
import StaticProject from "./StaticProject";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "StaticDivision",
  components: {
    StaticProject,
    SubHeader,
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
      loading: false,
      projecto: [],
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
  created() {
    this.fetchProjects();
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

<style scoped>
.row {
  margin-top: 150px;
}
.page-container {
  position: relative;
  min-height: 100vh;
}
.content-wrap {
  padding-bottom: 26.5rem;
}
</style>