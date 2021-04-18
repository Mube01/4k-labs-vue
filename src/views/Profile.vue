<template>
  <div>
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
            Discription: <span class="value">{{ user_info.Discription }}</span>
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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#a97c50"
      fill-opacity="1"
      d="M0,224L34.3,213.3C68.6,203,137,181,206,170.7C274.3,160,343,160,411,181.3C480,203,549,245,617,229.3C685.7,213,754,139,823,138.7C891.4,139,960,213,1029,229.3C1097.1,245,1166,203,1234,160C1302.9,117,1371,75,1406,53.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
    ></path>
  </svg>
</template>

<script>
import Header from "@/components/Header.vue";
import ProfilePicture from "@/components/ProfilePicture.vue";
import Project from "@/components/Project.vue";

export default {
  name: "Profile",
  components: {
    Header,
    ProfilePicture,
    Project,
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