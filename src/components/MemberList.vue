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
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Change Role
          </button>
          <ul
            class="dropdown-menu multi-level"
            role="menu"
            aria-labelledby="dropdownMenu"
          >
            <li class="dropdown-item"><a href="#">Intern</a></li>
            <li class="dropdown-item"><a href="#">Member</a></li>
            <li class="dropdown-item"><a href="#">Alumni</a></li>
            <li class="dropdown-divider"></li>
            <li class="dropdown-submenu">
              <a class="dropdown-item" tabindex="-1" href="#">Team Leader</a>
              <ul class="dropdown-menu">
                <li class="dropdown-item"><a href="#">Web</a></li>
                <li class="dropdown-item"><a href="#">Bots</a></li>
                <li class="dropdown-item"><a href="#">IoT</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePicture from "./ProfilePicture.vue";
export default {
  name: "MemberList",
  components: { ProfilePicture },
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
  padding: 12px 0;
}
.more {
  float: right;
  padding: 5px 0;
}
span {
  font-size: 20px;
  font-weight: 600;
}
.btn {
  border-radius: 5px;
  background-color: #e6e6e6;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 10px;
}

.dropdown-submenu {
  position: relative;
}

.dropdown-submenu > .dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: -6px;
  margin-left: -1px;
  -webkit-border-radius: 0 6px 6px 6px;
  -moz-border-radius: 0 6px 6px;
  border-radius: 0 6px 6px 6px;
}

.dropdown-submenu:hover > .dropdown-menu {
  display: block;
}

.dropdown-submenu > a:after {
  display: block;
  content: " ";
  float: right;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px 0 5px 5px;
  border-left-color: #333;
  margin-top: 10px;
  margin-right: -12px;
}

.dropdown-submenu:hover > a:after {
  border-left-color: #fff;
}

.dropdown-submenu.pull-left {
  float: none;
}

.dropdown-submenu.pull-left > .dropdown-menu {
  left: -100%;
  margin-left: 10px;
  -webkit-border-radius: 6px 0 6px 6px;
  -moz-border-radius: 6px 0 6px 6px;
  border-radius: 6px 0 6px 6px;
}
.dropdown-item a,
a.dropdown-item {
  color: #333;
  font-size: 20px;
  font-weight: 400;
}
</style>