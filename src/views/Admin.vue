<template>
  <div>
    <Header />
    <div class="container">
      <Button
        text="Generate Token"
        color="white"
        bgColor="green"
        border="none"
      />

      <h4>Members</h4>
      <MemberList />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Button from "@/components/Button.vue";
import MemberList from "@/components/MemberList.vue";
export default {
  name: "Admin",
  components: {
    Header,
    Button,
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
Button {
  float: right;
  margin: 15px 0 20px 0;
}
h4 {
  clear: both;
  font-weight: 700;
  margin: 20px 0 20px 5px;
  letter-spacing: 1px;
}
</style>