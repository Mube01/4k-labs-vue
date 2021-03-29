<template>
  <div :style="{ border: border }" class="card col-md-12">
    <div @click="onClick()" class="card-body">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "Add",
  props: {
    text: String,
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
.card {
  padding: 3px;
  margin: 20px 0 20px 0;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
}
</style>