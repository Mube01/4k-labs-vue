<template>
  <div>
    <div class="parent">
    <header>
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="../assets/video/background.mp4" type="video/mp4">
        </video>
        <div class="container h-10  ">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="text-white">
              <router-link :to="{ name: 'Home' }">
                <img src="../assets/logo.webp" alt="" class="logo"/>
              </router-link>
            </div>
          </div>
        <div class="text-center">
            <ul style="float:right" class="link" id="menu-elements">
                <router-link style="color:white" :to="{ name: 'AllProjects' }"> <li>Projects</li> </router-link>
                <router-link style="color:white" :to="{ name: 'Teams' }"> <li>Teams</li> </router-link>
                <router-link style="color:white" :to="{ name: 'Members' }"><li>Members</li> </router-link>
                <router-link style="color:white" class="link_class" :to="{ name: 'Login' }"><li>Login</li> </router-link>
              </ul>
          </div>

          <div class="middle">
        <div class="message">
          <h2 id="messageName">4K Labs</h2>
        </div>

        <a href="#details">
          <button class="btn-find" id="btnFind">Recent &darr;</button></a
        >
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

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
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
  height: 550px;
  background: rgba(39, 38, 38, 0.438);
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
  width: 80px;
}
.links a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 17px;
}
.logo {
  width: 100px;
  margin-left: 50px;
  cursor: pointer;
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
  margin-top: 100px;
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
  }
  .link {
    display: none;
  }
  .hello {
    display: block;
    position: absolute;
    top: 70px;
    right: 30px;
    overflow-x: visible;
  }
  .hello li {
    display: block;
    text-align: left;
    border-bottom: 1px solid white;
    padding: 5px;
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
