<template>
  <router-link to="/task">
    <div class="card col-md-12">
      <div class="card-body">
        <h3 class="card-title">
          Project title
          <p>Division</p>
        </h3>
        <div class="links">
          <a href="#" class="card-link">Github</a>
          <a href="#" class="card-link">Docs</a>
        </div>
        <p style="clear: both">Progress: 35%</p>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 35%"
            aria-valuenow="35"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <hr />
        <p>Members</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Project",
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  margin: 20px 0 25px 0;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  transition: 0.3s;
}
.card-title {
  float: left;
}
.card-title p {
  font-size: 15px;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
.links {
  float: right;
  padding: 25px 0;
}
.progress {
  height: 25px;
}
p {
  font-size: 20px;
  color: #333333;
}
h3 {
  color: #2c3e50;
  font-weight: 700;
  margin: 20px 0 40px 0;
}
hr {
  margin: 30px 0 20px 0;
}
</style>