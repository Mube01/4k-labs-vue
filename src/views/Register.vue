<template>
<Header />
  <div class="container text-center">
    <div class="login">
      <form class="login" @submit.prevent="register">
        <img class="logo" src="@/assets/logo.webp" />
        <h2>Register</h2>

        <div class="full col-md-12">
              <div id="customBtn">
                <span class="buttonText">Register With Gmail</span>
              </div>
        </div>

        <div v-if="togleForm" class="full col-md-12">

          <label for="email">Gmail Address</label><br />
          <input
            required
            v-model="gmail_address"
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
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/static/SubHeader.vue";
import { mapActions } from "vuex";

export default {
  name: "Register",
  components:{
    Header,
  },
  data() {
    return {
      fullname:"",
      gmail_address: "",
      token: "",
      togleForm:false
    };
  },
  methods: {    
    ...mapActions({
      logoutUser: "auth/deleteAccessTokens",
      errorAlert: "errorAlert",
      successAlert: "successAlert",
    }),

    getGmail() {
    var gapi = window.gapi;
    var auth2 = ""
    gapi.load('auth2', ()=>{
        auth2 = gapi.auth2.init({
          client_id: '475271500037-5gg9viio8pftqjs1ra3aq9f3ss8f0nru.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        })
        var elemnt = document.getElementById('customBtn');
        auth2.attachClickHandler(elemnt,{},(user)=>{
          this.togleForm = true
          this.gmail_address = user.getBasicProfile().getEmail()
          this.fullname = user.getBasicProfile().getName()
        },
        (err)=>{
          this.errorAlert(JSON.stringify(err, undefined, 2));
        }
      )
    });
  },

    // send user name and password by reading from the form
    register() {
      //check if ther is space on the user name
      if (this.gmail_address.indexOf(" ") > 0) {
        this.errorAlert("username cant have space");
      }
      // check if confirm passwod and password are the same
      else {
        var data = {
          email: this.gmail_address,
          token: this.token,
          fullname:this.fullname,
        };
        this.$store
          .dispatch("auth/register", data)
          .then((result) => {
            this.successAlert(result.message)
            this.$router.push({ name: "Login" });
          })
          .catch((err) => {
            this.errorAlert(err.message);
          });
      }
    },
  },
  mounted(){
    this.getGmail();
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
@media screen and (max-width: 480px) {
  .left,
  .right {
    clear: both;
  }
}
.login {
  padding: 50px 40px;
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
      background: url('/identity/sign-in/g-normal.png') transparent 5px 50% no-repeat;
      display: inline-block;
      vertical-align: middle;
      width: 42px;
      height: 42px;
    }
    span.buttonText {
      display: inline-block;
      vertical-align: middle;
      padding-left: 42px;
      padding-right: 42px;
      font-size: 14px;
      font-weight: bold;
      /* Use the Roboto font that is loaded in the <head> */
      font-family: 'Roboto', sans-serif;
    }

</style>