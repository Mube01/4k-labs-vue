<template>
  <SubHeader id="sub"/>
 
 <div class="row container-fluid">
    <div  class="col-md-3" v-show="!(parseInt(member.Role) === 0)" :key="member.user_id" v-for="member in getMembers">
      <router-link :to="{ name: 'StaticProfile', params: { user_code: member.user_id } }">
        <Member :member=member />
      </router-link>
    </div></div>
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

<style scoped>
*{
  overflow-x:hidden ;
}
.row{
  margin-top:100px;
  padding:20px;
  width:100%;
}
#sub{
  height:150px;
}
</style>