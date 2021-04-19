<template>
  <div>
    <Header />
    <div class="container text-center">
      <form class="login" @submit.prevent="updateInformation()">
        <h2>Update Profile</h2>
        <div class="left col-md-6">
          <label for="fullname">Username</label><br />
          <input
            required
            v-model="username"
            type="text"
            id="fullname"
            autocomplete="off"
          />
        </div>

        <div class="right col-md-6">
          <label for="username">Password</label><br />
          <input
            required
            v-model="password"
            type="password"
            id="username"
            autocomplete="off"
          />
        </div>

        <div class="left col-md-6">
          <label for="password">New Password</label><br />
          <input v-model="newpassword" type="password" id="password" />
        </div>

        <div class="right col-md-6">
          <label for="password">Confirm Password</label><br />
          <input v-model="confirmpassword" type="password" id="password" />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
      username: "",
      password: "",
      newpassword: "",
      confirmpassword: "",
      user_id: "",
    };
  },
  created() {
    this.username = this.user_info.username;
    this.user_id = this.user_info.user_id;
  },
  methods: {
    updateInformation() {
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
          username: this.username,
          user_id: this.user_info.user_id,
        };
        if (this.newpassword.length >= 3) {
          data["newpassword"] = this.newpassword;
        }
        console.log("update the data ");
        this.$store
          .dispatch("profile/updateAdminProfile", data)
          .then((result) => {
            console.log("profile updated succesfully");
            this.$router.push({ name: "AdminMe" });
          })
          .catch((err) => {});
      }
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
  input,
  select {
    width: 100%;
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
  padding: 8px;
  border-radius: 5px;
  border: 2px solid #666;
  margin: 5px 0 15px 0;
}
input[type="file"] {
  padding: 6px;
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
  border: 2px solid #177f75;
}
button {
  padding: 10px 45px;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  margin: 15px 0 7px 0;
  opacity: 0.8;
  color: white;
  background: #8b5e3b;
  font-weight: 600;
  transition: 0.5s;
}

button:hover {
  opacity: 1;
}
</style>