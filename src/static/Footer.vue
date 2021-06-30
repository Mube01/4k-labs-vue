<template>
 
  <div class="footer">
    <div class="quick-links">
       <ul>
           <a href="">
               <li>Home</li>
           </a>
           <a href="">
               <li>Members</li>
           </a>
           <a href="">
               <li>Login</li>
           </a>
       </ul>
    </div>
   <div class="socials">
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
   <div class="copy">
       <h3> &copy; 2021 4k labs </h3>
   </div>
   </div>
 
</template>

<script>
export default {
    name:"Footer"
}
</script>
<style scoped>
.fa-facebook-square{

}
.fa-twitter-square{
    /* margin-left:19px; */
}
.fa-instagram{
    /* margin-left:-3px; */
}
.fab{
    font-size:18px;
    padding:0px;
}
.footer{
    width:100%;
    display: grid;
    grid-template-columns:500px 500px;
    padding:25px;
    background:rgb(24, 22, 22);
    bottom:0;
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
    color:white;
    grid-column:1/span all;
}
@media (max-width:750px){
  .footer{
      display: block;
  }
}
    
</style>