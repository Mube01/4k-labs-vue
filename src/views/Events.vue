<template>
  <div class="page-container">
    <div class="content-wrap">
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
          <AddEvent />
        </div>
        <div class="row">
          <div class="col-md-6">
            <router-link :to="{ name: 'EventDetail' }"> <Event /></router-link>
          </div>
          <div class="col-md-6"><Event /></div>
        </div>
      </div>
    </div>
    <Wave />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Event from "@/components/Event.vue";
import Wave from "@/components/Wave.vue";
import Add from "@/components/Add.vue";
import AddEvent from "@/components/AddEvent.vue";

export default {
  name: "Events",
  components: {
    Header,
    Event,
    Wave,
    Add,
    AddEvent,
  },
  data() {
    return {
      showAddEvent: false,
    };
  },
  methods: {
    toggleAdd() {
      this.showAddEvent = !this.showAddEvent;
    },
  },
};
</script>

<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
}
.content-wrap {
  padding-bottom: 26.5rem;
}
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