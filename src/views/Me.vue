<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-lg-4 text-center my-4">
          <ProfilePicture
            :srcText="user_info['profile_picture']"
            imgWeight="250px"
            fontSize="100px"
            :name=user_info.username[0]
          />
        </div>
        <div class="col-lg-5 my-4 pt-2">
          <p
            @dblclick="
              editUserInfo = true;
              field_value_changed = false;
            "
          >
            Username:
            <span class="value">
              <label v-show="!editUserInfo">{{ user_info.username }}</label>
              <input
                type="text"
                @change="field_value_changed = true"
                v-model="user_info.username"
                v-show="editUserInfo"
                @keyup.enter="closeEdit()"
                v-on:blur="closeEdit()"
              />
            </span>
          </p>
          <p @dblclick="editUserInfo = true">
            Full name:
            <span class="value">
              <label v-show="!editUserInfo">{{ user_info.fullname}}</label>
              <input
                type="text"
                @change="field_value_changed = true"
                v-model="user_info.fullname"
                v-show="editUserInfo"
                @keyup.enter="closeEdit()"
                v-on:blur="closeEdit()"
              />
            </span>
          </p>
          <p @dblclick="editUserInfo = true">
            Division:
            <span class="value">
              <label>{{ user_info.Division }}</label>
            </span>
          </p>
          <p @dblclick="editUserInfo = true">
            Discription:
            <span class="value">
              <label v-show="!editUserInfo">{{ user_info.Discription }}</label>
              <input
                type="text"
                @change="field_value_changed = true"
                v-model="user_info.Discription"
                v-show="editUserInfo"
                @keyup.enter="closeEdit()"
                v-on:blur="closeEdit()"
              />
            </span>
          </p>

          <p v-show="editUserInfo" @dblclick="editUserInfo = true">
            Password:
            <span class="value">
              <label v-show="!editUserInfo"></label>
              <input
                required
                type="password"
                @change="field_value_changed = true"
                v-model="password"
                v-show="editUserInfo"
                @keyup.enter="closeEdit()"
              />
            </span>
          </p>
          <p v-show="editUserInfo" @dblclick="editUserInfo = true">
            New Password:
            <span class="value">
              <label v-show="!editUserInfo"></label>
              <input
                type="password"
                @change="field_value_changed = true"
                v-model="newpassword"
                v-show="editUserInfo"
                @keyup.enter="closeEdit()"
              />
            </span>
          </p>
          <p v-show="editUserInfo" @dblclick="editUserInfo = true">
            Confirm Password:
            <span class="value">
              <label v-show="!editUserInfo"></label>
              <input
                type="password"
                @change="field_value_changed = true"
                v-model="confirmpassword"
                v-show="editUserInfo"
                @keyup.enter="closeEdit()"
              />
            </span>
          </p>
          <router-link :to="{name:'UpdateProfile'}">
            <Button
              text="Edit Profile"
              color="#333"
              bgColor="white"
              border="2px solid #333"
            />
          </router-link>
        </div>
        <div class="col-lg-3 my-4 pt-2">
          <p>
            <a href="#"> LinkedIn </a>
            <input
              type="text"
              @change="field_value_changed = true"
              v-model="user_info.Linkden"
              v-show="editUserInfo"
              @keyup.enter="closeEdit()"
            />
          </p>
          <p>
            <a href="#"> Github </a>
            <input
              type="text"
              @change="field_value_changed = true"
              v-model="user_info.Github"
              v-show="editUserInfo"
              @keyup.enter="closeEdit()"
            />
          </p>
          <p>
            <label v-show="editUserInfo" @dblclick="editUserInfo = true"
              >Upload Profile</label
            >
            <input
              v-on:change="uploadProfile"
              v-show="editUserInfo"
              type="file"
              accept="image/*"
            />
          </p>
        </div>
      </div>
      <br />
      <br />
      <div
        :key="project.project_code"
        v-for="project in projects"
        class="Projects"
      >
        <Project :project="project" />
      </div>
    </div>
  </div>
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
  methods: {
    
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