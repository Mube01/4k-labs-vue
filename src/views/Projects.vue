<template>
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
    <Project />
    <Project />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Project from "@/components/Project.vue";
import Add from "@/components/Add.vue";
import AddProject from "@/components/AddProject.vue";

export default {
  name: "Home",
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
  },
};
</script>