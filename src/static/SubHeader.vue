<template>
  <div id="header">
    <div class="container">
      <router-link :to="{ name: 'Home' }"
        ><img class="logo" src="@/assets/logo.png"
      /></router-link>
      <div class="nav">
        <router-link class="link_class" :to="{ name: 'AllProjects' }"> <li>Projects</li> </router-link>
        <router-link class="link_class" :to="{ name: 'Teams' }"> <li>Teams</li> </router-link>
        <router-link class="link_class" :to="{ name: 'Members' }"><li>Members</li> </router-link>
        <router-link class="link_class" :to="{ name: 'Login' }"><li>Login</li> </router-link>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubHeader",
  components: {},
  props: {
    Title: Text,
  },
  methods: {
    toggleMenu() {
      const menuItem = document.getElementById("menu-elements");
      const messageName = document.getElementById("messageName");
      const btnFind = document.getElementById("btnFind");
      menuItem.classList.toggle("hello");
      messageName.classList.toggle("move");
      if (btnFind) {
        btnFind.classList.toggle("button-move");
      }
    },
  },
};
</script>
<style scoped>
#header {
  width: 100%;
  height: 90px;
  background: url("../assets/rename.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
  overflow: hidden;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
}
img.logo {
  height: 90px;
  margin: 5px 0;
}
.nav {
  float: right;
  padding: 20px 0;
}
.fa {
  color: white;
  font-size: 25px;
  margin: 10px 0 0 25px;
}
.link_class {
  padding: 10px 0;
  cursor: pointer;
  margin-left: 15px;
  color: white;
}
.link_class:hover {
  color: #d1905e;
}
.fas {
  font-size: 30px;
  margin-left: 10px;
}
</style>
