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
        <div>
          
          <Multiselect
            v-model="value"
            mode="tags"
            placeholder="Select members"
            trackBy="username"
            label="username"
            :search="true"
            :options="allMembers"
          >
              <template v-slot:tag="{ option, handleTagRemove, disabled }">
                <div class="multiselect-tag is-user">
                  <img :src="option['profile picture']">
                  {{ option.username }}
                  <i
                    v-if="!disabled"
                    @click.prevent
                    @mousedown.prevent.stop="handleTagRemove(option, $event)"
                  />
                </div>
              </template>
          </Multiselect>


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

      <Button type="submit" text="Add Project" color="white" bgColor="green" />
    </form>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Multiselect from "@vueform/multiselect";
import {mapGetters,mapActions} from 'vuex'

export default {
  name: "AddProject",
  computed: {
    ...mapGetters({
      allMembers: "projects/getMembers",
      user_id:"user/getUserId"
    }),
  },
  data() {
    return {

      project_title:"",
      description:"",
      text: "",
      value: [],
      
    };
  },
  components: {
    Button,
    MultiSelect,
  },
  methods: {
    ...mapActions({
      createProject:'projects/createNewProject'
    }),

    onSubmit(e) {
      e.preventDefault();
      if (!this.project_title) {
        alert("Please add a project");
      }
      else if(this.value.length<1){
          alert("minimum one member have to be adde")
        }
      var data = {
        "project_title":this.project_title,
        "tasks":[],
        "members":this.value,
        "user_id":this.user_id,
        "github_link":"",
        "docs_link":"",
        "description":this.description
      }
      this.createProject(data).then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err)
      });
      this.$emit('projectAdded')
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