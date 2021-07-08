<template>
    <div > 
           <router-link to="/"> <img src="../assets/logo.webp" class="logo"  alt=""> </router-link> 
    <div class="click" id="button">
        <i class="fas fa-bars"></i>
    </div>
    <div class="menu-container" id="menu">
        <ul>
            
              <router-link to="/teams">
                <li>Teams</li>
              
              </router-link>
      
        <router-link to="/members">
                <li>Members</li>
        
        </router-link>
          
            <router-link to="/login">
                <li>Login</li>
            </router-link>

            <router-link to="/projects">
                <li class="focus">Projects</li>
            
            </router-link>
           
        </ul>
    </div>
<div class="container">
     
<div class="main-holder active" :style="{'background-image': ' linear-gradient(to right, rgba(100, 87, 87, 0.52), rgba(0, 0, 0, 0.226)), url(' + require('../assets/slide-1.jpg') + ')'}" >
  
        <div class="img-display">
           <h3>
               Knowledge
           </h3>

        </div>
    </div>
    <div class="main-holder" :style="{'background-image': ' linear-gradient(to right, rgba(100, 87, 87, 0.52), rgba(0, 0, 0, 0.226)), url(' + require('../assets/slide-2.jpg') + ')'}"> 
  
        <div class="img-display">
           <h3>
               Innovation
           </h3>

        </div>
    </div>  <div class="main-holder" :style="{'background-image': ' linear-gradient(to right, rgba(100, 87, 87, 0.52), rgba(0, 0, 0, 0.226)), url(' + require('../assets/slide-3.jpg') + ')'}"> 
  
        <div class="img-display">
           <h3>
               Change
           </h3>
  
        </div>
    </div>
    <div class="navigation active">
        <div class="btn"></div>
        <div class="btn"></div>
        <div class="btn"></div>
    </div> 
</div>
    </div>
</template>
<script>
export default {
    name:"SubHeader",
    mounted(){
var slides =  document.querySelectorAll('.main-holder');
var btns =  document.querySelectorAll('.btn');
const button = document.getElementById("button");
const menu =  document.getElementById("menu");

let current =  1;
button.addEventListener("click",()=>{
    menu.classList.toggle("links")
})
//javascript 
 var manualNav  = function(manual){
slides.forEach((slide)=>{
    slide.classList.remove('active');
    btns.forEach((btn)=>{
        btn.classList.remove('active');
    })
})
    slides[manual].classList.add('active');
     btns[manual].classList.add('active');


 }
 btns.forEach((btn,i)=>{
     btn.addEventListener("click",()=>{
    manualNav(i);
    current = i;
     });
 })
 var repeat =  function(activeClass){
     let active =  document.getElementsByClassName('active');
     let i=1;
    var repeater = ()=>{
        setTimeout(()=>{
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;
            if(slides.length == i){
                i=0;
                console.log(i);
            }
          
        repeater();
        },10000)
    }
    repeater();
 }
 repeat();
}
}

</script>
<style scoped>
.SubHeader{
    height:150px;
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
.container{

    width:100%;
    height:150px;
    border-radius: 15px;
   
}
.logo{
    position: absolute;
    width:100px;
    top:25px;
    left:80px;
    background:white;
    border-radius:200px;
    z-index:100;

  
}
.container .main-holder{
    z-index:1;
    position: absolute;
    margin:auto;
    padding:30px;
    display: grid;
    background-position:center;
    width:100%;
    grid-template-columns:600px 150px 400px;
    grid-template-rows:50px 100px;
    left:50%;
    clip-path: circle(0% at 0 50%);
    transform: translateX(-50%);


}
.container .main-holder.active{
    z-index:10;
    clip-path:circle(150% at 0 50%);
    transition:clip-path 1s ease-in-out;

    }
.menu-container{
    position: absolute;
    height:60px;
    width:500px;
    padding:10px;
    font-size: 20px;
    font-weight: bolder;
    border-radius:15px ;
    top:30px;
    right:70px;
    background-color: rgba(0, 0, 0, 0.61);
    display: grid;
    place-items: center;
    z-index:100;

}
.menu-container a{
    text-decoration: none;
    color:white;
    
}
.menu-container li{
    display: inline-block;
    margin:5px;
    padding:5px;
}
.focus{
    border-left:2px solid rgb(233, 112, 14);
    border-right:2px solid rgb(233, 112, 14);
    background-color: rgb(233, 112, 14);
   
}
.main-holder h3{
    font-size:40px;
    padding:5px;
    color:white;
    background: rgb(233, 112, 14);
    text-align: center;
    text-transform: uppercase;

    
}
.container .navigation .btn{
    background: white;
    width:12px;
    height:12px;
    border-radius:50%;
    margin:10px;
    cursor:pointer;
    display: none;
}
.container .navigation .btn.active{
    background: yellowgreen;
}
.img-display{
    width:350px;
    background-size: contain;
    background-position:center;
    grid-column: 1;
    grid-row: 2;
    padding:25px;

 
}
.click{
    display: none;
}
@media (max-width:750px){
    .menu-container{
        display: none;
  
    } 
    .menu-container li{
        display: block;
    }
      .click{
          display: block;
          position:absolute;
          top:20px;
          right:15px;
          color:rgb(219, 114, 28);
          z-index:1000;
          font-size:25px;
      }
      .links{
          display: block;
          position:absolute;
          top:45px;
          right:5px;
          height:auto;
          width:250px;
          z-index:50000;
      }
  
      .focus{
          padding:50px;
          border-radius: 15px;
      }
    .logo{
      top:15px;
      left:15px;
    }
      .main-holder{
         display: block;
      padding:0;
      }
      .img-display{
          padding:0;
          margin-left: -20px;
      }
}
</style>