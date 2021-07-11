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
            
              <button  @click="googleSignIn" :disabled="isDisabled" id="signinbtn" class="buttonText">
                <i class="fab fa-google"></i> signin with Google
              </button>
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
import firebase from "firebase";

export default {
  name: "Login",
  components: { Header, Footer },
  data() {
    return {
      password: "",
      username: "",
      isDisabled:false,
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
    googleSignIn: function () {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let user = result.user;
          this.isDisabled = true;
          this.changeText();
          user.getIdToken(true).then((id_token)=>{
            this.onSignIn(id_token);
          });
        })
        .catch((err) => {
          this.onFailure(err);
        });
    },
    changeText(){
      document.getElementById("signinbtn").innerHTML = `<i class="fab fa-google" data-v-26084dc2=""></i> signing in`;
    },
    // send user name and password by reading from the form
    onSignIn(id_token) {
      this.loginUser(id_token)
        .then((result) => {
          this.successAlert("login successfull");
          this.$router.push({ name: "Divisions" });
        })
        .catch((err) => {
          this.isDisabled = false;
          document.getElementById("signinbtn").innerHTML = `<i class="fab fa-google" data-v-26084dc2=""></i> singin in with Google`;
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
      // this.getGmail();
    }
  },
};
</script>

<style scoped>
.fab {
  color: white;
  font-size: 25px;
  float: left;
  margin-top: 2px;
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
  .login {
    width: 100%;
  }
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
.LoginButton {
  width: 100%;
}
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