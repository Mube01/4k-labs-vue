<template>
  <div class="card" :style="inlineStyle">
    <div class="card-body">
      <h3 class="card-title">
        {{ name }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Division",
  props: {
    name: String,
    background: String,
  },
  computed: {
    bgImage() {
      return require("@/assets/" + this.background);
    },
    inlineStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`,
      };
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  margin: 20px 5px;
  padding: 120px 110px;
  text-align: center;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  transition: 0.3s;
  background-size: cover;
  background-position: center center;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
h3 {
  font-weight: 700;
  font-size: 30px;
  color: #f2f2f2;
  text-shadow: 3px 0px 7px rgba(81, 67, 21, 0.8),
    -3px 0px 7px rgba(81, 67, 21, 0.8), 0px 4px 7px rgba(81, 67, 21, 0.8);
}
</style>