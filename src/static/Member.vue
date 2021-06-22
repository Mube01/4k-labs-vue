<template>
  <div id="card">
    <h4>{{ member["fullname"] }}</h4>
    <div class="image-crop">
      <img
        id="avatar"
        :src="`/api_v1/get_profile/${
          member['profile_picture'] || 'avatar.png'
        }`"
      />
    </div>
    <div id="bio">
      <h3 style="color: white">Division: {{ member["Division"] }}</h3>
      <span style="color: white">Role: {{ getRole(member["Role"]) }}</span>
      <p>{{ member["Discription"] }}</p>
    </div>

    <div id="links">
      <ul>
        <li>
          <a :href="member['Linkden'] || '#'">
            <i title="LinkedIn link" class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a :href="member['Github'] || '#'">
            <i title="Github link" class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { mapGetters } from "vuex";
export default {
  name: "Member",
  props: {
    member: {
      required: true,
      type: Object,
    },
  },
  computed: {
    ...mapGetters({
      getRole: "getRoleByKey",
    }),
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

html,
body {
  background-color: #6e7889;
  font-family: tahoma, sans-serif;
  color: #e6ebee;
}

#card {
  background-color: #453f39;
  height: auto;
  width: 320px;
  margin: 5vh auto;
  border-radius: 25px;
  padding-bottom: 1px;
  box-shadow: 2px 2px 5px #a97c50;
  position: relative;
}

h4 {
  text-align: center;
  width: 100%;
  background-color: #0c0e0f;
  border-radius: 25px 25px 0 0;
  color: #a97c50;
  padding: 30px 0;
  font-weight: 800;
}

.image-crop {
  display: block;
  position: relative;
  background-color: #e6ebee;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-top: 30px;
  overflow: hidden;
  border-radius: 50%;
}

#avatar {
  display: inline;
  height: 150px;
  width: 150px;
  margin-bottom: 15px;
}

#bio {
  display: block;
  margin: 15px auto;
  width: 280px;
  height: auto;
}

#bio p {
  color: #e6ebee;
  font-weight: lighter;
  font-size: 15px;
  text-align: justify;
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
  position: relative;
  left: 50%;
  
}

a {
  align-items: center;
  padding: 10px 0;
  margin: 10px 0 20px 0;
  border-radius: 25px;
  border: none;
  font-size: 20px;
  letter-spacing: 0.2px;
  font-weight: 500;
}

#msg {
  background-color: #e6ebee;
  color: #393b45;
}
</style>