<template>
  <div class="text-center">
    <form @submit="onSubmit">
      <input type="text" v-model="text" name="text" placeholder="Task Name" />

      <Button type="submit" text="Add" color="green" />
    </form>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "AddTask",
  props:{
    'project_code':{
      type:String
    }
  },
  data() {
    return {
      text: "",
    };
  },
  components: {
    Button,
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert("Please add a task");
        return;
      }else{
        this.$store.dispatch('projects/addTask',{'project_code':this.project_code,'task':this.text}).then((result) => {
          console.log(result)
        }).catch((err) => {
          console.log(err)
        });
      }
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 18px 20px;
  margin: 5px 0 15px 0;
  border-radius: 5px;
  border: 1px solid #333;
}
.button {
  padding: 10px 45px;
  border-radius: 5px;
  font-size: 20px;
  color: white;
  border: none;
  width: fit-content;
  background: green;
  margin: 2px 0 7px 0;
  opacity: 0.7;
  transition: 0.5s;
}

.button:hover {
  opacity: 1;
}
</style>