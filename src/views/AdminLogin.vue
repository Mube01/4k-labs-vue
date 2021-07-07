<template>
<Header />
    <div class="container text-center">
    <div class="login">
      <form class="login" onsubmit="return false">
       <div class="full col-md-12">
          <div id="LoginButton">
            <button class="buttonText"><i class="fab fa-google"></i> Login With Gmail</button>
          </div>
        </div>
      </form>
    </div>
  </div>
    <div class="footer text-center">
      <p>4K Labs - 2021</p>
    </div>
</template>

<script>
import Header from "@/static/SubHeader.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AdminLogin",
  components:{Header},
  data() {
    return {
      password: "",
      username: "",
    };
  },
  computed: {
    ...mapGetters({
      isAuthenticated: ["auth/isAuthenticated"],
      isSuperAdmin:['user/isSuperAdmin']

    }),
  },
  methods: {
    ...mapActions({
      errorAlert:   "errorAlert",
      successAlert: "successAlert",
      login_admin:  "auth/adminLogin",
      logoutUser:"auth/logoutUser2"

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
    onSignIn (user) {
      var id_token = user.getAuthResponse().id_token;
      this.login_admin(id_token).then((result) => {
          this.successAlert("login successfull");
          this.$router.push({ name: "Divisions" });
        })
        .catch((err) => {
          this.errorAlert(err.message);
        });
    },
    onFailure(err){
      this.errorAlert(err)
    }
  },
  mounted() {

    if(this.isSuperAdmin!=true){
      this.logoutUser()
    }
    if (this.isAuthenticated) {
      this.$router.push({ name: "Divisions" });
    }
    else{
      this.getGmail(); 
    }
  },
};
</script>

<style scoped>
.fab{
color:white;
font-size: 25px;
float: left;
margin-top: 2px;
}
.login {
  margin: 0 auto;
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
}
.footer p {
  font-size: 17px;
  color: #333;
}
</style>