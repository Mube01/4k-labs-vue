<template>
  <div class="text-center">
    <form @submit="onSubmit">
      <input type="text" v-model="text" name="text" placeholder="Task Name" />

      <Button type="submit" text="Add" color="white" bgColor="#177F75" />
    </form>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "AddTask",
  props: {
    project_code: {
      type: String,
    },
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
        alert("can't add empty task");
        return;
      } else {
        console.log("sending task")
        this.$store
          .dispatch("projects/addTask", {
            project_code: this.project_code,
            task: this.text,
          })
          .then((result) => {
            console.log(result);
            this.$emit("taskAdded");
            this.text = "";
          })
          .catch((err) => {
            console.log(err);
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
</style>