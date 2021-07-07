<template>
  <div id="card">
    <div class="image-crop">
      <img
        id="avatar"
        :src="`/api_v1/get_profile/${
          member['profile_picture'] || 'avatar.png'
        }`"
      />
    </div>
    <div id="bio">
      <h4>{{ member["fullname"] }}</h4>
      <h3 >Division: {{ member["Division"] }}</h3>
      <span>Role: {{ getRole(member["Role"]) }}</span>
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
  background-color: #fff;
  border-radius: 15px !important;
  height: auto;
  margin: 5vh auto;
  border: 1px solid #d9d9d9;
  transition: 0.5s;
}
#card:hover{
  box-shadow: 0 0 10px 3.5px rgba(0, 0, 0, 0.2);
}

h4 {
  text-align: center;
  color: #a97c50;
  white-space: nowrap;
  max-height: 50px;
  margin-bottom: 15px;
  padding: 20px 0 30px 0;
  font-weight: 800;
  font-size: 21px;
}

.image-crop {
  display: block;
  position: relative;
  background-color: #e6ebee;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-top: 50px;
  overflow: hidden;
  border-radius: 50%;
  border: 5px double #a97c50;
}

#avatar {
  display: inline;
  padding: 5px;
  object-fit: cover;
  height: 170px;
  width: 160px;
  position: relative;
  top: -10px;
  left: -10px;
}

#bio {
  display: block;
  margin: 15px auto;
  width: 100%;
  color: #333;
  text-transform: capitalize;
  height: auto;
  padding: 0 50px 20px 50px;
  border-bottom: 1px solid #d9d9d9;
}
#bio h3{
  font-size: 18px;
  margin-bottom: 5px;
}
#bio span{
  font-weight: 500;
  font-size: 17px;
  color: #6e7889;
  white-space: nowrap;
}

#links {
  position: relative;
  left: 35%;
  bottom: 10px;
  margin-bottom: 20px;
}
#links ul{
  margin: 0;
  padding: 0;
  display: flex;
}
#links li{
  list-style: none;
}
#links li a{
  padding: 1rem;
  display: block;
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