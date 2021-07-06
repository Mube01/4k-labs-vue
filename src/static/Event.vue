<template>
<div>
    <div class="event"  :style="{'background-image': ' linear-gradient(to right, rgba(51, 44, 42, 0.675), rgba(0, 0, 0, 0.539)),url(/api_v1/get_event/'+`${event['event_image']}`+')'}">
            <div class="date">
        <div class="num">
            {{event['event_start'].split("-")[2]}}
        </div>
        <span class="month">{{event['event_start'].split("-")[1]}}</span>
        <span class="year">/{{event['event_start'].split("-")[0]}}</span>
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
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap');
    .event{
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: bolder;
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
 .date{
    grid-column: 1;
    grid-row:1;
    width: 150px;
    height: 200px;
    background: black;
    border-radius:15px;
}

.num{
    grid-row:1;
    font-size:50px;
    background-color: rgb(233, 112, 14);
    color:white;
    padding:20px;
    width:150px;
    border-radius:15px;
    text-align: center;
}
.month{
    font-size:50px;
    margin-left:10px;
    color:white;
    grid-row:1;

}
.year{
    grid-row:1;

    color:white;
}
.description{

    grid-column: 1/span all;
    grid-row:2;
    font-size:20px;
    color:white;
}
.description p{
  text-align: justify;
  font-size:17px;
}
.event-image{
    grid-column:3;
    background-position: center;
    background-size: cover;
    
}
@media (max-width:750px){
 .event{
     grid-template-columns:100px 250px;
    grid-template-rows: 100px 300px;
    grid-gap:5px;
    padding:5px;
    margin-top:10px;

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