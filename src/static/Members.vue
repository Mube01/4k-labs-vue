<template>
  <SubHeader id="sub" />

  <div class="row container-fluid">
    <p class="title">4K BOTS</p>
  </div>
  <div class="row container-fluid">
    <div
      class="col-md-3"
      v-show="member.Division === 'BOTS'"
      :key="member.user_id"
      v-for="member in getMembers"
    >
      <Member :member="member" />
    </div>
  </div>

  <div class="row container-fluid">
    <p class="title">4K DEVS</p>
  </div>
  <div class="row container-fluid">
    <div
      class="col-md-3"
      v-show="member.Division === 'DEVS'"
      :key="member.user_id"
      v-for="member in getMembers"
    >
      <Member :member="member" />
    </div>
  </div>

  <div class="row container-fluid">
    <p class="title">4K THINGS</p>
  </div>
  <div class="row container-fluid">
    <div
      class="col-md-3"
      v-show="member.Division === 'THINGS'"
      :key="member.user_id"
      v-for="member in getMembers"
    >
      <Member :member="member" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SubHeader from "./SubHeader";
import Member from "./Member";
export default {
  name: "Members",
  components: {
    SubHeader,
    Member,
  },
  computed: {
    ...mapGetters({
      getMembers: "home/getMembers",
    }),
  },
};
</script>

<style scoped>
* {
  overflow-x: hidden;
}
#sub {
  margin-bottom: 100px;
  height: 150px;
}
.row {
  padding: 0 40px;
}
.title {
  margin-top: 20px;
  margin-left: 30px;
  font-weight: 700;
  color: #a97c50;
  font-size: 35px;
}
</style>
