<template>
  <div>
    <MainHeader />
    <div class="prompt">
      <p>
        4K Labs is a Research & Development laboratory at Addis Ababa University
        under the department of computer science.
      </p>
    </div>

    <div class="text container">
      <h1 style="text-align: center; margin: 40px 0">4K-Labs</h1>
      <p>
        4K Labs is a place where an idea comes to life and starts to breathe. We
        focus on developing reconfigurable, Adaptable, environmentally friendly,
        power efficient hardware & Software systems under the consideration of
        AI. With our exceptional design team we introduce aesthetics in our
        projects.
      </p>
    </div>

    <div id="Teams" class="text">
      
      <h1 style="text-align: center">Teams</h1>
      <p>
      The team of 4K Labs are from a wide variety of disciplines and talent so as to create an Interdisciplinary environment. These have helped us to complete projects in a defined manner. 
      Our team is a combination of Electrical engineers, software engineers, Mechanical engineers & designers. 4K Labs- team is really humble and smooth to communicate with.
      </p>
      <Teams />
    </div>

    <div id="Events">
      <h1 style="text-align: center">Events</h1>
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
.prompt {
  padding: 50px;
  text-align: center;
  font-size: 30px;
  background: #a97c50;
  color: white;
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