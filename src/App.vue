<template>
  <router-view :key="$route.path" />
</template>


<script>
import Alert from "@/components/Alert.vue";

export default {
  components: {
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f2f2f2;
}

#header {
  width: 100%;
  height: 90px;
  background: white;
  display: block;
  overflow: hidden;
  border-bottom: 1px solid #e6e6e6;
}

.container {
  padding: 0 50px;
}

a {
  font-weight: bold;
  color: #42b983;
  font-size: 20px;
  text-decoration: none !important;
}

a.router-link-exact-active {
  color: #2c3e50;
}

.fab {
  font-size: 40px;
  margin: 0 15px;
  float: right;
  color: #a97c50;
}
.fab:hover {
  color: #8b5e3b;
}

@media screen and (max-width: 1200px) {
  .fab {
    float: left;
  }
}
</style>
