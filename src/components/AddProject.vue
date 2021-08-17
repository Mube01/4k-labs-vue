<template>
  <div class="text-center">
    <form @submit="onSubmit">
      <div class="row">
        <div class="col-md-6">
        <label>Title</label>
          <input
            type="text"
            v-model="project_title"
            name="text"
            placeholder="Project Title"
            required
          />
        </div>
        <div class="col-md-6">
        <label>Deadline</label>
          <input
            type="date"
            v-model="dead_line"
            name="text"
            placeholder="Project Deadline"
            required
          />
        </div>
      </div>
      <div class="row">
       <div class="col-md-6">
          <label for="addMembers">Project Leader</label><br />
          <div style="margin-top: -100px; clear: both; background-color: white">
            <OneSelect
              ref="selected_leader"
              :allMembers="allMembers"
              style="margin-top: 70px"
            />
          </div>
        </div>
        <div class="col-md-6">
          <label for="addMembers">Add Members</label><br />
          <div style="margin-top: -100px; clear: both; background-color: white">
            <MultiSelect
              ref="selected_members"
              :allMembers="allMembers"
              style="margin-top: 70px"
            />
          </div>
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
import OneSelect from "./OneSelect.vue";

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
      dead_line:""
    };
  },
  components: {
    Button,
    MultiSelect,
    OneSelect
  },
  methods: {
    ...mapActions({
      createProject: "projects/createNewProject",
      errorAlert: "errorAlert",
      successAlert: "successAlert",
    }),

    onSubmit(e) {
      e.preventDefault();

      var value = Object.values(this.$refs.selected_members.value) || [];
      var leader = this.$refs.selected_leader.value[0] || null

      if(!value.includes(leader)){
        value.push(leader)
      }
      if (!this.project_title) {
        alert("Please add a project");
      }
      else if (value.length < 1) {
        alert("minimum one member have to be adde");
      }
      else if (leader==null){
        alert("project leader is not specified")
      }
      else{
        var data = {
        project_title: this.project_title,
        tasks: [],
        members: value,
        user_id: this.user_id,
        github_link: "",
        docs_link: "",
        deadline : this.dead_line,
        description: this.description,
        project_leader:leader
      };
      this.createProject(data)
        .then((result) => {
          this.successAlert("Project have been created succesdully");
          this.$emit("projectAdded");
        })
        .catch((err) => {
          this.errorAlert(err.message);
        });
      }
      
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
  margin: 10px 0;
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