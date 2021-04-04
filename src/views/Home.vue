<template>
    <Header />
  <div>
    <h1> THis is Home PAge</h1>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { reject } from 'q';
export default {
    name:"Home",
    methods:{
        logout(){
             var res  = this.$store.dispatch('auth/logoutUser')
             res.then(() => {
                 this.$router.push("/login")
             }).catch((err) => {
                 reject(err)
             });
        }
    },
    components: {
        Header
    }
}
</script>

<style>

</style>