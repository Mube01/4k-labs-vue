<template>
  <div class="text-center">
    <form @submit="onSubmit">
      <input
        type="text"
        v-model="text"
        name="text"
        placeholder="Project Title"
      />

      <div class="full">
        <label for="addMembers">Add Members</label><br />
        <div></div>
      </div>

      <div class="full">
        <label for="description">Description</label><br />
        <textarea
          rows="7"
          v-model="description"
          type="text"
          id="description"
          autocomplete="off"
        />
      </div>

      <Button type="submit" text="Add Project" color="white" bgColor="green" />
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
.left {
  float: left;
}
.right {
  float: right;
}
.full {
  clear: both;
}
label {
  float: left;
  font-size: 18px;
  font-weight: 700;
}
select {
  width: 450px;
  padding: 15px 10px;
  border-radius: 5px;
  border: 2px solid #666;
  margin: 5px 0 15px 0;
}
select:focus {
  border: 3px solid black;
  padding: 14px 9px;
}
textarea {
  width: 100%;
  border: 2px solid #666;
  margin-bottom: 10px;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #f1f1f1;
}
</style>