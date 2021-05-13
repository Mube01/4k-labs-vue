<template>
  <div>
    <MainHeader/>
    <div class="prompt">
     <p>4k labs is a research lab based i addis ababa university </p>
    </div>
    <div :key=event.event_id v-for="event in events">
    <Event :event=event />
    </div>
    <router-link :to="{ name: 'AllProjects' }">Projects</router-link>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import MainHeader from './MainHeader';
import Event from './Event';
export default {
  name:"StaticHome",
  components:{
    MainHeader,
    Event,
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
  background: rgb(148, 73, 38);
  color:white;
}
@media screen and (max-width:700px){
  .prompt{margin-top:45px;}
}
</style>