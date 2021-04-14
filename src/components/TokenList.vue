<template>
  <div class="card col-md-12">
    <div class="card-body">
      <div class="token">
        <span style="float: left">{{ token.token }}</span>
        <span style="float: right; padding-left: 200px">{{
          token.Division
        }}</span>
      </div>
      <div class="more">
        <div class="dropdown">
          <i
            class="fa fa-ellipsis-v"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="false"
            aria-expanded="false"
            aria-hidden="false"
          ></i>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a @click="DeleteToken(token.token)" class="dropdown-item"
              >Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TokenList",
  props: {
    token: {
      type: Object,
    },
  },
  methods: {
    ...mapActions({
      deleteToken: "tokens/deleteToken",
    }),
    DeleteToken(token) {
      this.deleteToken(token)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {});
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
}
.token {
  float: left;
  padding: 10px 0;
}
.more {
  float: right;
  padding: 10px 0;
}
span {
  font-size: 20px;
  font-weight: 600;
}
a {
  color: #333;
  opacity: 0.9;
}
a:hover {
  color: #000;
}
</style>