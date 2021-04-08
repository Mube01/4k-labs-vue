<template>
  <div>
    <Header />
    <div class="container text-center">
      <form class="login" @submit.prevent="login">
        <h2>Update Profile</h2>
        <div class="left">
          <label for="fullname">Fullname</label><br />
          <input
            required
            v-model="fullname"
            type="text"
            id="fullname"
            autocomplete="off"
          />
        </div>

        <div class="right">
          <label for="username">Username</label><br />
          <input
            required
            v-model="username"
            type="text"
            id="username"
            autocomplete="off"
          />
        </div>

        <div class="left">
          <label for="password">Password</label><br />
          <input required v-model="password" type="password" id="password" />
        </div>

        <div class="right">
          <label for="division">Select a division</label><br />
          <select name="division" id="division">
            <option value="web">Web</option>
            <option value="bots">Bots</option>
            <option value="iot">IoT</option>
          </select>
        </div>

        <div class="right">
          <label for="role">Role</label><br />
          <input v-model="role" type="text" id="role" autocomplete="off" />
        </div>

        <div class="left">
          <label for="pp">Profile Picture</label><br />
          <input type="file" id="pp" />
        </div>

        <div class="full">
          <label for="github">Github link</label><br />
          <input v-model="github" type="text" id="github" autocomplete="off" />
        </div>

        <div class="full">
          <label for="linkedin">LinkedIn link</label><br />
          <input
            v-model="linkedin"
            type="text"
            id="linkedin"
            autocomplete="off"
          />
        </div>

        <div class="full">
          <label for="description">Description</label><br />
          <textarea
            rows="7"
            v-model="description"
            type="text"
            id="description"
            autocomplete="off"
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "UpdateProfile",
  components: {
    Header,
  },
};
</script>

<style scoped>
@media screen and (max-width: 480px) {
  .left,
  .right {
    clear: both;
  }
  input,
  select {
    width: 100%;
    clear: both;
  }
}
h2 {
  font-weight: 700;
  margin: 20px 0;
}
.left {
  float: left;
}
.right {
  float: right;
}
.full {
  clear: both;
}
.full input {
  width: 100%;
}
label {
  font-size: 17px;
  font-weight: 600;
  float: left;
}
input {
  width: 450px;
  padding: 8px;
  border-radius: 5px;
  border: 2px solid #666;
  margin: 5px 0 15px 0;
}
input[type="file"] {
  padding: 6px;
}
select {
  width: 450px;
  padding: 10px 10px;
  border-radius: 5px;
  border: 2px solid #666;
  margin: 5px 0 15px 0;
}
input:focus {
  outline: none;
  border: 2px solid green;
}
textarea {
  width: 100%;
  border: 2px solid #666;
}
button {
  padding: 10px 45px;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  margin: 15px 0 7px 0;
  opacity: 0.7;
  color: white;
  background: green;
  font-weight: 600;
  transition: 0.5s;
}

button:hover {
  opacity: 1;
}
</style>