<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">
        {{ project.project_title }}
        <p>Division: {{ project.Division }}</p>
      </h3>
      <div class="links">
        <router-link :to="{name:'External-Link' ,  params: { url: project.github || '#' } }"  class="card-link"
          ><i title="Github link" class="fab fa-github"></i
        ></router-link>

        <router-link :to="{name:'External-Link',  params: { url : project.docs || '#' } }"  class="card-link"
          ><i title="Google Docs link" class="far fa-file-alt"></i
        ></router-link>
      </div>
      <p style="clear: both">
        <span style="float: left">Progress:</span>
        <span style="float: right">{{ project.progress }}%</span>
      </p>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: new String(project.progress + '%') }"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <hr />
      <div class="members">
        <p class="member_class">Members</p>
        <ul>
          <li :key="member.user_id" v-for="member in project.team_members">
            <router-link
              :to="{ name: 'Profile', params: { user_code: member.user_id } }"
            >
              <ProfilePicture
                imgWeight="45px"
                fontSize="20px"
                :name="member.username[0]"
                :srcText="member['profile_picture']"
              />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePicture from "./ProfilePicture.vue";

export default {
  name: "Project",
  components: {
    ProfilePicture,
  },
  props: {
    project: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  padding: 10px 20px;
  margin: 15px 0;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  transition: 0.3s;
}
.member_class {
  font-size: 17px;
  padding-top: 5px;
  display: inline;
  float: left;
}
.card-title {
  float: left;
}
.card-title p {
  font-size: 15px;
  font-weight: 400;
}
.card:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
.links {
  float: right;
  padding: 25px 0;
}
.card-link {
  color: #a97c50;
}
.card-link:hover {
  color: #8b5e3b;
}
.progress {
  height: 25px;
  clear: both;
  margin-top: 50px;
}
.progress-bar {
  background-color: #8b5e3b;
}
p {
  font-size: 20px;
  color: #333333;
}
h3 {
  color: #2c3e50;
  font-weight: 700;
  margin: 20px 0 40px 0;
}
hr {
  margin: 30px 0 20px 0;
}
li {
  display: inline;
  list-style: none;
  float: right;
  margin: 0 0 2px 10px;
}
.far,
.fab {
  float: none;
  font-size: 30px;
  margin: 0;
}
</style>