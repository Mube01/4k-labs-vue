<template>
  <SubHeader id="sub" />

     <div id="wr">

    
    <div   id="ctrl" style="margin-top:-60px;">
    <div>
      <Member :member="Admin[0]"/>
    </div>
  
    <div>
      <div style="margin-top:-10px;"> 
       <div class="divider-container">
 
</div>

        <div class="disp-improve">
             <div class="divider">
        <span> Message  </span>
    </div>
            <p>
            @4k we foster Knowledge to impact our society through technology. 
            All our Members are encouraged to experiment and impact with the help of our collaberative 
          divisions we bring ideas to life. We focus on developing reconfigurable, Adaptable, environmentally
           friendly, power efficient hardware & Software systems under the consideration of AI. The team of 4K Labs
            are from a wide variety of disciplines and talent so as to create an Interdisciplinary environment.
             These have helped us to complete projects in a defined manner.</p></div>
   </div>
    </div>
 </div>
     </div>
    <div class="row ml-1">
 <div>
   
  </div>
    <div class="row  ml-auto mr-3">
  <div class="row">
  <h3>Filter By</h3> 
  </div>  
<select    v-model="filterValueOne" @change="filter" name="" id="" class="form-control col-md-4">
      <option value="">--Specialization--</option>
      <option value="BOTS">BOTS</option>
      <option value="DEVS">DEVS</option>
      <option value="THINGS">THINGS</option>

    </select>
    <select  v-model="filterValueTwo" @change="filter" name="" id="" class="form-control col-md-4" style="margin-left:15px;">
      <option value="">--Position--</option>
      <option value="1">REGULAR MEMBER</option>
      <option value="0">INTERN</option>
      <option value="4">MANAGER</option>
      <option value="2">TEAM LEADER</option>
      <option value="3">ALUMNI</option>

      

    </select>
    
    
  </div>
    </div>
 

  <div class="row container-fluid" v-show="!notFiltering" >
    <p class="title">Members List</p>
  </div>

  <div class="row container-fluid" v-show="!notFiltering">
        <div v-show="filterResults.length==0">
        <h2 style="text-align:center;font-weight:bolder;width:100%;">No Member Found</h2>
    </div>
    <div
      class="col-md-3"
    
      :key="member.user_id"
      v-for="member in filterResults"
    >

      <Member :member="member"/>

    </div>
  </div>

  <div class="row container-fluid" v-show="notFiltering">
    <p class="title">4K BOTS</p>
  </div>

  <div class="row container-fluid" v-show="notFiltering">
    <div
      class="col-md-3"
      v-show="member.Division === 'BOTS'"
      :key="member.user_id"
      v-for="member in getMembers"
    >
      <Member :member="member" v-show=" member['Role']==Filter || passRole"/>
    </div>
  </div>

  <div class="row container-fluid" v-show="notFiltering">
    <p class="title">4K DEVS</p>
  </div>
  <div class="row container-fluid" v-show="notFiltering">
    <div
      class="col-md-3"
      v-show="member.Division === 'DEVS'"
      :key="member.user_id"
      v-for="member in getMembers"
    >
      <Member :member="member" />
    </div>
  </div>

  <div class="row container-fluid" v-show="notFiltering">
    <p class="title">4K THINGS</p>
  </div>
  <div class="row container-fluid" v-show="notFiltering">
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
 
    },filter(){
        this.filterResults = this.getMembers;
        
        
      if(this.filterValueOne != "" || this.filterValueTwo != ""){
       this.notFiltering =  false;
     
       if(this.filterValueOne != ""){
        
       this.filterResults = this.filterResults.filter(item=>{return item.Division == this.filterValueOne})
      console.log(this.filterResults.length)
       }if(this.filterValueTwo != ""){
      this.filterResults = this.filterResults.filter(item=>{return item.Role == this.filterValueTwo})
     
        
      }
    
 
    },
    filterBySpecialization(e){
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
          
           if(Position != ''){
          
           this.Filter = Position;
           this.passRole = false;
 
           }else{
             this.passRole=true;
             this.Filter='';
           }


   }else{
      
        this.notFiltering  = true;
        this.filterResults = this.getMembers;
      
      }
    },

    getRole(pos){
      return this.Roles[pos];
    }
  },
  created(){
   this.getMembers;
   this.Admin = this.getMembers.filter(mem=>{return mem.Role=='4'});
   console.log(this.Admin);
  },
  computed: {
    ...mapGetters({
      getMembers: "home/getMembers",
    }),
  },
  data(){
   return{
     filterResults:[],
     notFiltering:true,
     filterValueOne:'',
     filterValueTwo:'',
     Admin:[],
     filterResult:[],
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
#wr{
  width:100%;
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
}
#ctrl{
  display: grid;
  grid-template-columns: 40% 65%;

  padding:15px;
  grid-gap:50px;
}
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
 .divider{
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid #000; 
    line-height: 0.1em;
    margin: 10px 0 20px; 
    font-size:35px;
 
 }
 .divider span{
    padding:0 10px; 
    background:#fff;
    padding:25px;
    width:80%;
    font-family: 'Roboto Condensed', sans-serif;
 }
 .divider-container{
    margin-top:20px;
    width:100%;
    padding:50px;
  

 }
 .disp-improve{
   text-align: justify;
   font-weight:bold;
    width:70%;
 }
 .disp-improve p{
   padding:10px;
   font-size: 20px;
 }
 @media (max-width:750px){
   .disp-improve{
     width:100%;
     padding:10px;
   }
.container-fluid{
  display:block !important;
}
#ctrl{
  display:block;
}
 }
</style>
