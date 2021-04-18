<template>
  <Header />
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-sm-6 my-4">
        <ProfilePicture
          :srcText="user_info['profile_picture']"
          imgWeight="250px"
          fontSize="100px"
          :name="user_info.username[0]"
        />
      </div>
      <div class="col-lg-5 col-sm-6 my-4 pt-2">
        <p>
          Username:
          <span class="value">
            <label>{{ user_info.username }}</label>
          </span>
        </p>
        <p>
          Full name:
          <span class="value">
            <label>{{ user_info.fullname }}</label>
          </span>
        </p>
        <p>
          Division:
          <span class="value">
            <label>{{ user_info.Division }}</label>
          </span>
        </p>
        <p>
          Discription:
          <span class="value">
            <label>{{ user_info.Discription }}</label>
          </span>
        </p>

        <router-link :to="{ name: 'UpdateProfile' }">
          <Button
            text="Edit Profile"
            color="#333"
            bgColor="white"
            border="2px solid #333"
          />
        </router-link>
      </div>
      <div class="col-lg-3 col-sm-12 my-4 pt-2">
        <p>
          <a :href="user_info.Linkden"><i class="fab fa-linkedin"></i></a>
          <a :href="user_info.Github"><i class="fab fa-github"></i></a>
        </p>
      </div>
    </div>
    <div class="row mt-4">
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
import Button from "@/components/Button.vue";
import { mapGetters, mapActions } from "vuex";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default {
  name: "Me",
  components: {
    Header,
    ProfilePicture,
    Button,
    Project,
  },
  data() {
    return {
      user_info: "",
      editUserInfo: false,
      field_value_changed: false,
      password: "",
      newpassword: "",
      confirmpassword: "",
      image: "",
    };
  },
  created() {
    console.log("this is abel km");
    this.user_info = this.$store.getters["user/getUserInformation"];
  },
  computed: {
    ...mapGetters({}),
    projects() {
      return this.$store.getters["projects/listOfProjectsByUserId"](
        this.user_info.user_id
      );
    },
  },
  methods: {},
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