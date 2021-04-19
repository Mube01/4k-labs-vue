<template>
  <Alert/>
  <router-view :key="$route.path" />
  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#00cba9" fill-opacity="0.7" d="M0,128L34.3,112C68.6,96,137,64,206,80C274.3,96,343,160,411,208C480,256,549,288,617,277.3C685.7,267,754,213,823,202.7C891.4,192,960,224,1029,250.7C1097.1,277,1166,299,1234,261.3C1302.9,224,1371,128,1406,80L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
  </svg>
  
</template>


<script>
import Alert from '@/components/Alert.vue'

export default {
  components:{
    Alert
  }
}
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
svg{
margin-top: 35px;
z-index: 0;}
</style>
