<template>
  <div>
    <Header />
    <div class="container text-center">
      <div class="login">
        <form class="login" onsubmit="return false">
          <!-- <img class="logo" src="@/assets/logo.webp" /> -->
          <h2>Login</h2>
          <div class="full col-md-12">
            <div id="LoginButton">
              <button class="buttonText"><i class="fab fa-google"></i> Login With Gmail</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer id="footer" />
  </div>
</template>

<script>
import Header from "@/static/SubHeader.vue";
import Footer from "@/static/Footer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  components: { Header, Footer },
  data() {
    return {
      password: "",
      username: "",
    };
  },
  computed: {
    ...mapGetters({
      isAuthenticated: ["auth/isAuthenticated"],
      isSuperAdmin: ["user/isSuperAdmin"],
    }),
  },
  methods: {
    ...mapActions({
      errorAlert: "errorAlert",
      successAlert: "successAlert",
      loginUser: "auth/loginUser",
      logoutUser: "auth/logoutUser2",
    }),
    getGmail() {
      var gapi = window.gapi;
      var auth2 = "";
      gapi.load("auth2", () => {
        auth2 = gapi.auth2.init({
          client_id:
            "843154350382-qvjkg63v1m17g3tp722e5va4v77o011h.apps.googleusercontent.com",
          cookiepolicy: "single_host_origin",
        });
        var elemnt = document.getElementById("LoginButton");
        auth2.attachClickHandler(
          elemnt,
          {},
          (user) => {
            this.onSignIn(user);
          },
          (err) => {
            this.errorAlert(JSON.stringify(err, undefined, 2));
          }
        );
      });
    },
    // send user name and password by reading from the form
    onSignIn(user) {
      var id_token = user.getAuthResponse().id_token;
      this.loginUser(id_token)
        .then((result) => {
          this.successAlert("login successfull");
          this.$router.push({ name: "Divisions" });
        })
        .catch((err) => {
          this.errorAlert(err.message);
        });
    },
    onFailure(err) {
      this.errorAlert(err);
    },
  },
  mounted() {
    if (this.isSuperAdmin) {
      this.logoutUser();
    } else if (this.isAuthenticated) {
      this.$router.push({ name: "Divisions" });
    } else {
      this.getGmail();
    }
  },
};
</script>

<style scoped>
.fab {
  color: white;
  font-size: 25px;
  float: left;
  margin-top:2px; 
}
.login {
  margin: 0 auto;
  margin-top: 50px;
  padding: 60px 50px;
  width: 450px;
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
@media only screen and (max-width: 600px) {
  .login{
  width: 100%;}
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
.LoginButton{
width:100%}
button {
  padding: 10px 45px;
  border-radius: 5px;
  font-size: 18px;
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

#customBtn {
  display: inline-block;
  background: white;
  color: #444;
  width: 190px;
  border-radius: 5px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;
}
#customBtn:hover {
  cursor: pointer;
}
span.label {
  font-family: serif;
  font-weight: normal;
}
span.icon {
  background: url("/identity/sign-in/g-normal.png") transparent 5px 50%
    no-repeat;
  display: inline-block;
  vertical-align: middle;
  width: 42px;
  height: 42px;
}
span.buttonText {
  border: 1px;
  display: inline-block;
  vertical-align: middle;
  padding-left: 42px;
  padding-right: 42px;
  font-size: 14px;
  font-weight: bold;
  /* Use the Roboto font that is loaded in the <head> */
  font-family: "Roboto", sans-serif;
}
</style>