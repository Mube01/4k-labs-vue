<template>
  <div style="background: rgb(38, 238, 148);" class="alert alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div style="background: rgba(243, 20, 20, 0.938);" class="alert alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed:{
        ...mapGetters({
            'showAlert':'alert/status',
            'alertData':'alert/data'
        })
    }

}
</script>

<style scoped>
.alert{
  align-items: center;
  width: 400px;
  margin: auto;
  padding: auto;
  background: rgba(243, 20, 20, 0.938);
}
</style>