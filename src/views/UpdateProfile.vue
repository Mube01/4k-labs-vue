<template>
  <div>
    <Header />
    <div class="container text-center">
      <form class="login" @submit.prevent="updateInformation()">
        <h2>Update Profile</h2>
        <div class="left col-md-6">
          <label for="fullname">Fullname</label><br />
          <input
            required
            v-model="fullname"
            type="text"
            id="fullname"
            autocomplete="off"
          />
        </div>

        <div class="right col-md-6">
          <label for="username">Username</label><br />
          <input
            required
            v-model="username"
            type="text"
            id="username"
            autocomplete="off"
          />
        </div>

        <div class="left col-md-6">
          <label for="pp">Profile Picture</label><br />
          <input
            id="pp"
            v-on:change="uploadProfile"
            type="file"
            accept="image/*"
          />
        </div>

        <div class="full col-md-12">
          <label for="github">Github link</label><br />
          <input v-model="Github" type="text" id="github" autocomplete="off" />
        </div>

        <div class="full col-md-12">
          <label for="linkedin">LinkedIn link</label><br />
          <input
            v-model="Linkden"
            type="text"
            id="linkedin"
            autocomplete="off"
          />
        </div>

        <div class="full col-md-12">
          <label for="description">Description</label><br />
          <textarea
            rows="7"
            v-model="Discription"
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
import { mapGetters,mapActions } from "vuex";
import Header from "@/components/Header.vue";
export default {
  name: "UpdateProfile",
  components: {
    Header,
  },
  computed: {
    ...mapGetters({
      user_info: "user/getUserInformation",
    }),
  },
  data() {
    return {
      fullname: "",
      username: "",
      Github: "",
      Linkden: "",
      Discription: "",
      image: "",
      user_id: "",
    };
  },
  created() {
    this.fullname = this.user_info.fullname;
    this.username = this.user_info.username;
    this.Github = this.user_info.Github;
    this.Linkden = this.user_info.Linkden;
    this.Discription = this.user_info.Discription;
    this.user_id = this.user_info.user_id;
  },
  methods: {
    ...mapActions({
      errorAlert: "errorAlert",
      successAlert: "successAlert",
    }),
    updateInformation() {
      if (this.username.indexOf(" ") > 0) {
        this.errorAlert("username can't have space");
      }
      else{
         var data = {
          Linkden: this.Linkden,
          Github: this.Github,
          fullname: this.fullname,
          Discription: this.Discription,
          user_id: this.user_info.user_id,
          username:this.username
        };
        if (this.image.length != 0) {
          data["image"] = this.image;
        }
        this.$store
          .dispatch("profile/editProfile", data)
          .then((result) => {
            this.successAlert("profile has been updated succesully")
            this.$router.push({ name: "Me" });
          })
          .catch((err) => {});
      }       

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
@media screen and (max-width: 480px) {
  .left,
  .right {
    clear: both;
  }
}
h2 {
  font-weight: 700;
  margin: 20px 0;
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
.full input {
  width: 100%;
}
label {
  font-size: 17px;
  font-weight: 600;
  float: left;
}
input {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 2px solid #666;
  margin: 5px 0 15px 0;
}
input[type="file"] {
  padding: 9px;
  background-color: white;
}
input:focus {
  outline: none;
  border: 2px solid #177f75;
}
textarea {
  width: 100%;
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