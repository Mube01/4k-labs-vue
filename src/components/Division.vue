<template>
  <router-link to="/projects/">
    <div class="card col-md-12">
      <div class="card-body">
        <h3 class="card-title">{{ name }}</h3>
      </div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "Division",
  props: {
    name: String,
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  margin: 20px 0 25px 0;
  padding: 60px;
  text-align: center;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  transition: 0.3s;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
h3 {
  color: #333;
}
</style>