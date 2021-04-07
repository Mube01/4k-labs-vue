<template>
  <div class="card col-md-12">
    <div class="card-body">
      <div class="user">
        <ProfilePicture fontSize="20px" name="M" />
        <span>Mubarek Jemal</span>
      </div>
      <div class="more">
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Change role
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Intern</a>
            <a class="dropdown-item" href="#">Member</a>
            <a class="dropdown-item" href="#">Team Leader</a>
            <a class="dropdown-item" href="#">Alumni</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePicture from "./ProfilePicture.vue";
export default {
  name: "MemberList",
  components: {
    ProfilePicture,
  },
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
.user {
  float: left;
}
.more {
  float: right;
  padding: 10px 0;
}
span {
  font-size: 20px;
  font-weight: 600;
}
.btn {
  border-radius: 10px;
}
</style>