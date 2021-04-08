<template>
  <div>
    <Header />
    <div class="container text-center">
      <form class="login" @submit.prevent="login">
        <h2>Edit Project</h2>
        <div class="full">
          <label for="title">Project Title</label><br />
          <input
            required
            v-model="project.project_title"
            type="text"
            id="title"
            autocomplete="off"
          />
        </div>

        <div class="full">
          <label for="github">Github link</label><br />
          <input v-model="github" type="text" id="github" autocomplete="off" />
        </div>

        <div class="full">
          <label for="linkedin">Docs link</label><br />
          <input v-model="docs" type="text" id="docs" autocomplete="off" />
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
        <button type="submit">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "UpdateProfile",
  components: {
    Header,
  },
  data() {
    return {
      project_code: this.$router.currentRoute._value.params.projectCode,
    };
  },
  methods: {
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
h2 {
  font-weight: 700;
  margin: 25px 0;
}
.full input {
  width: 100%;
}
label {
  font-size: 17px;
  font-weight: 600;
  float: left;
}
input {
  width: 450px;
  padding: 8px;
  border-radius: 5px;
  border: 2px solid #666;
  margin: 5px 0 15px 0;
}
input[type="file"] {
  padding: 6px;
}
select {
  width: 450px;
  padding: 10px 10px;
  border-radius: 5px;
  border: 2px solid #666;
  margin: 5px 0 15px 0;
}
input:focus {
  outline: none;
  border: 2px solid green;
}
textarea {
  width: 100%;
  border: 2px solid #666;
}
textarea:focus {
  outline-color: green;
}
button {
  padding: 10px 45px;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  margin: 15px 0 7px 0;
  opacity: 0.7;
  color: white;
  background: green;
  font-weight: 600;
  transition: 0.5s;
}

button:hover {
  opacity: 1;
}
</style>