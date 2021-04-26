<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 card">
        <h3>To Do</h3>
        <draggable
          class="list-group"
          v-model="todos"
          group="people"
          itemKey="id"
        >
          <template #item="{ element }">
            <div class="list-group-item">
              {{ element.task }}

              <div class="more">
                <div class="dropdown">
                  <i
                    title="More options"
                    class="fa fa-ellipsis-v"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="false"
                    aria-expanded="false"
                    aria-hidden="false"
                  ></i>

                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" @click="todoEdit = true">Rename</a>
                    <a
                      class="dropdown-item"
                      @click="delteTask(element.task_code)"
                      >Delete</a
                    >
                    <a class="dropdown-item">Assign Member</a>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template #footer>
            <div class="btn-group list-group-item" role="group">
              <Add
                @toggle-add="toggleAdd"
                :text="showAddTask ? 'X Close' : '+ Add New Project'"
                :border="
                  showAddTask ? '3px dashed #B6212D' : '3px dashed #177F75'
                "
              />
              <AddTask
                v-show="showAddTask"
                @taskAdded="showAddTask = false"
                :project_code="project_code"
              />
            </div>
          </template>
        </draggable>
      </div>

      <div class="col-md-4 card">
        <h3>Doing</h3>
        <draggable
          class="list-group"
          v-model="inProgress"
          group="people"
          itemKey="id"
        >
          <template #item="{ element }">
            <div class="list-group-item">
              {{ element.task }}

              <div class="more">
                <div class="dropdown">
                  <i
                    title="More options"
                    class="fa fa-ellipsis-v"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="false"
                    aria-expanded="false"
                    aria-hidden="false"
                  ></i>

                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" @click="todoEdit = true">Rename</a>
                    <a
                      class="dropdown-item"
                      @click="delteTask(element.task_code)"
                      >Delete</a
                    >
                    <a class="dropdown-item">Assign Member</a>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </draggable>
      </div>

      <div class="col-md-4 card">
        <h3>Done</h3>
        <draggable
          class="list-group"
          v-model="completed"
          group="people"
          itemKey="id"
        >
          <template #item="{ element }">
            <div class="list-group-item">
              {{ element.task }}
              <div class="more">
                <div class="dropdown">
                  <i
                    title="More options"
                    class="fa fa-ellipsis-v"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="false"
                    aria-expanded="false"
                    aria-hidden="false"
                  ></i>

                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" @click="todoEdit = true">Rename</a>
                    <a
                      class="dropdown-item"
                      @click="delteTask(element.task_code)"
                      >Delete</a
                    >
                    <a class="dropdown-item">Assign Member</a>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import AddTask from "@/components/AddTask.vue";
import Add from "@/components/Add.vue";
import draggable from "vuedraggable";
import { mapActions } from "vuex";
export default {
  name: "Activities",
  props: {
    project_code: {
      type: String,
    },
  },
  components: {
    draggable,
    AddTask,
    Add,
  },
  data() {
    return {
      newtask: "",
      showAddTask: false,
      destination: {
        known: false,
        value: "",
        status: "",
      },
    };
  },
  methods: {
    toggleAdd() {
      this.showAddTask = !this.showAddTask;
    },
    ...mapActions({
      updateTask: "projects/updateTask",
    }),
    rename(data) {
      if (this.task_name_changed) {
        var reqest_payload = {
          task_code: data.task_code,
          task: data.task,
        };

        this.$store
          .dispatch("projects/renameTask", reqest_payload)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    completeTask(task_code, completed) {
      this.$store
        .dispatch("projects/completeTask", { task_code, completed })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delteTask(task_code) {
      this.$store
        .dispatch("projects/deleteTask", {
          task_code: task_code,
          project_code: this.project_code,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  computed: {
    todos: {
      get() {
        return this.$store.getters["projects/getProjectTasks"]({
          project_code: this.project_code,
          status: 0,
        });
        // return this.list1
      },
      set(value) {
        if (this.destination.known === false) {
          let result = value.filter(
            (o1) => !this.todos.some((o2) => o1.task_code === o2.task_code)
          );
          this.destination.known = true;
          this.destination.value = result;
          this.destination.status = 0;
        } else {
          this.updateTask({
            destination: this.destination,
            project_code: this.project_code,
          });
          this.destination.known = false;
        }
      },
    },
    inProgress: {
      get() {
        return this.$store.getters["projects/getProjectTasks"]({
          project_code: this.project_code,
          status: 1,
        });
      },
      set(value) {
        if (this.destination.known === false) {
          let result = value.filter(
            (o1) => !this.inProgress.some((o2) => o1.task_code === o2.task_code)
          );
          this.destination.known = true;
          this.destination.value = result;
          this.destination.status = 1;
        } else {
          this.updateTask({
            destination: this.destination,
            project_code: this.project_code,
          });
          this.destination.known = false;
        }
      },
    },
    completed: {
      get() {
        return this.$store.getters["projects/getProjectTasks"]({
          project_code: this.project_code,
          status: 2,
        });
      },
      set(value) {
        if (this.destination.known === false) {
          let result = value.filter(
            (o1) => !this.completed.some((o2) => o1.task_code === o2.task_code)
          );
          this.destination.known = true;
          this.destination.value = result;
          this.destination.status = 2;
        } else {
          this.updateTask({
            destination: this.destination,
            project_code: this.project_code,
          });
          this.destination.known = false;
        }
      },
    },
  },
};
</script>

<style scoped>
.btn-group {
  padding: -10px;
}
.card {
  background-color: #e8e8e8;
  border-radius: 5px;
  margin: 10px 5px;
}
h3 {
  font-size: 19px;
  font-weight: 400;
  margin: 18px 0 10px 0;
  font-weight: 500;
  color: #333;
}
.more {
  float: right;
}
.list-group {
  border: 0;
  margin-bottom: 10px;
}
.list-group-item {
  padding: 20px;
  font-size: 18px;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
  border-radius: 5px;
  margin: 8px 0;
}
.dropdown-item {
  font-size: 17px;
  font-weight: 500;
}
</style>