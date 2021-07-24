<template>
<div>
          <div class="event">
             <div class="event-photo-holder" :style="{'background-image': 'url(/api_v1/get_event/'+`${event['event_image']}`+')'}">
     
             <div class="title">
                 <h2>
                    {{event['event_title']}}
                 </h2>
                 
             </div>
             </div>
             <div class="description">
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
    }
  },
}
</script>
<style scoped>
 
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
.event{
    font-family: 'Roboto Condensed', sans-serif;
    margin:auto;
    height:auto;
    width:100%;
    padding:10px;
    position:relative;
    display: grid;
    grid-template-columns:350px;
    grid-template-rows: 250px 200px;
    place-items: center;    
    cursor:pointer;


}
.event-photo-holder{
    grid-row:1;
    width:100%;
    height:100%;
    background-position: center;
    background-size: cover;
    display:grid;
    grid-template-rows:200px 50px;
   
}
.event-photo-holder .title{
    grid-row:2;
    width:100%;
}
.event-photo-holder .title h2{
    font-size: 25px;
    color:#f47522;
    background:#000;
    padding:10px;
    text-align:center;
}
.description{
width:100%;
height:100%;
/* background:#000; */
padding:20px;
/* color:white; */
margin-top:-5px;
 
}
@media (max-width:750px){
 
   .event{
   width:100%;
 }

 
 .date{
    width:auto;
    height: 100px;
 }
 .description{
     width:auto;
 }
 .num{
     font-size:20px;
     width:70px;
 }
.month{
    font-size:15px;
}
}
</style>