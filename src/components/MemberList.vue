<template>
  <div class="card col-md-12">
    <div class="card-body">
      <div class="user">
        <router-link :to="{name:'Profile',params:{user_code:member.user_id}}">
          <ProfilePicture
          style="float: left"
          imgWeight="45px"
          fontSize="20px"
          :name="member.username[0]"
          :srcText="member['profile_picture']"
          />
        </router-link>
        <div class="flex-container">
          <div>{{ member.username }}</div>
          <div>{{ roleGetter(member.Role) }}</div>
          <div>{{ member.Division }}</div>
        </div>
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
            <li
              :key="role"
              v-for="role in roles"
              class="dropdown-item"
              @click="changerole(role, member.user_id)"
            >
              {{ role }}
            </li>
            <li class="dropdown-submenu">
              <a class="dropdown-item" tabindex="-1">Change Division</a>
              <ul class="dropdown-menu">
                <li
                  :key="division"
                  class="dropdown-item"
                  v-for="division in divisions"
                  @click="changedivision(division, member.user_id)"
                >
                  {{ division }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";
import ProfilePicture from "./ProfilePicture.vue";
export default {
  name: "MemberList",
  components: { ProfilePicture },
  data() {
    return {
      roles: ["Intern", "Regular Member", "Team Leader", "Alumni", "Admin"],
      divisions: ["DEVS", "BOTS", "THINGS"],
    };
  },
  props: {
    member: {
      type: Object,
    },
  },
  methods: {
    ...mapActions({
      changeRole: "members/changeRole",
      changeDivsion: "members/changeDivsion",
    }),
    changerole(role, user_id) {
      this.changeRole({ user_id, role })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {});
    },
    changedivision(division, user_id) {
      this.changeDivsion({ user_id, division })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {});
    },
  },
  computed:{
    ...mapGetters({
      roleGetter:'getRoleByKey'
    })
  }
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
  display: inline;
}
.more {
  float: right;
}
.flex-container {
  float: left;
  width: 70%;
  margin-left: 10px;
  text-align: justify;
}
.flex-container > div {
  padding: 10px 0;
  font-size: 20px;
  font-weight: 600;
  display: inline-block;
  display: -moz-inline-box;
  *display: inline;
  zoom: 1;
  width: 33%;
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