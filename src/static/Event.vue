<template>
<div>
    <div class="event"  :style="{'background-image': ' linear-gradient(to right, rgba(51, 44, 42, 0.575), rgba(0, 0, 0, 0.239)),'+ `url(/api_v1/get_event/${event['event_image']})`}">
            <div class="date">
        <div class="num">
            <h2>{{event['event_start'].split("-")[2]}}</h2>
        </div>
        <span class="month">{{event['event_start'].split("-")[1]}}</span>
        <span class="year">{{event['event_start'].split("-")[0]}}</span>
     </div>
     <span class="description">
         <h2>{{event['event_title']}}</h2>
         <p> 
           {{event['event_description']}}</p>
     </span>
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
    }
  },
}
</script>
<style>
    .event{
    margin:auto;
    height:auto;
    width:100%;
    padding:20px;
    position:relative;
    display: grid;
    grid-gap: 15px;
    grid-template-columns:150px 400px;
    grid-template-rows: 200px 200px;
    background-position: center;
    background-size: cover;
    place-items: center;    
    cursor:pointer;


}
@media (max-width:750px){
     .event{
     grid-template-columns:100px 250px;
    grid-template-rows: 300px 100px;
    grid-gap:5px;
    padding:5px;
    margin-top:10px;

 }
}
</style>