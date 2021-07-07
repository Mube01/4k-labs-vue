<template>
      <Header />
      <div class="container">
        <router-link :to="{ name: 'Admin' }"><h4>Members</h4></router-link>
        <router-link :to="{ name: 'AdminProjects' }"
          ><h4>Projects</h4></router-link
        >
        <h4>Events</h4>
        <router-link :to="{ name: 'GenerateToken' }"
          ><h4>Generate Token</h4></router-link
        >
        <Add
          @toggle-add="toggleAdd"
          :text="showAddEvent ? 'X Close' : '+ Add New Event'"
          :border="showAddEvent ? '3px dashed #B6212D' : '3px dashed #177F75'"
        />
        <div v-show="showAddEvent">
          <AddEvent @eventAdded="toggleAdd" />
        </div>
        <div class="row">

          <div :key="event" v-for="event in events" class="col-md-6">
            <router-link :to="{ name: 'EventDetail', params:{'event_id':event.event_id} }">
                <Event :event="event" />
            </router-link>
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import Header from "@/components/Header.vue";
import Event from "@/components/Event.vue";
import Add from "@/components/Add.vue";
import AddEvent from "@/components/AddEvent.vue";

export default {
  name: "Events",
  computed:{
    ...mapGetters({
      'events':'events/getAllEvents'
    })
  },
  components: {
    Header,
    Event,
    Add,
    AddEvent,
  },
  data() {
    return {
      showAddEvent: false,
    };
  },
  methods: {
    ...mapActions({
      getEvents:'events/getEvents',
      errorAlert: "errorAlert",
      successAlert: "successAlert",
    }),
    toggleAdd() {
      this.showAddEvent = !this.showAddEvent;
    },
  },
  created(){
    console.log('loadinf Events')
    this.getEvents().then((result) => {
      this.successAlert('events loaded sucessfully')
    }).catch((err) => {
      this.errorAlert('error loading events')
    });
  }
};
</script>

<style scoped>
h4 {
  float: left;
  font-weight: 700;
  margin: 30px 15px 30px 5px;
  letter-spacing: 0.5px;
}
a h4 {
  color: #a97c50;
  margin-right: 25px;
}
a h4:hover {
  color: #8b5e3b;
}
</style>