<template>
  <div>
  <footer id="footer" class="dark">
 <div class="quick-links">
 <ul>
<a href="https://www.facebook.com/4K4KLABS/">
    <li><i class="fab fa-facebook-square"></i></li>
</a><a href="https://twitter.com/4kbots">
    <li><i class="fab fa-twitter-square"></i></li>
</a><a href="#">
    <li><i class="fab fa-linkedin"></i></li>
</a> 
 </ul>
 </div>
	<div class="copy">
    <h3> &copy;  copyright 2021 4K-Labs</h3>
    </div>
        </footer>
  </div>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style scoped>
#footer{
    padding:50px;
    color:white;
    background:black;
    display: grid;
    grid-template-columns:;
    place-items:center;
}
#footer a{
    color:white  !important;
}
.copy{
    text-align:right;

}
.quick-links ul li{
    display: inline-block;
    padding:10px;

}

</style>