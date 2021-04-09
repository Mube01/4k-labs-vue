<template>
  <div>
    <Header />

    <div class="container">
      <div class="dropdown">
        <Button
          text="Generate New Token"
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
      <TokenList />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Button from "@/components/Button.vue";
import TokenList from "@/components/TokenList.vue";

export default {
  name: "GenerateToken",
  components: {
    Header,
    Button,
    TokenList,
  },
};
</script>

<style scoped>
.dropdown {
  float: right;
  margin: 12px 0;
}
.dropdown-item {
  margin: 2px;
  padding: 8px 15px;
}
</style>