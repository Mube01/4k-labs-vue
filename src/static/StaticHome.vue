<template>
  <div>
    <MainHeader />

  <div class="divider-container">
    <h2 class="divider">
        <span> Who we Are </span>
    </h2>
</div>
<div class="who-description-container">
    <div class="who-description">
        <div class="description-holder">
             
            <p>
                @4k we foster Knowledge to impact our society through technology. 
                All our Members are encouraged to experiment and impact with the help of our collaberative
                divisions we bring ideas to life. We focus on developing reconfigurable,
                Adaptable, environmentally friendly, power efficient hardware & Software systems
                 under the consideration of AI. The team of 4K Labs are from a wide variety of disciplines
                 and talent so as to create an Interdisciplinary environment.
                 These have helped us to complete projects in a defined manner.
            </p>
        </div>
        <div class="image-holder">
    
        </div>
    </div>
</div>

    <div id="divisions">
        <div class="divider-container specialization">
    <h2 class="divider">
        <span> Specialization </span>
    </h2>
</div>
      <div id="Teams">
        <Teams />
      </div>
    </div>
      <div class="divider-container specialization ">
    <h2 class="divider">
        <span> Events </span>
    </h2>
</div>
  <div id="events-container">
   <div id="Events">
      <div :key="event.event_id" v-for="event in events">
        <Event :event="event" />
      </div>
    </div>
  </div>

  <div class="divider-container specialization">
    <h2 class="divider">
        <span> Projects </span>
    </h2>
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
/* @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap'); */

* ,html{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
   scroll-behavior: smooth;
}

.prompt {
  padding: 50px;
  text-align: center;
  font-size: 30px;
  background: #a97c50;
  color: white;
}
#events-container{
  width:100%;
  display:grid;
  place-items: center;
}
#Events {
  padding: 10px;
  /* width: 100%; */
  display: grid;
  grid-template-columns:350px 350px 350px;
  grid-gap: 15px;
  grid-gap: 15px;
  margin: auto;
  margin-top: 70px;
}
 .divider{
    width: 400px; 
    text-align: center; 
    border-bottom: 1px solid #000; 
    line-height: 0.1em;
    margin: 10px 0 20px; 
    font-size:35px;
 
 }
 .divider span{
    padding:0 10px; 
    background:#fff;
    padding:25px;
    font-family: 'Roboto Condensed', sans-serif;
 }
 .divider-container{
    margin-top:200px;
    width:100%;
    padding:50px;
    display: grid;
    place-items:center;
 }
  .who-description-container{
     width:100%;
     display: grid;
     place-items:center;
     
 }
 .who-description{
     margin-top:80px;
     display:grid;
     grid-template-columns: 450px 550px;
     grid-template-rows:450px;
     grid-gap:50px;
 }
 
 .description-holder p{
    padding:10px;
    font-size:20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    line-height:1.5em;
    text-align:justify;
    margin-top:25px;
 }
 .who-description .image-holder{
     width:100%;
     height:100%;
     background:url(../assets/slide-1.jpg);
     background-size:cover;
     background-position:center;
    }
  .specialization{
    margin-top:50px;
  }

@media screen and (max-width: 700px) {
  
  #Events {
    display: block;
  }
  .prompt {
    margin-top: 45px;
  }
  #Teams {
    height: 1250px;
    margin: 40px 0;
  }
   .divider-container{
     margin-top:20px;
 }
 .navigation{
   display:none;
 }
 .divider{
     width:100%;
 }
 .who-description{
   margin-top:0;
        display: block;
    }
  .who-description .image-holder{
     width:100%;
     height:350px;
 }
}
#divisions {
  /* padding: 20px; */
}
#Teams {
  margin-top: 50px;
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
