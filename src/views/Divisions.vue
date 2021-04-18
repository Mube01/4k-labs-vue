<template>
  <div>
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
  <svg
    v-show="!loading"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#a97c50"
      fill-opacity="1"
      d="M0,224L34.3,213.3C68.6,203,137,181,206,170.7C274.3,160,343,160,411,181.3C480,203,549,245,617,229.3C685.7,213,754,139,823,138.7C891.4,139,960,213,1029,229.3C1097.1,245,1166,203,1234,160C1302.9,117,1371,75,1406,53.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
    ></path>
  </svg>
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
  },
};
</script>

<style scoped>
p {
  font-size: 25px;
  font-weight: 700;
  margin: 30px 0 20px 0;
}
</style>