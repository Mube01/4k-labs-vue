<template>
  <div>
    <router-link to="/">
      <img src="../assets/logo.webp" class="logo" alt="" />
    </router-link>
        <div class="black-top">

    </div>
    <div class="click" id="button">
      <i class="fas fa-bars"></i>
    </div>
    <div class="menu-container" id="menu">
      <ul>
        <a href="/#divisions">
          <li>Specialization</li>
        </a>

        <router-link to="/members">
          <li>Teams</li>
        </router-link>

        <router-link to="/login">
          <li>Login</li>
        </router-link>

        <router-link to="/projects">
          <li class="focus">Projects</li>
        </router-link>
      </ul>
    </div>
  
  </div>
</template>
<script>
export default {
  name: "SubHeader",
  mounted() {
    var slides = document.querySelectorAll(".main-holder");
    var btns = document.querySelectorAll(".btn");
    const button = document.getElementById("button");
    const menu = document.getElementById("menu");

    let current = 1;
    button.addEventListener("click", () => {
      menu.classList.toggle("links");
    });
    //javascript
    var manualNav = function(manual) {
      slides.forEach((slide) => {
        slide.classList.remove("active");
        btns.forEach((btn) => {
          btn.classList.remove("active");
        });
      });
      slides[manual].classList.add("active");
      btns[manual].classList.add("active");
    };
    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        current = i;
      });
    });
    var repeat = function(activeClass) {
      let active = document.getElementsByClassName("active");
      let i = 1;
      var repeater = () => {
        setTimeout(() => {
          slides[i].classList.add("active");
          btns[i].classList.add("active");
          i++;
          if (slides.length == i) {
            i = 0;
          }

          repeater();
        }, 10000);
      };
      repeater();
    };
    repeat();
  },
};
</script>
<style scoped>
/* .SubHeader {
  height: 150px;
} */
.black-top{
  display:none;
}
* {
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
}
.container {
  width: 100%;
  height: 150px;
  border-radius: 15px;
  overflow: hidden;
}
.logo {
 position: absolute;
    width:150px;
    top:15px;
    left:80px;
    background:#fff;
    border-radius:200px;
    z-index:100;
    cursor:pointer;

}
.container .main-holder {
  z-index: 1;
  position: absolute;
  margin: auto;
  padding: 30px;
  display: grid;
  background-position: center;
  width: 100%;
  grid-template-columns: 600px 150px 400px;
  grid-template-rows: 50px 100px;
  left: 50%;
  clip-path: circle(0% at 0 50%);
  transform: translateX(-50%);
}
.container .main-holder.active {
  z-index: 10;
  clip-path: circle(150% at 0 50%);
  transition: clip-path 1s ease-in-out;
}
.menu-container {
  font-family: 'Roboto Condensed', sans-serif;
    width:100%;
    padding:50px;
    font-size: 20px;
    font-weight: bolder;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: row-reverse;
    z-index:100;
}
.menu-container a {
  text-decoration: none;
  color: #f47522;
}
.menu-container li {
  display: inline-block;
  margin: 5px;
  padding: 5px;
}
.focus {
  border-left: 2px solid rgb(233, 112, 14);
  border-right: 2px solid rgb(233, 112, 14);
  background-color: rgb(233, 112, 14);
  color:white;
}
.main-holder h3 {
  font-size: 40px;
  padding: 5px;
  color: white;
  background: rgb(233, 112, 14);
  text-align: center;
  text-transform: uppercase;
}
.container .navigation .btn {
  background: white;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 10px;
  cursor: pointer;
  display: none;
}
.container .navigation .btn.active {
  background: yellowgreen;
}
.img-display {
  width: 350px;
  background-size: contain;
  background-position: center;
  grid-column: 1;
  grid-row: 2;
  padding: 25px;
}
.click {
  display: none;
}
@media (max-width: 750px) {
  .menu-container {
    display: none;
  }
  .menu-container li {
    display: block;
  }
  .click {
    display: block;
    position: absolute;
    top: 30px;
    right: 50px;
    color: rgb(219, 114, 28);
    z-index: 1000;
    font-size: 25px;
  }
  .links {
    display: block;
    position: absolute;
    top: 45px;
    right: 5px;
    height: auto;
    width: 250px;
    z-index: 50000;
  }

  .focus {
    padding: 50px;
    border-radius: 15px;
  }
  .logo {
    top: 10px;
    left: 15px;
  }
  .main-holder {
    display: block;
    padding: 0;
  }
  .img-display {
    padding: 0;
    margin-left: -20px;
  }
     .black-top{
     display: block;
   width:100%;
   height:110px;
   background:black;
   top:0;
   left:0;
   padding:10px;
   position:absolute;
   z-index:99;
 }
}
</style>
