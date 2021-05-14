<template>
  <div>
    <MainHeader/>
    <div class="prompt">
     <p>4k labs is a research lab based in addis ababa university </p>
    </div>
    
    <div id="Teams">
      <h1 style="text-align:center;">Teams</h1>
      <Teams/>
    </div>

    <div id="Events">
      <h1 style="text-align:center;">Events</h1>
      <div :key=event.event_id v-for="event in events">
        <Event :event=event />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import MainHeader from './MainHeader';
import Event from './Event';
import Teams from './Teams'
import Footer from './Footer'
export default {
  name:"StaticHome",
  components:{
    MainHeader,
    Event,
    Teams,
    Footer
  },
  methods:{
    ...mapActions({
      getAllInfo:'home/getAllInfo'
    })
  },
  computed:{
    ...mapGetters({
      'events':'home/getEvents'
    })
  },
  created(){
    this.getAllInfo().then((result) => {
      
    }).catch((err) => {
      
    });
  }
};
</script>

<style scoped>
.prompt{
  padding:50px;
  text-align:center;
  font-size:30px;
  background: #a97c50;
  color:white;
}
@media screen and (max-width:700px){
  .prompt{margin-top:45px;}
}
#Teams{
  margin: 40px 0;
}
#Teams h1{
margin-bottom: 20px;
}
#Events h1{
  margin-bottom: 40px;
}
</style>