<template>
  <div class="text-center">
    <form @submit="onSubmit">
      <input
        type="text"
        v-model="project_title"
        name="text"
        placeholder="Project Title"
      />

      <div class="full">
        <label for="addMembers">Add Members</label><br />
        <div style="margin-top: -100px; clear: both; background-color: white">
          <MultiSelect
            ref="selected_members"
            :allMembers="allMembers"
            style="margin-top: 70px"
          />
        </div>
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

      <Button
        type="submit"
        text="Add Project"
        color="white"
        bgColor="#177F75"
      />
    </form>
  </div>
</template>

<script>
import Button from "./Button.vue";
import MultiSelect from "./MultiSelect";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddProject",
  computed: {
    ...mapGetters({
      allMembers: "members/getMembers",
      user_id: "user/getUserId",
    }),
  },
  data() {
    return {
      project_title: "",
      description: "",
      text: "",
    };
  },
  components: {
    Button,
    MultiSelect,
  },
  methods: {
    ...mapActions({
      createProject: "projects/createNewProject",
    }),

    onSubmit(e) {
      e.preventDefault();

      var value = Object.values(this.$refs.selected_members.value) || [];

      if (!this.project_title) {
        alert("Please add a project");
      } else if (value.length < 1) {
        alert("minimum one member have to be adde");
      }
      var data = {
        project_title: this.project_title,
        tasks: [],
        members: value,
        user_id: this.user_id,
        github_link: "",
        docs_link: "",
        description: this.description,
      };
      this.createProject(data)
        .then((result) => {
          console.log(result);
          this.$emit("projectAdded");
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("got heree finally");
    },
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>
input {
  width: 100%;
  padding: 18px 20px;
  margin: 5px 0 15px 0;
  border-radius: 5px;
  border: 1px solid #333;
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
.multiselect-tag.is-user {
  padding: 5px 8px;
  border-radius: 22px;
  background: #35495e;
  margin: 3px 3px 8px;
}

.multiselect-tag.is-user img {
  width: 18px;
  border-radius: 50%;
  height: 18px;
  margin-right: 8px;
  border: 2px solid #ffffffbf;
}

.multiselect-tag.is-user i:before {
  color: #ffffff;
  border-radius: 50%;
}

.user-image {
  margin: 0 6px 0 0;
  border-radius: 50%;
  height: 22px;
}
</style>