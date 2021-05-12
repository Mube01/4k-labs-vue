<template>
  <SubHeader/>
 
    <div  class="col-md-6" :key="member.user_id" v-for="member in getMembers">
      <router-link :to="{ name: 'StaticProfile', params: { user_code: member.user_id } }">
        <Member :member=member />
      </router-link>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import SubHeader from './SubHeader'
import Member from './Member'
export default {
  name:'Members',
  components:{
    SubHeader,
    Member
  },
  computed:{
    ...mapGetters({
      getMembers:'home/getMembers'
    })
  }
}
</script>

<style>

</style>