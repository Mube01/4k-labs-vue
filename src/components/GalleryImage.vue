<template>
  <img :src="`http://127.0.0.1:3000/api_v1/get_event_gallery/${source}`" />
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