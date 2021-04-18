<template>
  <div class="container text-center">
    <div class="login">
      <form class="login" @submit.prevent="register">
        <img class="logo" src="@/assets/logo.webp" />
        <h2>Register</h2>
        <div class="left col-md-6">
          <label for="fullname">Full Name</label><br />
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
          <label for="password">Password</label><br />
          <input required v-model="password" type="password" id="password" />
        </div>

        <div class="right col-md-6">
          <label for="confirm_password">Confirm Password</label><br />
          <input
            required
            v-model="confirm_password"
            type="password"
            id="confirm_password"
          />
        </div>
        <div class="full col-md-12">
          <label for="token">Token</label><br />
          <input
            required
            v-model="token"
            type="text"
            id="token"
            autocomplete="off"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      fullname: "",
      password: "",
      token: "",
      username: "",
      confirm_password: "",
    };
  },
  methods: {
    ...mapActions({
      logoutUser: "auth/deleteAccessTokens",
    }),
    // send user name and password by reading from the form
    register() {
      //check if ther is space on the user name
      if (this.username.indexOf(" ") > 0) {
        alert("username cant have space");
      }
      // check if confirm passwod and password are the same
      else if (this.password !== this.confirm_password) {
        alert(
          "password and confirm password are not same please check your input again"
        );
      } else {
        var data = {
          fullname: this.fullname,
          username: this.username,
          password: this.password,
          token: this.token,
        };
        this.$store
          .dispatch("auth/register", data)
          .then((result) => {
            this.$router.push({ name: "Login" });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  created() {
    this.logoutUser()
      .then((result) => {
        console.log("logged out");
      })
      .catch((err) => {});
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
.login {
  padding: 60px 50px;
  width: max-content;
  background-color: white;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.logo {
  height: 100px;
  margin-bottom: 50px;
}
h2 {
  font-weight: 700;
  margin-bottom: 20px;
}
label {
  font-size: 19px;
  font-weight: 600;
  float: left;
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
input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #666;
  margin: 5px 0 15px 0;
}
input:focus {
  outline: none;
  border: 2px solid #177f75;
}
button {
  padding: 10px 45px;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  margin: 25px 0 7px 0;
  opacity: 0.8;
  color: white;
  background: #8b5e3b;
  font-weight: 600;
  transition: 0.5s;
}

button:hover {
  opacity: 1;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: 200px;
}
.footer p {
  font-size: 17px;
  color: #333;
}
</style>