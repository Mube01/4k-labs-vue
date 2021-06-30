<template>
  <div>
    <MainHeader />
  
      <p style="text-align:center">
     4k labs is a research lab based in addis ababa university
      </p>

    <div id="Teams" class="text">
      
      <h1 style="text-align: center">Teams</h1>

      <Teams />
    </div>
      <h1 style="text-align: center">Events</h1>

    <div id="Events">
      <div :key="event.event_id" v-for="event in events">
        <Event :event="event" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MainHeader from "./MainHeader";
import Event from "./Event";
import Teams from "./Teams";
import Footer from "./Footer";
export default {
  name: "StaticHome",
  components: {
    MainHeader,
    Event,
    Teams,
    Footer,
  },
  methods: {
    ...mapActions({
      getAllInfo: "home/getAllInfo",
    }),
  },
  computed: {
    ...mapGetters({
      events: "home/getEvents",
    }),
  },
  created() {
    this.getAllInfo()
      .then((result) => {})
      .catch((err) => {});
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
div{
  font-family: 'Poppins', sans-serif;
}
.prompt {
  padding: 50px;
  text-align: center;
  font-size: 30px;
  background: #a97c50;
  color: white;
}
#Events{
  display: grid;
  grid-template-columns:50% 50%;
  padding:5px;
}
@media screen and (max-width: 700px) {
  .prompt {
    margin-top: 45px;
  }
}
#Teams {
  margin: 40px 0;
}
#Teams h1 {
  margin-bottom: 20px;
}
#Events h1 {
  margin-bottom: 40px;
}
p {
  font-size: 20px;
}
.text p {
  text-align: justify;
}
</style>