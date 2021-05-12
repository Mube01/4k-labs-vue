<template>
  <div class="contents" id="details">
    <img src="`/api_v1/get_event/${event.event_image}?` + new Date().getTime()" alt="">
    <div class="event-wrapper" :style="{backgroundImage:`url(/api_v1/get_event/${event['event_image']})`}">
      <div class="event">
        <h2>#{{event['event_title']}}</h2>
      </div>
    </div>
    <div class="second-wrapper">
      <div class="event-2">
        <h2>{{event['event_title']}}</h2>
        <p>
        {{event['event_description']}}
        </p>
      </div>
      <div>
        {{event['event_start']}}-{{event['event_end']}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Event",
  props: {
    event:{
      required:true,
      type:Object
    }
  },
};
</script>
<style scoped>
* {
  overflow-x: hidden;
}
.contents {
  background: white;
  display: grid;
  grid-template-columns: 100px 500px 30px 350px 10px 200px;
  grid-template-rows: 50px 200px 50px 250px;
  padding: 25px;
  padding-top: 0px;
}

.event-wrapper {
  grid-column: 2;
  grid-row: 2 / span all;
  height: 500px;
  background-size: cover;
  background-position: center;
  padding: 25px;
}
.event {
  padding: 10px;
  width: 60%;
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  background-color: rgb(175, 81, 38);
}
.event h2 {
  padding: 10px;
}
.second-wrapper {
  grid-column: 4;
  grid-row: 2 / span all;
  margin-top: 50px;
  width: 500px;
  height: auto;
  padding: 40px;
  color: black;
  border-top: 4px solid rgb(175, 81, 38);
}
.event p {
  height: 700px;
}
@media screen and (max-width: 700px) {
  .event-wrapper {
    padding: 10px;
  }
  .contents {
    display: block;
  }
  .event {
    width: 100%;
  }
  .second-wrapper {
    width: 100%;
    padding: 15px;
  }
}
</style>