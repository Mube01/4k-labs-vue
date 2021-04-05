<template>
  <div>
    <Header />
    <div class="container">
      <div class="status">
        <h3>{{ project.project_title }}</h3>
        <div class="links">
          <a href="#" class="card-link">Github</a>
          <a href="#" class="card-link">Docs</a>
        </div>
        <div class="left">
          <p>Division:</p>
          <p>Progress:</p>
        </div>
        <div class="right">
          <p>{{project.Division}}</p>
          <p>{{ project.progress || "0" }}%</p>
        </div>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            :style="{ width: new String(project.progress + '%') }"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <br />
      <h5>Members</h5>
      <br />
      <h5>Tasks</h5>
      <Add
        @toggle-add="toggleAdd"
        :text="showAddTask ? 'X Close' : '+ Add New Task'"
        :border="showAddTask ? '3px dashed red' : '3px dashed green'"
      />
      <div v-show="showAddTask">
        <AddTask :project_code="project_code" />
      </div>

      <Task :key="task.task_code" v-for="task in project.tasks" :task="task" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Task from "@/components/Task.vue";
import Add from "@/components/Add.vue";
import AddTask from "@/components/AddTask.vue";

import { mapGetters, mapActions } from "vuex";

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
      fetchProject: "projects/getProject",
    }),
  },
  created() {
    this.fetchProject(this.project_code).then((result) => {
      console.log(result);
    });
  },
  computed: {
    ...mapGetters({
      project: "projects/getProject",
    }),
  },
};
</script>

<style scoped>
.status {
  margin: 20px 0px 0px 0px;
  width: 100%;
}
h3 {
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 15px;
  float: left;
}
h5 {
  clear: both;
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 15px;
}
p {
  font-size: 18px;
}
.links {
  float: right;
}
.left {
  clear: both;
  float: left;
}
.right {
  float: right;
}
.progress {
  height: 25px;
  border: 1px solid #e6e6e6;
  clear: both;
}
</style>