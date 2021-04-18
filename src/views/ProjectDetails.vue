<template>
  <div class="container">
    <div class="status">
      <h3>{{ project.project_title }}</h3>
      <div class="links">
        <a :href="project.github" class="card-link"
          ><i title="Github link" class="fab fa-github"></i
        ></a>
        <a :href="project.docs" class="card-link"
          ><i title="Google Docs link" class="far fa-file-alt"></i
        ></a>
      </div>

      <div class="left">
        <p>Division:</p>
      </div>

      <div class="right">
        <p>{{ project.Division }}</p>
      </div>
    </div>
    <div class="members">
      <h5 class="member_class">Members</h5>
      <ul v-show="!showAddMember">
        <li
          :key="member.user_id"
          v-for="member in project.team_members"
          style="margin-left: 10px"
        >
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
    <br /><br /><br /><br /><br />
    <h5>Description</h5>
    <p class="desc">{{ project.description }}</p>
  </div>
</template>

<script>
import ProfilePicture from "@/components/ProfilePicture.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProjectDetails",
  components: {
    ProfilePicture,
  },
  methods: {
    ...mapActions({
      fetchProject: "projects/getProject",
    }),
  },
  computed: {
    ...mapGetters({
      project: "projects/getProject",
      allMembers: "members/getMembers",
    }),
  },
};
</script>

<style scoped>
.status {
  margin: 20px 0px 0px 0px;
  width: 100%;
}
h3 {
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 15px;
  float: left;
}
h5 {
  clear: both;
  float: left;
  font-size: 19px;
  font-weight: 600;
  margin: 15px 5px;
}
.card-link {
  margin-left: 20px;
  color: #a97c50;
}
.card-link:hover {
  color: #8b5e3b;
}
p {
  font-size: 18px;
}
.desc {
  margin: 75px 0 0 10px;
  font-weight: 300;
}
.links {
  float: right;
}
.left {
  clear: both;
  float: left;
}
.right {
  float: right;
}
li {
  float: left;
  list-style-type: none;
}
.far,
.fab {
  float: none;
  font-size: 30px;
  margin: 0;
}
</style>