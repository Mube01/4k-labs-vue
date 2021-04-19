<template>
  <div>
    <div class="login text-center">
      <form class="login" onsubmit="return false">
        <img class="logo" src="@/assets/logo.webp" />
        <h2>Login</h2>
        <label for="username">Username</label><br />
        <input
          required
          v-model="username"
          type="text"
          id="username"
          autocomplete="off"
        />
        <br />
        <label for="password">Password</label><br />
        <input required v-model="password" type="password" id="password" />
        <button @click="login()">Login</button>
      </form>
    </div>
    <div class="footer text-center">
      <p>4K Labs - 2021</p>
    </div>
  </div>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#00cba9" fill-opacity="0.7" d="M0,128L34.3,112C68.6,96,137,64,206,80C274.3,96,343,160,411,208C480,256,549,288,617,277.3C685.7,267,754,213,823,202.7C891.4,192,960,224,1029,250.7C1097.1,277,1166,299,1234,261.3C1302.9,224,1371,128,1406,80L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
  </svg>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      password: "",
      username: "",
    };
  },
  computed: {
    ...mapGetters({
      isAuthenticated: ["auth/isAuthenticated"],
    }),
  },
  methods: {
    ...mapActions({
      errorAlert: "errorAlert",
      successAlert: "successAlert",
    }),
    // send user name and password by reading from the form
    login() {
      this.$store
        .dispatch("auth/loginUser", this)
        .then((result) => {
          this.successAlert("login successfull");
          this.$router.push({ name: "Divisions" });
        })
        .catch((err) => {
          this.errorAlert(err.message);
        });
    },
  },
  created() {
    if (this.isAuthenticated) {
      this.$router.push({ name: "Divisions" });
    }
  },
};
</script>

<style scoped>
.login {
  margin: 0 auto;
  padding: 60px 50px;
  width: fit-content;
  background-color: white;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
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
input {
  width: 400px;
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
  z-index: 10;
}
.footer p {
  font-size: 17px;
  color: #333;
}
</style>