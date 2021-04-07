<template>
  <div>
    <Header />
    <div class="container">
      <div class="dropdown">
        <Button
          text="Generate Token"
          color="white"
          bgColor="green"
          border="none"
          class="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        />
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button class="dropdown-item" href="#">Web</button>
          <button class="dropdown-item" href="#">Bots</button>
          <button class="dropdown-item" href="#">Iot</button>
        </div>
      </div>

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
.dropdown-item {
  margin: 2px;
  padding: 8px 15px;
}
</style>