<template>
  <router-view />
</template>

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
</style>
