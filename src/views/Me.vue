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
              <a :href="user_info.Linkden || '#'">
              <i title="LinkedIn link" class="fab fa-linkedin"></i
              ></a>
              <a :href="user_info.Github || '#'"
                ><i title="Github link" class="fab fa-github"></i
              ></a>
            </p>
          </div>
        </div>
        <div class="row mt-4">
          <div
            class="col-md-6"
            :key="project.project_code"
            v-for="project in projects"
          >
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
</template>

<script>
import Header from "@/components/Header.vue";
import ProfilePicture from "@/components/ProfilePicture.vue";
import Project from "@/components/Project.vue";
import Button from "@/components/Button.vue";
import { mapGetters } from "vuex";

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