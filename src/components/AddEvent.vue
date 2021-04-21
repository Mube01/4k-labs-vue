<template>
  <div class="text-center">
    <form @submit="onSubmit">
      <div class="left col-md-6">
        <label for="pp">Title</label><br />
        <input
          type="text"
          v-model="event_title"
          name="text"
          placeholder="Event Title"
          required
        />
      </div>

      <div class="right col-md-6">
        <label for="pp">Image</label><br />
        <input
          id="pp"
          v-on:change="uploadProfile"
          type="file"
          accept="image/*"
          required
        />
      </div>

      <div class="left col-md-6">
        <label for="pp">Starting Date</label><br />
        <input
          type="date"
          v-model="event_date"
          name="text"
          placeholder="Event Date"
        />
      </div>

      <div class="left col-md-6">
        <label for="pp">Ending Date</label><br />
        <input
          type="date"
          v-model="event_date"
          name="text"
          placeholder="Event Date"
        />
      </div>

      <div class="full col-md-12">
        <label for="description">Description</label><br />
        <textarea
          rows="7"
          v-model="description"
          type="text"
          id="description"
          autocomplete="off"
        />
      </div>

      <Button type="submit" text="Add Event" color="white" bgColor="#177F75" />
    </form>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Add",
  data() {
    return {
      project_title: "",
      description: "",
    };
  },
  components: {
    Button,
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
input[type="file"] {
  padding: 15px 20px;
}
label {
  float: left;
  font-size: 18px;
  font-weight: 700;
}
textarea {
  width: 100%;
  border: 2px solid #666;
  margin-bottom: 10px;
}
</style>