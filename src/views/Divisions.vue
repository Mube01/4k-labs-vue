<template>
  <div class="page-container">
    <div class="content-wrap">
      <Loading v-show="loading" />
      <Header v-show="!loading" />
      <div v-show="!loading" class="text-center">
        <p>Welcome to 4K Labs</p>
      </div>
      <div v-show="!loading" class="container text-center">
        <div class="row">
          <div :key="division" v-for="division in divisions" id="divisions">
            <router-link
              :to="{ name: 'Projects', params: { division: division.name } }"
            >
              <Division
                :name="division.name"
                :background="division.image"
                :details="division.details"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
    <Wave />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Division from "@/components/Division.vue";
import Loading from "@/components/Loading.vue";
import Wave from "@/components/Wave.vue";

import { mapActions, mapGetters } from "vuex";
export default {
  name: "Divisions",
  computed: {
    ...mapGetters({
      user_info: "user/isSuperAdmin",
    }),
  },
  methods: {
    ...mapActions({
      fetchProject: "projects/getAllProjects",
    }),
  },
  created() {
    this.fetchProject()
      .then((result) => {
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      divisions: [
        {
          name: "BOTS",
          image: "BOTS.jpg",
          details:
            "4K-Bots is a department in 4K-Labs that works on AI and Robotics.",
        },
        {
          name: "DEVS",
          image: "DEVS.jpg",
          details:
            "4K-Devs is a department that works on mobile, desktop and web development.",
        },
        {
          name: "THINGS",
          image: "THINGS.jpg",
          details:
            "4K-Things is a department in 4K-Labs that works on IOT(Internet of Things).",
        },
      ],
      loading: true,
    };
  },
  components: {
    Header,
    Division,
    Loading,
    Wave,
  },
};
</script>

<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
}
.content-wrap {
  padding-bottom: 26.5rem;
}

p {
  font-size: 25px;
  font-weight: 700;
  margin: 30px 0 20px 0;
}
</style>