<template>
  <div>
    <div class="login text-center">
      <form class="login" @submit.prevent="register">
        <img class="logo" src="@/assets/logo.webp" />
        <h2>Register</h2>
        <label for="fullname">Full Name</label><br />
        <input
          required
          v-model="fullname"
          type="text"
          id="fullname"
          autocomplete="off"
        />
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
        <br />
        
        <label for="confirm_password">Confirm Password</label><br />
        <input required v-model="confirm_password" type="password" id="confirm_password" />
        <br/>
        <label for="token">Token</label><br />
        <input
          required
          v-model="token"
          type="text"
          id="token"
          autocomplete="off"
        />
        <br />
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
      fullname:"",
      password:"",
      token:"",
      username:"",
      confirm_password:""
    }
  },
  methods: {
    // send user name and password by reading from the form
    register() {
      //check if ther is space on the user name
      if(this.username.indexOf(' ')>0){
        alert("username cant have space")
      }
      // check if confirm passwod and password are the same
      else if(this.password!==this.confirm_password){
        alert("password and confirm password are not same please check your input again")
      }
      else{
         var data = {
        'fullname':this.fullname,
        'username':this.username,
        'password':this.password,
        'token':this.token
        }
        this.$store.dispatch('auth/register',data).then((result) => {
           this.$router.push({name:'Login'});
        }).catch((err) => {
          console.log(err)
        });
      }
    },
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
  border: 2px solid green;
}
button {
  padding: 10px 45px;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  margin: 25px 0 7px 0;
  opacity: 0.7;
  color: white;
  background: green;
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