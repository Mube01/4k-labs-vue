<template>
<div>
  <SubHeader v-show="!loading" />
  <div class="page-container">
    <div class="content-wrap">
      <Loading v-show="loading" />
    
      <div class="container" v-show="!loading" id="prjct">
        <div class="row">
          <div
            class="col-md-6"
            :key="project.project_code"
            v-for="project in projects"
          >
          <StaticProject :project=project />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import SubHeader from "./SubHeader";
import StaticProject from "./StaticProject";
import Loading from "@/components/Loading.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "AllProjects",
  components: {
    Loading,
    SubHeader,
    StaticProject
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
      projects: "home/getProjects",
    }),
  },
};
</script>

<style scoped>
#prjct{
  margin-top:100px;
}
.page-container {
  position: relative;
  min-height: 100vh;
}
.content-wrap {
  padding-bottom: 26.5rem;
}
</style>