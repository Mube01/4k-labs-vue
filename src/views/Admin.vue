<template>
  <div>
    <Header />
    <div class="container">
      <h4>Members</h4>
      <router-link to="/adminProjects"><h4>Projects</h4></router-link>
      <GenerateToken style="float: right; margin: 15px 0 20px 0" />
      <MemberList />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MemberList from "@/components/MemberList.vue";
import GenerateToken from "@/components/GenerateToken.vue";
export default {
  name: "Admin",
  components: {
    Header,
    MemberList,
    GenerateToken,
  },
  data() {
    return {
      showAddProject: false,
    };
  },
  methods: {
    toggleAdd() {
      this.showAddProject = !this.showAddProject;
    },
  },
};
</script>

<style scoped>
h4 {
  float: left;
  font-weight: 700;
  margin: 30px 15px 30px 5px;
  letter-spacing: 0.5px;
}
a h4 {
  color: green;
  opacity: 0.7;
}
a h4:hover {
  opacity: 1;
}
</style>