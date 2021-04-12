<template>

    <Header/>
  <div>
    <div></div>
    <div class="container">
      <Add
        @toggle-add="toggleAdd"
        :text="showAddProject ? 'X Close' : '+ Add New Project'"
        :border="showAddProject ? '3px dashed red' : '3px dashed green'"
        v-show="division==user_info.Division && user_info.Role === 2"
      />
      <div v-show="showAddProject">
        <AddProject @projectAdded="toggleShowAddProject"/>
      </div>

      <div
        :key="project.project_code"
        v-for="project in projects"
        class="Projects"
      >
          <router-link :to="{name:'Tasks', params:{'projectCode':project.project_code}}">
            <Project :project="project" />
          </router-link>
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
    Project,
    Add,
    AddProject,
    Header
  },
  props:{
    division:{
      type:String,
      required:true
    }
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
      console.log('got here')
      this.showAddProject = false;
    },
    ...mapActions({
      fetchProjects: "projects/getAllProjects",
    }),
  },
  computed: {
    ...mapGetters({
      user_info:'user/getUserInformation'
    }),

    projects(){
      return this.$store.getters['projects/divisionProjectGetter'](this.division)
    }
  },
  created() {
    console.log(this.$route.params.division)
  },
};
</script>
