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
import MainHeader from '../static/MainHeader';
import Event from '../static/Event';
export default {
  name:"Home",
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
  }
};
</script>

<style scoped>
</style>