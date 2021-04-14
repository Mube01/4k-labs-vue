<template>
  <div v-show="loading" class="center">
      
      <div>
        <img src="@/assets/logo.gif" alt="">
        <h3 style="margin-left:120px">Loading...</h3>
      </div>

  </div>
</template>   

<script>
export default {
    name:'Loading'
}
</script>

<style scoped>
.center{
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>