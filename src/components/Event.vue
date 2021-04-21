<template>
  <div class="card">
    <img class="card-img-top" 
      :src="
        `http://127.0.0.1:5000/api_v1/get_event/${event.event_image}?` +
        new Date().getTime()
      "
     alt="Card image" />
    <div class="card-body">
      <h3 class="card-title">{{event.event_title}}</h3>
      <h4>{{event.event_start}} to {{event.event_end}}</h4>
      <p class="card-text">{{event.event_description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Event",
  props:{
    event:{
      type:Object,
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  margin: 20px 5px 0 5px;
  text-align: center;
  padding: 0;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  transition: 0.3s;
  background-size: cover;
  background-position: center center;
}
.card:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
.card-img-top {
  height: 350px;
}
h3 {
  font-weight: 700;
  font-size: 28px;
  margin: 5px 0 15px 0;
  float: left;
  color: #a97c50;
}
h4 {
  float: right;
  font-size: 18px;
  font-weight: 400;
  color: #333;
  margin: 6px 0 15px 0;
}
p {
  clear: both;
  color: #333;
  font-size: 16px;
  font-weight: 300;
  text-align: justify;
}
</style>