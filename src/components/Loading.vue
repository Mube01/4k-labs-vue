<template>
  <div v-show="loading" class="center">
    <div>
      <img src="@/assets/logo.gif" alt="" />
      <h3>Loading...</h3>
    </div>
  </div>
</template>   

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
img {
  width: 120px;
}
h3 {
  font-size: 20px;
  margin: 15px 0 0 18px;
}
</style>