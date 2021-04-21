<template>
  <img :src="require('@/assets/' + source)" />
</template>

<script>
export default {
  name: "GalleryImage",
  props: {
    source: String,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  border-radius: 5px;
}
</style>