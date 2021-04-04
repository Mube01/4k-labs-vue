<template>
  <Header />
  <div class="container">
    <div class="status">
      <h3>{{project.project_title}}</h3>
      <p>Progress: {{project.progress || '0'}}%</p>
    </div>
    <Add
      @toggle-add="toggleAdd"
      :text="showAddTask ? 'X Close' : '+ Add New Task'"
      :border="showAddTask ? '3px dashed red' : '3px dashed green'"
    />
    <div v-show="showAddTask">
      <AddTask :project_code = "project_code" />
    </div>
  
    <div :key="task.task_code" v-for="task in project.tasks" class="tasks">
        <Task :task="task" />
    </div>

  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Task from "@/components/Task.vue";
import Add from "@/components/Add.vue";
import AddTask from "@/components/AddTask.vue";

import {mapGetters,mapActions} from 'vuex'

export default {
  name: "Tasks",
  components: {
    Header,
    Task,
    Add,
    AddTask,
  },
  data() {
    return {
      showAddTask: false,
      project_code: this.$router.currentRoute._value.params.projectCode,
    };
  },
  methods: {
    toggleAdd() {
      this.showAddTask = !this.showAddTask;
    },
    ...mapActions({
      'fetchProject':'projects/getProject'
    })
  },
  created(){
    this.fetchProject(this.project_code).then((result) => {
      console.log(result)
    })
  },
  computed:{
    ...mapGetters({
      'project':'projects/getProject'
    })
  }
};
</script>

<style scoped>
.status {
  margin: 20px 0px 0px 0px;
}

h3 {
  float: left;
  font-weight: 700;
  font-size: 25px;
}
p {
  float: right;
  font-size: 20px;
}
</style>