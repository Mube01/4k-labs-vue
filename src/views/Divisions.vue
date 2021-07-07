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
          <div
            class="col-md-4"
            :key="division"
            v-for="division in divisions"
            id="divisions"
          >
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
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Division from "@/components/Division.vue";
import Loading from "@/components/Loading.vue";

import { mapActions, mapGetters } from "vuex";
export default {
  name: "Divisions",
  computed: {
    ...mapGetters({
      user_info: "user/getUserInformation",
      projects: "projects/listOfProjects",
    }),
  },
  methods: {
    ...mapActions({
      fetchProject: "projects/getAllProjects",
      getAllPortalInfo: "getAllPortalInfo",
    }),
  },
  created() {
    // if it is its frist
    if (this.projects === "") {
      this.loading = true;
      this.getAllPortalInfo()
        .then((result) => {
          this.loading = false;
        })
        .catch((err) => {});
    } else {
      this.getAllPortalInfo()
        .then((result) => {
          this.loading = false;
        })
        .catch((err) => {});
    }
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
            "4K-Devs is a department that works on mobile, desktop & web development.",
        },
        {
          name: "THINGS",
          image: "THINGS.jpg",
          details:
            "4K-Things is a department in 4K-Labs that works on IOT(Internet of Things).",
        },
      ],
      loading: false,
    };
  },
  components: {
    Header,
    Division,
    Loading,
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