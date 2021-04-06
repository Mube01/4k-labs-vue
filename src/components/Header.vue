<template>
  <div id="header">
    <div class="container">
      <router-link to="/"
        ><img class="logo" src="@/assets/logo.webp"
      /></router-link>
      <div class="nav">
        <div v-show="isAuthenticated" class="dropdown">
          <ProfilePicture
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="false"
            aria-expanded="false"
            aria-hidden="false"
            imgWeight="45px"
            fontSize="20px"
            :name="user_info.username[0]"
            :srcText="user_info['profile picture']"
          />
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <router-link to="/me"
              ><a class="dropdown-item" href="#">Profile</a>
            </router-link>
            <a class="dropdown-item" href="#" @click="logout">Logout</a>
          </div>
        </div>

        <router-link v-show="!isAuthenticated" class="link_class" to="/login"> Login </router-link>

        <router-link v-show="!isAuthenticated" class="link_class" to="/register">| Register </router-link>
        
        <i class="fa fa-bell" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePicture from "./ProfilePicture";
import mapGetters from "vuex"
import { reject } from "q";
export default {
  name: "Header",
  components: {
    ProfilePicture,
  },
  methods: {
    logout() {
      var res = this.$store.dispatch("auth/logoutUser");
      res
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => {
          reject(err);
        });
    },
  },
  computed:{
      isAuthenticated(){
        return this.$store.getters['auth/isAuthenticated']
      },
      user_info(){
        return this.$store.getters['user/getUserInformation']
      }
  }
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 150px;
  background: white;
  display: block;
  overflow: hidden;
  border-bottom: 1px solid #e6e6e6;
}
img.logo {
  float: left;
  height: 70px;
  margin: 10px 0;
}
.nav {
  float: right;
  padding: 20px 0;
}
.fa {
  color: #333;
  font-size: 25px;
  margin: 10px 0 0 25px;
}
.dropdown-menu {
  position: relative;
  z-index: 100;
}
.dropdown-item {
  position: relative;
  z-index: 100;
}
</style>