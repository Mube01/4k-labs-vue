<template>
  <div>
    <Header />
    <div class="container">
      <h4>Members</h4>
      <router-link to="/adminProjects"><h4>Projects</h4></router-link>
      <router-link to="/generate"
        ><a href="#" class="link">Generate Token</a></router-link
      >
      <MemberList />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MemberList from "@/components/MemberList.vue";
export default {
  name: "Admin",
  components: {
    Header,
    MemberList,
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
.link {
  float: right;
  padding: 25px 0;
}
</style>