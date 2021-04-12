<template>
  <div v-show="loading" class="center">
      <div class="spinner-border" role="status">  
        <p>4K</p>
        <span class="sr-only">Loading...</span>
      </div>
      <h3 style="margin-left:-30px">Loading</h3>
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