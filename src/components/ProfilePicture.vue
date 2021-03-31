<template>
  <img :src="srcText" :style="{ width: imgWeight, height: imgWeight }" />
</template>

<script>
export default {
  name: "ProfilePicture",
  props: {
    srcText: String,
    imgWeight: String,
  },
};
</script>

<style scoped>
img {
  border-radius: 10%;
}
</style>