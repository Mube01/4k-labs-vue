<template>
  <Header />
  <div class="container">
    <div class="text-center">
      <form @submit="onSubmit" id="editEvent">
        <h2>Update Event</h2>
        <div class="left col-md-6">
          <label for="pp">Title</label><br />
          <input
            type="text"
            v-model="eventData.event_title"
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

        <div style="clear: both" class="left col-md-6">
          <label for="pp">Starting Date</label><br />
          <input
            type="date"
            v-model="eventData.event_start"
            name="text"
            placeholder="Event Date"
          />
        </div>

        <div class="right col-md-6">
          <label for="pp">Ending Date</label><br />
          <input
            type="date"
            v-model="eventData.event_end"
            name="text"
            placeholder="Event Date"
          />
        </div>

        <div class="full col-md-12">
          <label for="description">Description</label><br />
          <textarea
            rows="7"
            v-model="eventData.event_description"
            type="text"
            id="description"
            autocomplete="off"
          />
        </div>

        <section class="container dzone">
          <div class="dropzone" v-bind="getRootProps()">
            <input v-bind="getInputProps()" />
            <p v-if="isDragActive">Drop the Images here ...</p>
            <p v-else>Drop the Images here</p>
          </div>
          <Button
            @click="open"
            type="button"
            text="Open"
            color="white"
            bgColor="#177F75"
          />
          <aside class="thumbsContainer">
            <div class="thumb" v-for="image in eventData.event_gallery" :key="image">
              <div class="thumbInner">
                <button
                  type="button"
                  @click="handleOldImageDeletion(image)"
                  :key="i"
                  class="btn btn-warning btn-circle btn-xl cancel"
                >
                  <i class="glyphicon glyphicon-remove">X</i>
                </button>

                <img
                  :src="`http://127.0.0.1:3000/api_v1/get_event_gallery/${image}`"
                  class="img"
                />
              </div>
            </div>

            <div class="thumb" v-for="(i, index) in formData" :key="i">
              <button
                type="button"
                @click="handleImageDeletion(index)"
                :key="i"
                class="btn btn-warning btn-circle btn-xl"
              >
                <i class="glyphicon glyphicon-remove">X</i>
              </button>

              <div class="thumbInner">
                <img :src="i.value.preview" class="img" />
              </div>
            </div>
          </aside>
        </section>

        <Button
          type="button"
          :disabled = "disableButton"
          @click="update_event"
          text="Update Event"
          color="white"
          bgColor="#177F75"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "@/components/Header.vue";
import Button from "@/components/Button.vue";
import { useDropzone } from "vue3-dropzone";
import { ref } from "vue";
export default {
  name: "UpdateEvent",
  components: {
    Header,
    Button,
  },
  data: function () {
    return {
      new_event_image: "",
      tobe_deleted_gallery: [],
      new_gallery_images: [],
      disableButton:false,
    };
  },
  computed: {
    eventData() {
      return this.$store.getters["events/getEventById"](
        this.$route.params.event_id
      );
    },
  },
  mounted: function () {},
  methods: {
    ...mapActions({
      getEvents: "events/getEvents",
      eventUpdate: "events/updateEvent",
      errorAlert: "errorAlert",
      successAlert: "successAlert",
    }),
    handleOldImageDeletion(image_id) {
      this.eventData.event_gallery = this.eventData.event_gallery.filter((item) => item !== image_id);
      this.tobe_deleted_gallery.push(image_id);
    },
    get_new_gallery_images() {
      this.new_gallery_images = [];
      this.formData.forEach((element) => {
        this.new_gallery_images.push(element.value.base64);
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
        this.new_event_image = base64result.split(",")[1];
      };
    },
    update_event() {
      this.disableButton = true
      this.get_new_gallery_images();
      let event_data = {
        event_title: this.eventData.event_title,
        event_start: this.eventData.event_start,
        event_end: this.eventData.event_end,
        event_description: this.eventData.event_description,
        event_image: this.new_event_image,
        new_galley_images: this.new_gallery_images,
        tobe_deleted_images: this.tobe_deleted_gallery,
      };
      this.eventUpdate({
        event_id: this.$route.params.event_id,
        event_data: event_data,
      })
        .then((result) => {
          this.successAlert(result.message);
          this.getEvents()

          this.disableButton = false
          this.$router.push({
             name: "EventDetail",
             params: { event_id: this.$route.params.event_id }, 
          });
        })
        .catch((err) => {
          this.errorAlert(err);
        });
    },
  },
  setup() {
    const formData = ref([]);
    var cx = ref(0);
    const saveFiles = async (filesTop) => {
      for (var x = 0; x < filesTop.length; x++) {
        Object.assign(filesTop[x], {
          preview: URL.createObjectURL(filesTop[x]),
          base64: await createBase64Image(filesTop[x]),
        });
        formData.value.push(ref(filesTop[x]));
      }
    };
    function createBase64Image(fileObject) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(",")[1]);
        reader.readAsDataURL(fileObject);
      });
    }

    function handleImageDeletion(index) {
      if (index > -1) {
        formData.value.splice(index, 1);
      }
    }

    function onDrop(acceptFiles, rejectReasons) {
      saveFiles(acceptFiles);
      cx.value++;
    }
    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });

    return {
      getRootProps,
      getInputProps,
      formData,
      handleImageDeletion,
      ...rest,
    };
  },
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 12px;
  margin: 5px 0 15px 0;
  border-radius: 5px;
  border: 2px solid #333;
}
input:focus {
  outline: none;
  border: 2px solid #177f75;
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
h2 {
  font-weight: 700;
  margin: 20px 0;
}
input[type="file"] {
  padding: 9px;
  background-color: white;
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
textarea:focus {
  outline-color: #177f75;
}
.quote-imgs-thumbs {
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin: 1.5rem 0;
  padding: 0.75rem;
}
.quote-imgs-thumbs--hidden {
  display: none;
}
.img-preview-thumb {
  background: #fff;
  border: 1px solid #777;
  border-radius: 0.25rem;
  box-shadow: 0.125rem 0.125rem 0.0625rem rgba(0, 0, 0, 0.12);
  margin-right: 1rem;
  max-width: 140px;
  padding: 0.25rem;
}
.container.dzone {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #00e676;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
}

.thumb {
  position: relative;
  display: inline-flex;
  border-radius: 2;
  border: 1px solid #eaeaea;
  margin-bottom: 8;
  margin-right: 8;
  width: 100;
  height: 100;
  padding: 4;
  box-sizing: border-box;
}

.thumbInner {
  display: flex;
  min-width: 0;
  overflow: hidden;
}

.img {
  display: block;
  width: auto;
  max-height: 150px;
  height: 100%;
}

.thumbsContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1;
}
.dropzone {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #eeeeee;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
}

.dropzone:focus {
  border-color: #2196f3;
}

.dropzone.disabled {
  opacity: 0.6;
}
.cancel {
  background-color: #04aa6d;
  border: none;
}
</style>