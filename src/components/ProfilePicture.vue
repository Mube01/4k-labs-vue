<template>
  <div>
    <img
      v-if="srcText.length > 0"
      :src="
        `http://127.0.0.1:5000/api_v1/get_profile/${srcText}?` +
        new Date().getTime()
      "
      :style="{ width: imgWeight, height: imgWeight }"
    />
    <div
      v-if="srcText == false"
      class="profile text-center"
      :style="{ width: imgWeight, height: imgWeight }"
    >
      <span v-bind:style="{ fontSize: fontSize }">{{
        name[0].toUpperCase()
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePicture",
  props: {
    srcText: {
      type: String,
      default: "",
    },
    imgWeight: String,
    fontSize: String,
    name: {
      type: String,
      default: "u",
    },
  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
}
.profile {
  background-color: #b3a580;
  border-radius: 50%;
}
span {
  color: white;
  position: relative;
  top: 20%;
}
</style>