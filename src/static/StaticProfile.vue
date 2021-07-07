<template>
  <div class="page-container">
    <div class="content-wrap">
      <SubHeader />
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
              <a :href="user_info.Linkden || '#'"
                ><i title="LinkedIn link" class="fab fa-linkedin"></i
              ></a>
              <a :href="user_info.Github || '#'"
                ><i title="Github link" class="fab fa-github"></i
              ></a>
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div
            class="col-md-6"
            :key="project.project_code"
            v-for="project in projects"
          >
            <StaticProject :project="project" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeader from "./SubHeader";
import ProfilePicture from "@/components/ProfilePicture.vue";
import StaticProject from "./StaticProject";
export default {
  name: "StaticProfile",
  components: {
    SubHeader,
    ProfilePicture,
    StaticProject,
  },
  data() {
    return {
      user_code: "",
    };
  },
  computed: {
    projects(user_id) {
      return this.$store.getters["home/getProjectsByUserId"](this.user_code);
    },
    user_info(user_id) {
      return this.$store.getters["home/getUserInformation"](this.user_code)[0];
    },
  },
  created() {
    this.user_code = this.$route.params.user_code;
  },
};
</script>

<style scoped>
.container{
  margin-top:150px;
}
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