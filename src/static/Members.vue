<template>
  <SubHeader id="sub" />
    <div class="row ml-1">
 <div>
   
  </div>
    <div class="row  ml-auto mr-3">
  <div class="row">
  <h3>Filter By</h3> 
  </div>

 
  
  
<select   @change="filterBySpecialization($event)" name="" id="" class="form-control col-md-4">
      <option value="">Specialization</option>
      <option value="BOTS">BOTS</option>
      <option value="DEVS">DEVS</option>
      <option value="THINGS">THINGS</option>

    </select>
    <select @change="filterByPosition($event)" name="" id="" class="form-control col-md-4" style="margin-left:15px;">
      <option value="">Position</option>
      <option value="1">REGULAR MEMBER</option>
      <option value="0">INTERN</option>
      <option value="4">MANAGER</option>
      <option value="2">TEAM LEADER</option>
      <option value="3">ALUMNI</option>

      

    </select>
    
    
  </div>
    </div>
 

  <div class="row container-fluid" v-show="Bots">
    <p class="title">4K BOTS</p>
  </div>

  <div class="row container-fluid" v-show="Bots">
    <div
      class="col-md-3"
      v-show="member.Division === 'BOTS'"
      :key="member.user_id"
      v-for="member in getMembers"
    >
      <Member :member="member" v-show=" member['Role']==Filter || passRole"/>
    </div>
  </div>

  <div class="row container-fluid" v-show="Devs">
    <p class="title">4K DEVS</p>
  </div>
  <div class="row container-fluid" v-show="Devs">
    <div
      class="col-md-3"
      v-show="member.Division === 'DEVS'"
      :key="member.user_id"
      v-for="member in getMembers"
    >
      <Member :member="member" v-show=" member['Role']==Filter || passRole"/>
    </div>
  </div>

  <div class="row container-fluid" v-show="Things">
    <p class="title">4K THINGS</p>
  </div>
  <div class="row container-fluid" v-show="Things">
    <div
      class="col-md-3"
      v-show="member.Division === 'THINGS'"
      :key="member.user_id"
      v-for="member in getMembers"
    >
      <Member :member="member" v-show=" member['Role']==Filter || passRole" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SubHeader from "./SubHeader";
import Member from "./Member";
export default {
  name: "Members",
  components: {
    SubHeader,
    Member,
  },
  methods:{
    compare( a, b ) {
      if ( a.Role < b.Role ){
        return 1;
      }
      if ( a.Role > b.Role ){
        return -1;
      }
      return 0;
    },
    filterBySpecialization(e){
      // console.log(e.target.value);
       const Specialization = e.target.value;
      switch(Specialization){
        case 'DEVS':
          this.Bots = false;
          this.Things = false;
          this.Devs = true;
          break;
        case 'BOTS':
          this.Devs = false;
          this.Things = false;
          this.Bots = true;

          break;
          case 'THINGS':
          this.Bots = false;
          this.Devs = false;
          this.Things = true;
          break;
          default:
          this.Bots = true;
          this.Devs = true;
          this.Things = true;
          break;
      }
    },
    filterByPosition(e){

           const Position = e.target.value;
           console.log(Position);
          
           if(Position != ''){
          
           this.Filter = Position;
           this.passRole = false;
 
           }else{
             this.passRole=true;
             this.Filter='';
           }
           console.log(this.passRole);

        
    },
    getRole(pos){
      return this.Roles[pos];
    }
  },
  created(){
    this.getMembers.sort(this.compare);
  },
  computed: {
    ...mapGetters({
      getMembers: "home/getMembers",
    }),
  },
  data(){
   return{
     Bots:true,
     Devs:true,
     Things:true,
     Filter:'Nothing',
     passRole:true,
     Roles:{ 0:'Intern',
             1:'Regular Member',
            2:'Team Leader',
            3:'Alumni',
           4:'Admin'}
   }

  }
};
</script>

<style scoped>
 
#sub {
  margin-bottom: 100px;
  height: 150px;
}
.row {
  padding: 0 40px;
}
.title {
  margin-top: 20px;
  margin-left: 30px;
  font-weight: 700;
  color: #a97c50;
  font-size: 35px;
}
</style>
