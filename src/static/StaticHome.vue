<template>
  <div>
    <MainHeader />
  
      <p style="text-align:center">
     4k labs is a research lab based in Addis Ababa University
      </p>

<div  id="divisions" >
    <div id="Teams">
      <h1 style="text-align: center">Divisions</h1>
      <Teams />
    </div>
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
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
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
    padding:10px;
    width:100%;
    display: grid;
    grid-template-columns:49% 49%;
    grid-gap: 15px;
    margin:auto;
    margin-top:70px;

}
@media screen and (max-width: 700px) {
  #Events{
    display: block;
  }
  .prompt {
    margin-top: 45px;
  }
  #Teams {
  height:1250px;
  margin: 40px 0;
}
}
#divisions{
padding: 20px;}
#Teams{
  margin-top:50px;
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