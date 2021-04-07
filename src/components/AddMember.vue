<template>
  <button
    @click="onClick()"
    :style="{ background: bgColor, color: color, border: border }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    bgColor: String,
    color: String,
    border: String,
  },
  methods: {
    onClick() {
      this.$emit("toggle-add");
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 45px;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  margin: 2px 0 7px 0;
  opacity: 0.7;
  font-weight: 600;
  transition: 0.5s;
}
button:hover {
  opacity: 1;
}
</style>
