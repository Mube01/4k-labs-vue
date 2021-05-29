<template>
  <div>
    <div class="parent">
      <header>
        <div class="overlay"></div>
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src="../assets/video/background.mp4" type="video/mp4" />
        </video>
        <div class="container">
          <router-link :to="{ name: 'Home' }">
            <img src="../assets/logo.webp" alt="" class="logo" />
          </router-link>
          <div class="text-center">
            <i class="fas fa-bars menu-icon" v-on:click="toggleMenu()"></i>

            <ul style="float: right" class="link" id="menu-elements">
              <a class="link_class" href="#Teams"> <li>Teams</li> </a>
              <a class="link_class" href="#Events"><li>Events</li></a>
              <router-link class="link_class" :to="{ name: 'AllProjects' }">
                <li>Projects</li>
              </router-link>

              <router-link class="link_class" :to="{ name: 'Members' }"
                ><li>Members</li>
              </router-link>
              <router-link class="link_class" :to="{ name: 'Login' }"
                ><li>Login</li>
              </router-link>
              <router-link class="link_class" :to="{ name: 'Register' }"
                ><li>Register</li>
              </router-link>
            </ul>
          </div>

          <div class="middle">
            <div class="message">
              <h2 id="messageName">4K Labs</h2>
              <a href="#Events">
                <button class="btn-find" id="btnFind">Recent &darr;</button></a
              >
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainHeader",
  components: {},
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
.menu {
  position: absolute;
  top: 20px;
  right: 20px;
  color: rgb(148, 73, 38);
}

header {
  position: relative;
  background-color: black;
  height: 55vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header ul {
  margin-top: -50px;
  margin-right: -200px;
}
header ul li {
  display: inline-block;
  padding: 10px;
}
.desc {
  background: white;
  height: 250px;
  color: white;
}
.head {
  text-align: center;
  background: rgb(148, 73, 38);
  color: white;
  padding: 70px;
  font-size: 20px;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.parent {
  margin: 0;
  padding: 0;
  height: auto;
}
.vid {
  position: absolute;
  top: 0;
  width: 100%;
  overflow-y: hidden;

  z-index: -10000;
}
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: none;
}
.links {
  margin-right: 0px;
  padding: 15px;
}
.links li {
  display: inline-block;
  list-style: none;
  height: 40px;
  color: white !important;
  width: 80px;
}
.links li:hover {
  color: #a97c50 !important;
}
.links a {
  text-decoration: none;
  color: rgb(255, 255, 255) !important;
  font-size: 17px;
}
.links a:hover {
  color: #a97c50;
}
.logo {
  margin-top: 10px;

  cursor: pointer;
  width: 100px;
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
.btn-find {
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
  border: 2px solid rgb(175, 81, 38);
  background: none;
  color: rgb(201, 92, 41);
  font-size: 15px;
}
.middle {
  width: 100%;
  margin-top: -70px;
  text-align: center;
}
.message {
  color: white;
  text-align: center;
}
.message h2 {
  font-size: 40px;
  margin-top: 150px;
  padding: 20px;
}
.menu-items {
  border-bottom: 3px solid transparent;
  text-align: center;
}
.menu-items:hover {
  border-bottom: 3px solid rgb(255, 255, 255);
  transition: all 0.2s ease-in;
}
.menu-icon {
  display: none;
  color: rgb(175, 81, 38);
}
@media screen and (max-width: 700px) {
  header video {
    display: none;
  }

  .parent {
    height: 325px;
    background: url(../assets/rename.png);
  }
  .message h2 {
    margin-top: 0;
  }
  .menu-icon {
    display: block;
    color: rgb(175, 81, 38);
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .link {
    display: none;
  }
  .hello {
    display: block;
    position: absolute;
    top: 80px;
    right: 220px;
    overflow-x: visible;
  }
  .hello li {
    display: block;
    text-align: left;
    margin: -15px 0;
  }
  .move {
    width: 65%;
  }
  .button-move {
    margin-right: 35%;
  }
  .vid {
    display: none;
  }
  .links {
    margin-right: 50px;
  }
  .middle {
    margin-top: 0;
  }
}
</style>
