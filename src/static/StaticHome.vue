<template>
  <div>
    <MainHeader/>
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
</style>