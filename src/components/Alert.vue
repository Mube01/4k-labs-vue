<template>
  <div v-if="alertData.status == true && alertData.success == true " style="background: rgb(38, 238, 148);" class="alert alert-dismissible fade show" role="alert">
    <strong>Success</strong> {{alertData.message}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div v-if="alertData.status == true && alertData.success == false " style="background: rgba(243, 20, 20, 0.938);" class="alert alert-dismissible fade show" role="alert">
    <strong>Error</strong> {{alertData.message}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'Alert',
    computed:{
        ...mapGetters({
            alertData:['getData']
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