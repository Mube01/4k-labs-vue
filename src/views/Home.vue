<template>
  <div>
    <Header />
    <div class="container">
      <div class="text-center mt-3">
        <span>Welcome to 4K Labs</span>
      </div>

      <Division name="Devs" />
      <Division name="Bots" />
      <Division name="Things" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Division from "@/components/Division.vue";
import { reject } from "q";
export default {
  name: "Home",
  methods: {
    logout() {
      var res = this.$store.dispatch("auth/logoutUser");
      res
        .then(() => {
          this.$router.push("/login");
        })
        .catch((err) => {
          reject(err);
        });
    },
  },
  components: {
    Header,
    Division,
  },
};
</script>

<style scoped>
span {
  font-size: 25px;
  font-weight: 700;
  margin: 20px 0;
}
</style>