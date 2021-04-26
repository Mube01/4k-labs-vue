<template>
  <div class="row">

    

    <div class="col-4">
      <h3>Todos</h3>
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

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="todoEdit = true">Rename</a>
            <a class="dropdown-item" @click="delteTask(element.task_code)"
              >Delete</a
            >
          </div>
        </div>
          </div>
    </div>
        </template>
        <template #footer>
          <div class="btn-group list-group-item" role="group">
            <AddTask
              @taskAdded="showAddTask = false"
              :project_code="project_code"
            />
          </div>
        </template>
      </draggable>
    </div>

    <div class="col-4">
      <h3>In Progress</h3>
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

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="todoEdit = true">Rename</a>
            <a class="dropdown-item" @click="delteTask(element.task_code)"
              >Delete</a
            >
          </div>
        </div>
          </div>
          </div>
        </template>

      </draggable>
    </div>

  <div class="col-4">
      <h3>Completed</h3>
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

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="todoEdit = true">Rename</a>
            <a class="dropdown-item" @click="delteTask(element.task_code)"
              >Delete</a
            >
          </div>
        </div>
          </div>          </div>
        </template>

      </draggable>
    </div>

  </div>
</template>
<script>
import AddTask from "@/components/AddTask.vue";
import draggable from 'vuedraggable'
import {mapActions} from 'vuex';
export default {
  name: "Activities",
  props:{
    project_code:{
      type:String,
    }
  },
  components: {
    draggable,
    AddTask
  },
  data() {
    return {
      newtask:"",
      destination:{
        'known':false,
        'value':'',
        'status':''
      },

    };
  },
  methods: {
    ...mapActions({
      'updateTask':'projects/updateTask'
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
        .dispatch("projects/deleteTask", {task_code:task_code,project_code:this.project_code})
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  computed:{
     
    todos:{
      get(){
        return this.$store.getters['projects/getProjectTasks']({'project_code':this.project_code,'status':0})
        // return this.list1
      },
      set(value){

        if (this.destination.known === false){
          let result = value.filter(o1 => !this.todos.some(o2 => o1.task_code === o2.task_code));
          this.destination.known = true
          this.destination.value = result
          this.destination.status = 0
        }else{
          this.updateTask({destination:this.destination,project_code:this.project_code})
          this.destination.known = false
        }
      }
    },
    inProgress:{

      get(){
        return this.$store.getters['projects/getProjectTasks']({'project_code':this.project_code,'status':1})

      },
      set(value){
        if (this.destination.known === false){

          let result = value.filter(o1 => !this.inProgress.some(o2 => o1.task_code === o2.task_code));
          this.destination.known = true
          this.destination.value = result
          this.destination.status = 1

        }else{
          this.updateTask({destination:this.destination,project_code:this.project_code})
          this.destination.known = false
        }
      }
    },
    completed:{
      get(){
        return this.$store.getters['projects/getProjectTasks']({'project_code':this.project_code,'status':2})

      },
      set(value){
        if (this.destination.known === false){
          let result = value.filter(o1 => !this.completed.some(o2 => o1.task_code === o2.task_code));
          this.destination.known = true
          this.destination.value = result
          this.destination.status = 2        
        }else{
          this.updateTask({destination:this.destination,project_code:this.project_code})
          this.destination.known = false
        }
      }
    }

  }
};
</script>
