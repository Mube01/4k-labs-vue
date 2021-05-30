<template>
  <div>
    <footer id="footer" class="dark">
      <div class="quick-links">
        <ul>
          <a href="https://www.facebook.com/4K4KLABS/">
            <li><i class="fab fa-facebook-square"></i></li> </a
          ><a href="https://twitter.com/4kbots">
            <li><i class="fab fa-twitter-square"></i></li> </a
          ><a href="#">
            <li><i class="fab fa-linkedin"></i></li>
          </a>
        </ul>
      </div>
      <h3>4K-Labs, Department of Computer Science, Addis Ababa University.</h3>
      <div class="copy">
        <h3>Copyright &copy; 2021 4K-Labs.</h3>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#footer {
  padding: 50px;
  color: white;
  background: black;
  display: grid;
  place-items: center;
}
#footer a {
  color: white !important;
}
.copy {
  text-align: right;
}
.quick-links ul li {
  display: inline-block;
  padding: 5px;
}
h3 {
  font-size: 20px;
}
</style>