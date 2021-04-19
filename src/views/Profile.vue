<template>
  <div class="page-container">
    <div class="content-wrap">
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6 my-4">
            <ProfilePicture
              :srcText="user_info['profile_picture']"
              imgWeight="250px"
              fontSize="100px"
              :name="user_info.username"
            />
          </div>
          <div class="col-lg-5 col-sm-6 my-4 pt-2">
            <p>
              Username: <span class="value">{{ user_info.username }}</span>
            </p>
            <p>
              Full name: <span class="value">{{ user_info.fullname }}</span>
            </p>
            <p>
              Division: <span class="value">{{ user_info.Division }}</span>
            </p>
            <p>
              Discription:
              <span class="value">{{ user_info.Discription }}</span>
            </p>
          </div>
          <div class="col-lg-3 col-sm-12 my-4 pt-2">
            <p>
              <a :href="user_info.Github"
                ><i title="LinkedIn link" class="fab fa-linkedin"></i
              ></a>
              <a :href="user_info.Linkden"
                ><i title="Github link" class="fab fa-github"></i
              ></a>
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div :key="project.project_code" v-for="project in projects">
            <router-link
              :to="{
                name: 'Tasks',
                params: { projectCode: project.project_code },
              }"
            >
              <Project :project="project" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Wave />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ProfilePicture from "@/components/ProfilePicture.vue";
import Project from "@/components/Project.vue";
import Wave from "@/components/Wave.vue";

export default {
  name: "Profile",
  components: {
    Header,
    ProfilePicture,
    Project,
    Wave,
  },
  data() {
    return {
      user_info: "",
      user_code: "",
    };
  },
  computed: {
    projects(user_id) {
      return this.$store.getters["projects/listOfProjectsByUserId"](
        this.user_code
      );
    },
  },
  created() {
    console.log("reloading state");
    this.user_code = this.$router.currentRoute._value.params.user_code;
    this.$store
      .dispatch("profile/getUserInformation", this.user_code)
      .then((result) => {
        this.user_info = result;
      })
      .catch((err) => {});
  },
};
</script>

<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
}
.content-wrap {
  padding-bottom: 26.5rem;
}
p {
  font-size: 20px;
}
.value {
  font-weight: 700;
}
.title {
  margin: 10px 0 0 20px;
  font-size: 22px;
  font-weight: 700;
}
</style>