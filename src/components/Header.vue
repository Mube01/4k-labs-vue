<template>
  <div id="header">
    <div class="container">
      <router-link :to="{name:'Home'}"
        ><img class="logo" src="@/assets/logo.webp"
      /></router-link>
      <div class="nav">
        <div v-show="isAuthenticated">
          <router-link :to="{name:'Me'}">
            <ProfilePicture
              imgWeight="45px"
              fontSize="20px"
              :name="user_info.username[0]"
              :srcText="user_info['profile_picture']"
            />
          </router-link>
        </div>

        <router-link v-show="!isAuthenticated" class="link_class" to="/login">
          Login
        </router-link>

        <router-link v-show="!isAuthenticated" class="link_class" to="/register"
          >| Register
        </router-link>

        <i class="fa fa-bell" aria-hidden="true"></i>

        <a class="link_class" @click="logout">Logout</a>

        <router-link class="link_class" :to="{name:'Admin'}">Admin</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePicture from "./ProfilePicture";
import mapGetters from "vuex";
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
          this.$router.push({name:'Login'});
        })
        .catch((err) => {
          reject(err);
        });
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    user_info() {
      return this.$store.getters["user/getUserInformation"];
    },
  },
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 90px;
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
.link_class {
  padding: 10px 0;
  margin-left: 15px;
}
</style>