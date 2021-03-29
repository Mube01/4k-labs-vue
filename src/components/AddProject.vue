<template>
  <div class="text-center">
    <form @submit="onSubmit">
      <input
        type="text"
        v-model="text"
        name="text"
        placeholder="Project Title"
      />

      <Button type="submit" text="Add" color="green" />
    </form>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "AddProject",
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
        alert("Please add a project");
        return;
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