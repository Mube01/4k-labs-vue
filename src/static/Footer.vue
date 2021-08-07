<template>
 
  <div class="footer">
    <div class="quick-links">
        <img src="../assets/logo.webp" alt="" class="logo-footer">
       <ul>
         <p>
             4klabs is a research lab based in Addis Ababa university 4kilo Campus with teams focusing on specific  areas to overcome challenges through Technology
         </p>
         <li>
           <div class="loc-notice"> <i class="fa fa-map-marker"></i>  <h3 class="move-right"> Addiss Ababa , Ethiopia</h3></div> 
         </li>
         <li>
            <div class="loc-notice"> <i class="fa fa-envelope"></i>  <h3 class="move-right"> 4Klabs@gmail.com</h3></div> 
          </li>
       </ul>
    </div>
   <div class="socials">
       <h2>Social Media</h2>
   <ul>
       <a href="https://www.facebook.com/4K4KLABS/">
           <li>Facebook <i class="fab fa-facebook-square"></i> </li>
       </a>
       <a href="https://twitter.com/4kbots">
           <li>Twitter <i class="fab fa-twitter-square"></i></li>
       </a>
       <a href="">
           <li>Instagram <i class="fab fa-instagram"></i></li>
       </a>
       <a href="">
           <li></li>
       </a>
   </ul>
   </div>
      <div class="contact-form">
       <h2>Contact Us</h2>
       <form action="#" class="form-group">
        <div class="form-group">
            <input type="text"   name="email" class="txt-input" placeholder="Enter Email Here">
        </div>
        <div class="form-group">
            <textarea name="" id="" class="txt-input" placeholder="enter your message here"></textarea>
        </div>
        <div class="form-group">
            <button class="btn-submit">
                Send Message
            </button>
        </div>
       </form>
  
   </div>
   <div class="copy">
       <h3 class="cp"> &copy; 2021 4k labs </h3>
   </div>
   </div>
 
</template>

<script>
export default {
    name:"Footer"
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
 
 .fab{
     font-size:25px;
 }
 .cp{
     font-size: 15px;
 }
.footer{
    font-family: 'Roboto Condensed', sans-serif;
    position:relative;
    width:100%;
    display: grid;
    grid-template-columns:400px 400px 300px;
    padding:25px;
    grid-gap:25px;
    background:rgb(24, 22, 22);
}
.footer li{
    list-style: none;
    padding:5px;
    width:170px;
    
}
.footer a{
    color:white;
    font-size:20px;
    text-decoration:none;
}
.copy{
    text-align:center;
    color:rgb(128, 127, 125);
    grid-column:1/span all;
    font-size:10px;
 
}
    .contact-form{
        margin-top:40px;
    }
    .contact-form h2{
color:white;
    }
    .txt-input{
        width:100%;
        padding:10px;
        border:none;
        margin-top:35px;
        background: rgb(128, 127, 125);

    }
    .txt-input::placeholder{
        color:rgba(255, 255, 255, 0.836);
        font-family: 'Roboto Condensed', sans-serif;
    }
    .btn-submit{
        margin-top:15px;
        width:100%;
        padding:15px;
        border:none;
        background-color: #f47522;
        color: white;
    }
.logo-footer{
width:150px;
background:white;
border-radius:200px;
/* margin-left:40px; */
 }
 .quick-links{
     width:350px;
 }
 .quick-links p{
    color:rgb(128, 127, 125);
    padding:15px;
    line-height: 2em;
    font-size:15px;
 
 }
 .quick-links li{
     padding:10px;
 }
 .loc-notice{
    color:rgb(128, 127, 125);
 }
 .move-right{
     margin-left:30px;
     font-size:15px;
 }
 .fa-map-marker , .fa-envelope {
     color:#f47522;
     float:left;
     font-size:20px;
 }
 .socials{
     margin-top:40px;
 
 }
 .socials ul{
     margin-top:10px;
 }
 .socials li{
     padding:10px;
   
 }
 .socials h2{
     color:white;
 }
 .socials a{
     color:rgb(128, 127, 125);
       width:120px;
 }
@media (max-width:750px){
  .footer{
      display: block;
  }
}
    
</style>