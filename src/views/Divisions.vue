<template>
  <div>
    <Loading v-show="loading" />
    <Header v-show="!loading" />
    <div class="text-center mt-3">
      <span>Welcome to 4K Labs</span>
    </div>
    <div v-show="!loading" class="container text-center">
      <div class="row">
        <div :key="division" v-for="division in divisions" id="divisions">
          <router-link
            :to="{ name: 'Projects', params: { division: division.name } }"
          >
            <Division :name="division.name" :background="division.image"
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Division from "@/components/Division.vue";
import Loading from "@/components/Loading.vue";
import { mapActions,mapGetters } from "vuex";
export default {
  name: "Divisions",
  computed:{
    ...mapGetters({
      'user_info':'user/isSuperAdmin'
    })
  },
  methods: {
    ...mapActions({
      fetchProject: "projects/getAllProjects",
    }),
  },
  created(){
    this.fetchProject().then((result) => {
      this.loading = false
    }).catch((err) => {
      console.log(err)  
    });
  },
  data() {
    return {
      divisions: [
        {
          name: "BOTS",
          image: "BOTS.jpg",
        },
        {
          name: "DEVS",
          image: "DEVS.jpg",
        },
        {
          name: "THINGS",
          image: "THINGS.jpg",
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
span {
  font-size: 25px;
  font-weight: 700;
  margin: 20px 0;
}
.row {
  transform: translate(0%, 50%);
}
@media screen and (max-width: 480px) {
  .row {
    transform: translate(0%, 0%);
  }
}
</style>