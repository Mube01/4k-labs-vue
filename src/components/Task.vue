<template>
  <div class="card col-md-12">
    <div class="card-body">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Task title
        </label>
      </div>
      <div class="more">
        <div class="dropdown">
          <i
            class="fa fa-ellipsis-v"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="false"
            aria-expanded="false"
            aria-hidden="false"
          ></i>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Rename</a>
            <a class="dropdown-item" href="#">Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  name: "Task",
};
</script>

<style scoped>
.card {
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
}
.form-check {
  font-weight: 700;
  font-size: 20px;
  float: left;
  margin: 8px 0;
}
.form-check-input {
  width: 18px;
  height: 18px;
}
.form-check-label {
  margin-left: 10px;
}
.more {
  float: right;
  padding: 10px 0;
}
.fa {
  font-size: 20px;
  padding: 0 10px;
}
</style>