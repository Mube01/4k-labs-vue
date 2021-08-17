<template>
<Header />
  <div class="container text-center">
    <div class="login">
      <form class="login" @submit.prevent="false">
        <h2>Register</h2>
        <div v-if="!toggleForm" class="full col-md-12">
            <div id="LoginButton">
              <button  @click="googleSignIn" class="buttonText">
                <i class="fab fa-google"></i> Sigup With Gmail
              </button>
            </div>
          </div>

        <div v-if="toggleForm" class="full col-md-12">

          <label for="email">Gmail Address</label><br />
          <input
            required
            disabled=true
            v-model="gmail_address"
            type="text"
            id="email"
            autocomplete="off"
          />
          <label for="email">username</label><br />
          <input
            required
            v-model="username"
            type="text"
            id="email"
            autocomplete="off"
          />
          <label for="fullname">Full Name</label><br />
                <input
                  required
                  v-model="fullname"
                  type="text"
                  id="fullname"
                  autocomplete="off"
                />
          <label for="token">Token</label><br />
          <input
            required
            v-model="token"
            type="text"
            id="token"
            autocomplete="off"
          />
          <button @click="register" type="submit">Register</button>
        </div>
        
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/static/SubHeader.vue";
import { mapActions } from "vuex";
import { firebase } from '@firebase/app'
import '@firebase/auth'
export default {
  name: "Register",
  components:{
    Header,
  },
  data() {
    return {
      fullname:"",
      gmail_address: "",
      username:"",
      token: "",
      toggleForm:false
    };
  },
  methods: {    
    ...mapActions({
      logoutUser: "auth/deleteAccessTokens",
      errorAlert: "errorAlert",
      successAlert: "successAlert",
    }),
    googleSignIn: function () {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let user = result.user;
          this.toggleForm = true
          this.gmail_address = user.email;
          this.fullname = user.displayName;
          this.username = "";
        })
        .catch((err) => {
          this.onFailure(err);
        });
    },
    // send user name and password by reading from the form
    register() {
      //check if ther is space on the user name
      if (this.gmail_address.indexOf(" ") > 0) {
        this.errorAlert("email address can't have space");
      }
      else if(this.username.indexOf(" ") > 0){
        this.errorAlert("username can't have space");
      }
      // check if confirm passwod and password are the same
      else {
        var data = {
          email: this.gmail_address,
          token: this.token,
          fullname:this.fullname,
          username:this.username,
        };
        this.$store
          .dispatch("auth/register", data)
          .then((result) => {
            this.successAlert(result.message)
            this.$router.push({ name: "Login" });
          })
          .catch((err) => {
            alert(err.message);
          });
      }
    },
  },
  created() {
    this.logoutUser()
      .then((result) => {

      })
      .catch((err) => {});
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
  width: 300px;
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