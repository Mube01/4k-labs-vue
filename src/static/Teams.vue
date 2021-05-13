<template>
  <div>
    <SubHeader :Title="`@4k Teams`" />
    <div>
      <div v-show="!loading" class="container text-center">
          <div class="row">
            <div :key="division" v-for="division in divisions" id="divisions">
              <router-link
                :to="{ name: 'StaticDivision', params: { division: division.name } }"
              >
                <Team
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
import SubHeader from "./SubHeader";
import Team from "./Team";
export default {
  name: "Teams",
  components: {
    SubHeader,
    Team
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
      loading: false,
    };
  }
};
</script>
<style scoped>
@media screen and (max-width: 700px) {
  .team-container {
    display: block;
    margin-top: 20px;
    margin-left: 20px;
  }
}
</style>