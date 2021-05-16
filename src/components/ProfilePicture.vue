<template>
  <div>
    <div>
      <img
        v-if="srcText.length > 0"
        :src="`/api_v1/get_profile/${srcText}?` + new Date().getTime()"
        :style="{ width: imgWeight, height: imgWeight }"
      />
    </div>
    <div
      v-if="srcText == false"
      class="profile text-center"
      :style="{ width: imgWeight, height: imgWeight }"
    >
      <span v-bind:style="{ fontSize: fontSize, top: top }">{{
        name[0].toUpperCase()
      }}</span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
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
    top:{
      type: String,
      default: "20%",
    }
  },
  computed:{
    ...mapGetters({
      isSuperAdmin:'user/isSuperAdmin'
    })
  }
};
</script>

<style scoped>
img {
  border-radius: 50%;
  object-fit: initial;
}
.profile {
  background-color: #177f75;
  border-radius: 50%;
}
span {
  color: white;
  position: relative;
}
</style>