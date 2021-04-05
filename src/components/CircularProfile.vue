<template>
  <div class="avatar-circle">
    <span class="initials">{{member.username[0].toUpperCase()}}</span>
  </div>
</template>

<script>
export default {
  props:{
    member:{
      type:Object
    }
  }
};
</script>

<style scoped>
.avatar-circle {
  width: 40px;
  height: 40px;
  background-color: blue;
  text-align: center;
  float: right;
  margin: 0 3px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
}
.initials {
  position: relative;
  top: 7px; /* 25% of parent */
  font-size: 20px; /* 50% of parent */
  line-height: 20px; /* 50% of parent */
  color: #fff;
  font-weight: bold;
}
</style>