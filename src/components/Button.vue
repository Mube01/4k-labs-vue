<template>
  <button :style="{ background: color }">
    <i class="fa fa-plus-circle" aria-hidden="true"></i> {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
};
</script>

<style scoped>
button {
  padding: 10px 45px;
  border-radius: 5px;
  font-size: 20px;
  color: white;
  border: none;
  margin: 2px 0 7px 0;
  opacity: 0.7;
  transition: 0.5s;
}

button:hover {
  opacity: 1;
}
</style>