<template>
  <div>
    <Header />
    <div class="container">
      <div class="text-center mt-3">
        <span>Welcome to 4K Labs</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Division from "@/components/Division.vue";
import {mapActions} from 'vuex'
import { reject } from "q";
export default {
  name: "Divisions",
  methods: {
    ...mapActions({
      fetchProject:'projects/getAllProjects'
    })
  },
  created(){
    this.fetchProject().then((result) => {
      console.log('successully fetch projects ',result)
    }).catch((err) => {
      console.log(err)  
    });
  },
  data() {
    return {
      divisions:['BOTS','DEVS','THINGS']
    }
  },
  components: {
    Header,
    Division,
  },

};
</script>

<style scoped>
span {
  font-size: 25px;
  font-weight: 700;
  margin: 20px 0;
}
</style>