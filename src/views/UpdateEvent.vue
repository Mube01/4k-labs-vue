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

        <div style="clear: both" class="left col-md-6">
          <label for="pp">Starting Date</label><br />
          <input
            type="date"
            v-model="event_date"
            name="text"
            placeholder="Event Date"
          />
        </div>

        <div class="right col-md-6">
          <label for="pp">Ending Date</label><br />
          <input
            type="date"
            v-model="event_date"
            name="text"
            placeholder="Event Date"
          />
        </div>

        <div class="full col-md-12">
          <label for="description">Description</label><br />
          <textarea
            rows="7"
            v-model="description"
            type="text"
            id="description"
            autocomplete="off"
          />
        </div>

        <section class="container dzone">
          <div class="dropzone" v-bind="getRootProps()">
            <input v-bind="getInputProps()" />
            <!-- <h1>{{ cx }}</h1> -->
            <p v-if="isDragActive">Drop the files here ...</p>
            <p v-else>
              Drag 'n' drop some files here, or click to select files
            </p>
          </div>

          <aside class="thumbsContainer">
            <div class="thumb" v-for="(i, index) in loadData" :key="i">
              <!-- <h1>{{ i.name }}</h1> -->
              <div class="thumbInner">
                <button @click="handleImageLoadDeletion(index)" :key="i">
                  X
                </button>
                <button type="button" class="btn btn-warning btn-circle btn-xl">
                  <i class="glyphicon glyphicon-remove">asd</i>
                </button>

                <img :src="i.photo" class="img" />
              </div>
            </div>

            <div class="thumb" v-for="(i, index) in formData" :key="i">
              <button
                type="button"
                @click="handleImageDeletion(index)"
                :key="i"
                class="btn btn-warning btn-circle btn-xl cancel"
              >
                <i class="glyphicon glyphicon-remove">X</i>
              </button>

              <div class="thumbInner">
                <img :src="i.value.preview" class="img" />
              </div>
            </div>
          </aside>
          <Button
            @click="open"
            type="button"
            text="Open"
            color="white"
            bgColor="#177F75"
          />
        </section>

        <Button
          type="button"
          @click="updateEvent"
          text="Update Event"
          color="white"
          bgColor="#177F75"
        />
      </form>
    </div>
  </div>
</template>

<script>
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
      loadData: null,
    }
  },
  mounted: function () {
    // Load the previous Photo from DataBase
    // console.log(this.loadData)
    console.log("App Mounted", this.loadData)
  },
  setup() {
    // console.log(this.loadData)
    const formData = ref([]);
    var cx = ref(0);

    // fetchData()
    // console.log(loadDa);
    const saveFiles = (filesTop) => {
      // const url = "http://localhost:5000/api/image/photos/hir"; // Your url on the server side
      // console.log(url)
      // pass data as a form
      for (var x = 0; x < filesTop.length; x++) {
        Object.assign(filesTop[x], {
          preview: URL.createObjectURL(filesTop[x])
        });
        formData.value.push(ref(filesTop[x]));
      }
      console.log(formData.value);
      // post the formData to your backend where storage is processed. In the backend, you will need to loop through the array and save each file through the loop.
      // const hi = { name: 'test', photo: 'hi' }

    }

    function handleImageDeletion(index) {
      if (index > -1) {
        formData.value.splice(index, 1);
      }
    }

    function onDrop(acceptFiles, rejectReasons) {

      // console.log(acceptFiles);
      saveFiles(acceptFiles); // saveFiles as callback
      console.log(rejectReasons);
      cx.value++;

    }
    // const options = reactive({
    //   multiple: true,
    //   onDrop,
    //   accept: ".jpg",
    // });
    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });

    return {
      getRootProps,
      getInputProps,
      formData,
      handleImageDeletion,
      ...rest,
    };
  },
  methods: {
    updateEvent() {
      const newPhoto = [];
      if (this.loadData !== null)
        this.loadData.forEach(element => {
          newPhoto.push({ name: element.name, photo: element.photo })
        })

      if (this.formData !== null)
        this.formData.forEach(element => {
          // console.log(element.name)
          newPhoto.push({ name: element.value.name, photo: element.value.preview })
        });

      console.log("New Photo", newPhoto)
    }
  }
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
  height: 80px;
  background-color: #04aa6d;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
}
</style>