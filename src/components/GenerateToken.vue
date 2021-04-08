<template>
  <div class="dropdown">
    <Button
      text="Generate Token"
      color="white"
      bgColor="green"
      border="none"
      class="btn dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    />
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <button class="dropdown-item" href="#">Web</button>
      <button class="dropdown-item" href="#">Bots</button>
      <button class="dropdown-item" href="#">Iot</button>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "GenerateToken",
  components: {
    Button,
  },
};
</script>

<style scoped>
.dropdown-item {
  margin: 2px;
  padding: 8px 15px;
}
</style>