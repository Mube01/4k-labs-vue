<template>
  <div>
    <div>
      <div v-show="!loading" class="container text-center">
        <div class="row">
          <div
            class="col-md-4"
            :key="division"
            v-for="division in divisions"
            id="divisions"
          >
            <router-link
              :to="{
                name: 'StaticDivision',
                params: { division: division.name },
              }"
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
import Team from "./Team";
export default {
  name: "Teams",
  components: {
    Team,
  },
  data() {
    return {
      divisions: [
        {
          name: "4K BOTS",
          image: "BOTS.jpg",
          details:
            "4K-Bots is a department in 4K-Labs that works on AI and Robotics.",
        },
        {
          name: "4K DEVS",
          image: "DEVS.jpg",
          details:
            "4K-Devs is a department that works on mobile, desktop & web development.",
        },
        {
          name: "4K THINGS",
          image: "THINGS.jpg",
          details:
            "4K-Things is a department in 4K-Labs that works on IOT(Internet of Things).",
        },
      ],
      loading: false,
    };
  },
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
#sub {
  height: 150px;
}
.row {
  margin-top: 100px;
}
</style>
