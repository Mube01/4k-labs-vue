<template>
  <div id="card">
	<h4>{{member['username']}}</h4>
	<div class="image-crop">
		<img id="avatar"
      :src="`/api_v1/get_profile/${member['profile_picture']||'avatar.png'}?` + new Date().getTime()"
     >
	</div>
	<div id="bio">
    <h3 style="color:white">Division: {{member['Division']}}</h3>  
    <span style="color:white">Role: {{getRole(member['Role'])}}</span>
		<p>{{member['Discription']}}</p>
	</div>
	
	<div id="links">
    <a :href="member['Linkden']">
      <i title="LinkedIn link" class="fab fa-linkedin"></i></a>
    <a :href="member['Github']">
      <i title="Github link" class="fab fa-github"></i>
    </a>
	</div>
  
</div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import {mapGetters} from 'vuex';
export default {
  name:"Member",
  props:{
    member:{
      required:true,
      type:Object,
    }
  },
  computed:{
    ...mapGetters({
    getRole:'getRoleByKey'
    })
  }
}
</script>

<style scoped>
* {
	padding: 0;
	margin: 0;
}

html,body {
	background-color: #6E7889;
	font-family: tahoma, sans-serif;
	color: #E6EBEE;
}

#card {
	background-color: #453f39;
	height: auto;
	width: 350px;
	margin: 10vh auto;
	border-radius: 25px;
	padding-bottom: 1px;
	box-shadow: 2px 2px 5px #be5107;
}

h4 {
	color: white;
	text-align: center;
	width: 100%;
	background-color: #0c0e0f;
	border-radius: 25px 25px 0 0;
	color: #b9590a;
	padding: 30px 0;
	font-weight: 800;
	margin: 0;
}

.image-crop {
	display: block;
	position: relative;
	background-color: #E6EBEE;
	width: 150px;
	height: 150px;
	margin: 0 auto;
	margin-top: 30px;
	overflow: hidden;
	border-radius: 50%;
	box-shadow: 1px 1px 5px #be5107;
}

#avatar {
	display: inline;
	height: 230px;
	width: auto;
	margin-left: -34px;
}

#bio {
	display: block;
	margin: 30px auto;
	width: 280px;
	height: auto;
}

#bio p {
	color: #E6EBEE;
	font-weight: lighter;
	font-size: 15px;
	text-align: justify;
}

#stats {
	display: flex;
	flex-direction: row;
	height: auto;
	width: 280px;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	font-weight: 500;
  color: white;
}

.col {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: auto;
}

.stat {
	font-size: 25px;
	margin: 0;
}

.label {
	margin: 0;
}

#links {
	width: auto;
}

a {
  align-items: center;
	position: relative;
	padding: 10px 0;
	width: 130px;
	margin: 30px 0;
	border-radius: 25px;
	border: none;
	font-size: 20px;
	letter-spacing: 0.2px;
	font-weight: 500;
}


#msg{
	background-color: #E6EBEE;
	color: #393B45;
}
</style>