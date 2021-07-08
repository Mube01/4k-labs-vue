<template>
<div>
    <div class="event-contain" v-bind:style="[ num%2==0? {'grid-template-columns':'40% 60%'}:{'grid-template-columns':'60% 35%'}]">
       
        <div class="img-container" :style="[num%2==0?{'background-image': 'url(/api_v1/get_event/'+`${event['event_image']}`+')','grid-column':'2'}:{'background-image': 'url(/api_v1/get_event/'+`${event['event_image']}`+')','grid-column':'1'}]">
        <div class="date-details">
           
            <div class="day1">
            {{event['event_start'].split("-")[2]}}
            </div>
            <div class="month1">
                {{month[parseInt(event['event_start'].split("-")[1])]}}
            </div>
            <div class="year1">
              /{{event['event_start'].split("-")[0]}}
            </div>
        </div>
 
    </div>
    <div class="event-information" :style="[num%2==0?{'grid-column':'1'}:{'grid-column':'2'}]">
    <h2>{{event['event_title']}}</h2>
    <p>
    {{event['event_description']}}
    </p>
    </div>
    </div>
     
    </div>
</template>
<script>
 
export default {
    name:"Event",
      props: {
    event:{
      required:true,
      type:Object
    },
    num:{
        requried:true,
        type:Number
    }
  },
  data:function (){

      return {
          month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap');
 
.event-contain{
    width:100%;
    padding:25px;
    display: grid;
    grid-template-columns:60% 35%;
    grid-template-rows:  300px 250px;
    grid-column-gap:20px;
    cursor:pointer;
}
.img-container{
    grid-column:1;
    grid-row:1/span all;
    width:100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 15px;
    display: grid;
    grid-template-rows:300px 250px;
}
.event-information{
    grid-column: 2;
    padding:25px;
}
.event-information h2{
text-align:center;
}
.event-information p{
    padding:25px;
}
.date-details{
grid-row:2; 
grid-column: 2;
width:100px;
height:100px;
padding:10px;
background:rgb(233, 112, 14);
margin-left:80%;
margin-top:15%;
border-radius:15px;
color:white;
display: grid;
place-items: center;
border:1px  solid  white;
font-family: 'Courier New', Courier, monospace;
}
@media (max-width:750px){

    .event-contain{
        display: block;
    }
    .img-container{
        width:100%;
        height:450px;
    }
    .date-details{
        margin-top:0;
    }
}
</style>