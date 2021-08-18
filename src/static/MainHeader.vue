<template>
  <div>
    <img src="../assets/logo.webp" class="logo" alt="" />
    <div class="black-top">

    </div>
    <div class="click" id="button">
      <i class="fas fa-bars"></i>
    </div>
    <div class="menu-container" id="menu">
      <ul>
        <a href="#divisions">
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
        <div class="img-display">
        <span>knowledge</span><br>
        <span>innovation</span><br>
        <span>change <strong>.</strong></span><br>
        </div>
    <div class="container">
      <div class="main-display"></div>
      <div
        class="main-holder active"
        :style="{
          'background-image':
            '  url(' +
            require('../assets/slide-1.jpg') +
            ')',
        }"
      >
      
      </div>
      <div
        class="main-holder"
        :style="{
          'background-image':
            'url(' +
            require('../assets/slide-2.jpg') +
            ')',
        }"
      >
 
      </div>
      <div
        class="main-holder"
        :style="{
          'background-image':
            ' url(' +
            require('../assets/slide-3.jpg') +
            ')',
        }"
      >
    
      </div>
      <div class="navigation active">
        <div class="betn"></div>
        <div class="betn"></div>
        <div class="betn"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainHeader",

  mounted() {
    var slides = document.querySelectorAll(".main-holder");
    var btns = document.querySelectorAll(".betn");
    var button = document.getElementById("button");
    var menu = document.getElementById("menu");
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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
*{
   
      margin:0;
    padding:0;
    box-sizing:border-box;
   
}
.black-top{
  display:none;
}

.container {
  width: 100%;
  height: 600px;
  /* border-radius: 15px; */
   font-family: 'Roboto Condensed', sans-serif;

}
.logo{
    position: absolute;
    width:150px;
    top:5px;
    left:80px;
    background:#fff;
    border-radius:200px;
    z-index:100;
    cursor:pointer;

  
}
.container .main-holder {
   font-family: 'Roboto Condensed', sans-serif;

     height:100vh;
  z-index: 1;
  position: absolute;
  margin: auto;
  padding: 30px;
  display: grid;
  background-position: center;
 
  width: 100%;
  grid-template-columns: 600px 150px 400px;
  grid-template-rows: 50px 450px;
 
  left: 50%;
  clip-path: circle(0% at 0 50%);
  transform: translateX(-50%);
}
.container .main-holder.active {
  z-index: 10;
  clip-path: circle(150% at 0 50%);
  transition: clip-path 1s ease-in-out;

  /* transition-property: clip-path; */
}

.menu-container{
   font-family: 'Roboto Condensed', sans-serif;
    width:100%;
    padding:30px;
    font-size: 20px;
    font-weight: bolder;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: row-reverse;
    z-index:100;

    
}
.menu-container a{
    text-decoration: none;
    color:#f47522;
    
}
.menu-container li{
    display: inline-block;
    margin:5px;
    padding:5px;
}
.focus {
  border-left: 2px solid rgb(233, 112, 14);
  border-right: 2px solid rgb(233, 112, 14);
  /* color:rgb(233, 112, 14); */
  background-color: rgb(233, 112, 14);
  /* padding:50px; */
  /* line-height:30px; */
  /* border-radius: 5px; */
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
.img-display{
   font-family: 'Roboto Condensed', sans-serif;

    position: absolute;
    z-index:1000;
    margin-top:135px;
    margin-left:40px;
    width:400px;
    height:380px;
    background-size: contain;
    background-position:center;
    padding:20px;
    padding-top:50px;
    background:#0f0f0e85;
 
}
.img-display > span{
   
    padding:10px;
     font-size:75px;
     font-weight:bolder;
     color:white;
     text-transform: capitalize;
     margin-left:10px;

}
.img-display p{
    padding:25px;
    background:rgba(10, 10, 10, 0.678);
    color:white;
    font-size:25px; 
    font-weight:bolder;
    width:450px;
    margin-top:5px;
}
.container .navigation{
  position: absolute;
  z-index: 10; 
  display: flex;
  bottom:-10px;
  left:50%;
  transform: translateX(-50%);
 
}
.container .navigation .betn {
  background: white;
  width: 12px !important;
  height: 12px !important;
  border-radius: 50% !important;
  margin: 10px !important;
  cursor: pointer !important;
}
.conainer .navigation .betn.active {
  background: yellowgreen;
}
.content-devider {
  position: absolute;
  width: 100%;
  height: auto;
  background: white;
  z-index: -1000;
  /* margin-top:-100px; */
}
.intro-info {
  text-align: center;
  padding: 20px;
  /* margin-top:200px; */
  font-size: 25px;
  font-weight: bolder;
  color: black;
}
.main-display {
  height: 100vh;
  z-index: 0;
  position: absolute;
  margin: auto;
  padding: 30px;
  display: grid;
  width: 100%;
  grid-template-columns: 600px 150px 400px;
  grid-template-rows: 50px 450px;
  border-radius: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: url(../assets/logo.png) no-repeat;
  background-size: contain;
  background-position: center;
  background-color: rgb(29, 31, 30);
}
.evnt-header {
  margin-top: 40px;
  text-align: center;
  padding: 50px;
  font-size: 45px;
}
.events {
  padding: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 15px;
  margin: auto;
}
.event {
  margin: auto;
  height: auto;
  width: 100%;
  padding: 20px;
  position: relative;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 150px 400px;
  grid-template-rows: 200px 200px;
  background-image: linear-gradient(
      to right,
      rgba(51, 44, 42, 0.575),
      rgba(0, 0, 0, 0.239)
    ),
    url(../assets/training.png);
  background-position: center;
  background-size: cover;
  place-items: center;
  cursor: pointer;
  /* border-left:5px solid rgb(255, 94, 0); */
}

.date {
  grid-column: 1;
  grid-row: 1;
  width: 150px;
  height: 200px;
}

.num {
  grid-row: 1;
  font-size: 50px;
  background-color: rgb(233, 112, 14);
  color: white;
  padding: 20px;
  width: 150px;
  border-radius: 15px;
  text-align: center;
}
.month {
  font-size: 50px;
  margin-left: 10px;
  color: white;
  grid-row: 1;
}
.year {
  grid-row: 1;

  color: white;
}
.description {
  grid-column: 2;
  grid-row: 1;
  font-size: 20px;
  color: white;
}
.event-image {
  grid-column: 3;
  background-position: center;
  background-size: cover;
}
.img-shower {
  grid-column: 1;
  grid-row: 1 / span all;
  width: 100%;
  background: url(../assets/training.png);
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  margin-left: 10px;
}

.footer {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 500px 500px;
  padding: 25px;
  background: rgb(24, 22, 22);
}
.footer li {
  list-style: none;
  padding: 5px;
}
.footer a {
  color: white;
  font-size: 20px;
  text-decoration: none;
}
.copy {
  text-align: center;
  color: white;
  grid-column: 1 / span all;
}
.profiles {
  padding: 50px;
}
.profile {
  width: 300px;
  display: grid;
  grid-template-rows: 250px 100px;
  cursor: pointer;
}
.profile-img {
  background-image: linear-gradient(
    to right,
    rgba(231, 108, 26, 0.349),
    rgba(231, 108, 26, 0.349)
  );
  background-position: left;
  background-size: cover;
  border-radius: 15px;
}
.name {
  text-align: center;
  margin-top: 200px;
  padding: 15px;
  background: rgb(233, 112, 14);
  color: white;
}
.profile-details {
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  color: white;
  background: rgb(199, 97, 14);
}
.profile-division {
  padding: 10px;
}
.profile-socials {
  padding: 30px;
  background-color: rgb(219, 114, 28);
  color: white;
}
.linked-in {
  float: left;
  margin-left: 50px;
}
.github {
  float: right;
  margin-right: 50px;
}
.click {
  display: none;
}
@media (max-width: 750px) {
   .black-top{
     display: block;
   width:100%;
   height:110px;
   background:black;
   padding:10px;
   position:absolute;
   z-index:99;
 }
  .menu-container {
    display: none;
  }
  .menu-container li {
    display: block;
  }
  .click {
    display: block;
    position: absolute;
    top: 20px;
    right: 15px;
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
    top: 5px;
    left: 5px;
  }
  .main-holder {
    display: block;
    padding: 0;
  }
    .img-display{
       padding:10px;
       top:20px;
       left:-30px;
       width:350px;
       height:300px;
       border-radius:10px;
    }
    .img-display p{
        width:auto;
        height:auto;
        margin-left:0;

    }.img-display >span{
        font-size:60px;
    }

  .events {
    display: block;
  }
  .event {
    grid-template-columns: 100px 250px;
    grid-template-rows: 300px 100px;
    grid-gap: 5px;
    padding: 5px;
    margin-top: 10px;
  }
  .date {
    width: auto;
  }
  .description {
    width: auto;
  }
  .num {
    font-size: 20px;
    width: 70px;
  }
  .month {
    font-size: 15px;
  }
  .footer {
    display: block;
  }
     .main-holder{
       height:50vh;
   }
    .main-holder.active , .main-display{
        height:65vh;
 
        display: block;
 
     
    }
}
</style>
