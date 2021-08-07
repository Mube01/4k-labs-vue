<template>
  <div>
    <Header />
    <div class="container text-center">
      <form class="login" @submit.prevent="UpdateProject">
        <h2>Edit Project</h2>
        <div class="row">
          <div class="col-md-6">
            <label for="title">Project Title</label><br />
            <input
              required
              v-model="project.project_title"
              type="text"
              id="title"
              autocomplete="off"
            />
          </div>

          <div class="col-md-6">
            <label>Deadline</label>
            <input
              type="date"
              v-model="project.deadline"
              name="text"
              placeholder="Project Deadline"
              required
            />
          </div>
          <div class="col-md-6">
            <label>Project Leader</label>
            <OneSelect
              ref="selected_leader"
              :memberIds="[project.project_leader]"
              :allMembers="allMembers"
              style="margin-top: 70px"
            />
          </div>
        </div>

        <div class="full">
          <label for="github">Github link</label><br />
          <input
            v-model="project.github"
            type="text"
            id="github"
            autocomplete="off"
          />
        </div>

        <div class="full">
          <label for="linkedin">Docs link</label><br />
          <input
            v-model="project.docs"
            type="text"
            id="docs"
            autocomplete="off"
          />
        </div>

        <div class="full">
          <label for="description">Description</label><br />
          <textarea
            rows="7"
            v-model="project.description"
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
import OneSelect from "@/components/OneSelect.vue";
import Header from "@/components/Header.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UpdateProject",
  components: {
    Header,
    OneSelect,
  },
  data() {
    return {
      project_code: this.$route.params.projectCode,
    };
  },
  methods: {
    ...mapActions({
      fetchProject: "projects/getProject",
      updateProject: "projects/updateProject",
    }),
    UpdateProject() {
      if(this.$refs.selected_leader.value.length){
        var data = {
        project_title: this.project.project_title,
        github: this.project.github,
        docs: this.project.docs,
        description: this.project.description,
        project_code: this.project.project_code,
        deadline: this.project.deadline,
        project_leader:this.$refs.selected_leader.value[0]
      };
      this.updateProject(data)
        .then((result) => {
          this.$router.push({
            name: "Tasks",
            params: { projectCode: this.project.project_code },
          });
        })
        .catch((err) => {});
      }
      else{
        console.log("hee");
        alert("Project LeaderCan't be empty")    
      }
    },
  },
  computed: {
    project() {
      return this.$store.getters["projects/getProjectByProjectCode"](
        this.project_code
      );
    },
    ...mapGetters({
      allMembers: "members/getMembers",
      user_info: "user/getUserInformation",
    }),
    ...mapActions({
      errorAlert: "errorAlert",
      successAlert: "successAlert",
    }),
  },
};
</script>

<style scoped>
h2 {
  font-weight: 700;
  margin: 25px 0;
}
label {
  font-size: 17px;
  font-weight: 600;
  float: left;
}
input {
  padding: 8px;
  border-radius: 5px;
  border: 2px solid #666;
  margin: 5px 0 15px 0;
  width: 100%;
}
input[type="file"] {
  padding: 6px;
}
select {
  width: 450px;
  padding: 12px;
  border-radius: 5px;
  border: 2px solid #666;
  margin: 5px 0 15px 0;
}
input:focus {
  outline: none;
  border: 2px solid #177f75;
}
textarea {
  width: 100%;
  padding: 5px;
  border: 2px solid #666;
}
textarea:focus {
  outline-color: #177f75;
}
button {
  padding: 10px 45px;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  margin: 15px 0 7px 0;
  opacity: 0.7;
  color: white;
  background: #8b5e3b;
  font-weight: 600;
  transition: 0.5s;
}
button:hover {
  opacity: 1;
}
</style>
