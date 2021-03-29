<template>
  <Header />
  <div class="container">
    <div class="status">
      <h3>Project title</h3>
      <p>Progress: 35%</p>
    </div>
    <Add
      @toggle-add="toggleAdd"
      :text="showAddTask ? 'X Close' : '+ Add New Task'"
      :border="showAddTask ? '3px dashed red' : '3px dashed green'"
    />
    <div v-show="showAddTask">
      <AddTask />
    </div>
    <Task />
    <Task />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Task from "@/components/Task.vue";
import Add from "@/components/Add.vue";
import AddTask from "@/components/AddTask.vue";

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
    };
  },
  methods: {
    toggleAdd() {
      this.showAddTask = !this.showAddTask;
    },
  },
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