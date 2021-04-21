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
            required
          />
        </div>

        <div style="clear:both" class="left col-md-6">
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

        <div class="full col-md-12">
          <label for="upload_imgs" class="button hollow">Add Gallery</label>
          <input
            class="show-for-sr"
            type="file"
            id="upload_imgs"
            name="upload_imgs[]"
            multiple
          />
          <div
            class="quote-imgs-thumbs quote-imgs-thumbs--hidden"
            id="img_preview"
            aria-live="polite"
          ></div>
        </div>

        <Button
          type="submit"
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
export default {
  name: "UpdateEvent",
  components: {
    Header,
    Button,
  },
};
var imgUpload = document.getElementById("upload_imgs"),
  imgPreview = document.getElementById("img_preview"),
  imgUploadForm = document.getElementById("editEvent"),
  totalFiles,
  previewTitle,
  previewTitleText,
  img;

if (imgUpload) {
  imgUpload.addEventListener("change", previewImgs(), false);
}
if (imgUploadForm) {
  imgUploadForm.addEventListener(
    "submit",
    function (e) {
      e.preventDefault();
      alert(
        "Images Uploaded! (not really, but it would if this was on your website)"
      );
    },
    false
  );
}

function previewImgs(event) {
  totalFiles = imgUpload.files.length;

  if (!totalFiles) {
    imgPreview.classList.remove("quote-imgs-thumbs--hidden");
    previewTitle = document.createElement("p");
    previewTitle.style.fontWeight = "bold";
    previewTitleText = document.createTextNode(
      totalFiles + " Total Images Selected"
    );
    previewTitle.appendChild(previewTitleText);
    imgPreview.appendChild(previewTitle);
  }

  for (var i = 0; i < totalFiles; i++) {
    img = document.createElement("img");
    img.src = URL.createObjectURL(event.target.files[i]);
    img.classList.add("img-preview-thumb");
    imgPreview.appendChild(img);
  }
}
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
</style>