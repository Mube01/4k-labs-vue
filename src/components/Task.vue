<template>
  <div class="card col-md-12">
 
    <div class="card-body">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          :checked="parseInt(taskdata.completed)"
          @change="
            completeTask(taskdata.task_code, parseInt(taskdata.completed))
          "
        />
        <label
          v-show="!todoEdit"
          class="form-check-label"
          for="flexCheckDefault"
        >
          {{ taskdata.task }}
        </label>
        <input
          @change="task_name_changed = true"
          type="text"
          v-show="todoEdit"
          v-model="taskdata.task"
          v-on:blur="
            todoEdit = false;
            rename(taskdata);
          "
          @keyup.enter="
            todoEdit = false;
            rename(taskdata);
          "
        />
      </div>
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

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="todoEdit = true">Rename</a>
            <a class="dropdown-item" @click="delteTask(taskdata.task_code)"
              >Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    // draggable
  },
  name: "Task",
  props: {
    task: {
      type: Object,
    },
    project_code:String
  },
  data() {
    return {
      taskdata: this.task,
      todoEdit: false,
      task_title: this.task.task,
      task_name_changed: false,
    };
  },
  methods: {
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
        .dispatch("projects/deleteTask", {task_code:task_code,project_code:this.project_code})
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
}
.form-check {
  font-weight: 700;
  font-size: 20px;
  float: left;
  margin: 8px 0;
}
.form-check-input {
  width: 18px;
  height: 18px;
}
.form-check-label {
  margin-left: 10px;
}
.more {
  float: right;
  padding: 10px 0;
}
.fa {
  font-size: 20px;
  padding: 0 10px;
}
</style>