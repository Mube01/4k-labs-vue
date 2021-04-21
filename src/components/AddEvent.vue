<template>
  <div class="text-center">
    <form  @submit.prevent="AddEvent()">
      <div class="left col-md-6">
        <label for="pp">Title</label><br />
        <input
          type="text"
          v-model="event_title"
          name="text"
          placeholder="Event Title"
          required
        />
      </div>

      <div class="right col-md-6">
        <label for="pp">Image</label><br />
        <input
          id="pp"
          v-on:change="uploadProfile"
          type="file"
          accept="image/*"
          
        />
      </div>

      <div style="clear:both" class="left col-md-6">
        <label for="pp">Starting Date</label><br />
        <input
          type="date"
          v-model="event_start"
          name="text"
          placeholder="Event Date"
          
        />
      </div>

      <div class="right col-md-6">
        <label for="pp">Ending Date</label><br />
        <input
          type="date"
          v-model="event_end"
          name="text"
          placeholder="Event Date"
          
        />
      </div>

      <div class="full col-md-12">
        <label for="description">Description</label><br />
        <textarea
          rows="7"
          v-model="event_description"
          type="text"
          id="description"
          autocomplete="off"
        />
      </div>

      <Button type="submit" text="Add Event" color="white" bgColor="#177F75" />
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Button from "./Button.vue";
export default {
  name: "Add",
  data() {
    return {
      event_image:"",
      event_description: "",
      event_title:"",
      event_start:"",
      event_end:"",
    };
  },
  components: {
    Button,
  },
  methods:{
    ...mapActions({
      addEvent:'events/addEvent',
      errorAlert: "errorAlert",
      successAlert: "successAlert",
    }),
    AddEvent(){
      var data = {
                    "event_title":this.event_title,
                    "event_description":this.event_description,
                    "event_start":this.event_start,
                    "event_end":this.event_end,
                    "event_image":this.event_image,
                    "event_gallery":[]
                }
      this.addEvent(data).then((result) => {
        this.successAlert('Event has been created successfully')
        this.$emit("eventAdded");
      }).catch((err) => {
        this.errorAlert(err)
      });
    },
    uploadProfile(e) {
      const selecterImage = e.target.files[0];
      this.createBase64Image(selecterImage);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.readAsDataURL(fileObject);
      reader.onload = (e) => {
        var base64result = e.target.result;
        var image = base64result.split(",")[1];
        this.event_image = image
      };
    },
  }
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 18px 20px;
  margin: 5px 0 15px 0;
  border-radius: 5px;
  border: 1px solid #333;
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
input[type="file"] {
  padding: 15px 20px;
}
label {
  float: left;
  font-size: 18px;
  font-weight: 700;
}
textarea {
  width: 100%;
  border: 2px solid #666;
  margin-bottom: 10px;
}
</style>