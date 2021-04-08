<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-md-4 text-center my-4">
          <ProfilePicture
            :srcText="user_info['profile picture']"
            imgWeight="250px"
            fontSize="100px"
            :name="user_info.username[0]"
          />
        </div>
        <div class="col-md-5 my-4 pt-2">
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
              <label v-show="!editUserInfo">{{ user_info["Full Name"] }}</label>
              <input
                type="text"
                @change="field_value_changed = true"
                v-model="user_info['Full Name']"
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
          <Button
            :disabled="!editUserInfo"
            text="Edit Profile"
            color="#333"
            bgColor="white"
            border="2px solid #333"
            @click="updateInformation"
          />
        </div>
        <div class="col-md-3 my-4 pt-2">
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
    updateInformation() {
      console.log("the length is", this.newpassword.length);
      if (this.password.length === 0) {
        alert("password is requiered");
      } else if (this.newpassword !== this.confirmpassword) {
        alert("please confirm the new passwod");
      } else if (this.newpassword.length < 3 && this.newpassword.length !== 0) {
        alert("the length of the password must be greater than 3");
      } else {
        this.editUserInfo = false;

        var data = {
          password: this.password,
          username: this.user_info.username,
          Linkden: this.user_info.Linkden,
          Github: this.user_info.Github,
          "Full Name": this.user_info["Full Name"],
          Discription: this.user_info.Discription,
          user_id: this.user_info.user_id,
        };
        if (this.newpassword.length >= 3) {
          data["newpassword"] = this.newpassword;
        }
        if (this.image.length != 0) {
          data["image"] = this.image;
        }
        // this.password = ""
        // this.newpassword = ""
        this.$store.dispatch("profile/editProfile", data);
      }
    },
    closeEdit() {
      this.editUserInfo = false;
      this.password = "";
      this.newpassword = "";
    },
    uploadProfile(e) {
      const selecterImage = e.target.files[0];
      this.createBase64Image(selecterImage);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.readAsDataURL(fileObject);
      reader.onload = (e) => {
        var base64result = e.target.result;
        this.image = base64result.split(",")[1];
      };
    },
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