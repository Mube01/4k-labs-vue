<template>
  <div class="page-container">
    <div class="content-wrap">
      <Header />
      <div class="container">
        <div class="row">
          <div class="image col-md-6">
            <img src="@/assets/BOTS.jpg" />
          </div>
          <div class="status col-md-6">
            <div class="left">
              <h3>Event Title</h3>
            </div>
            <div class="right">
              <router-link class="card-link" :to="{ name: 'UpdateEvent' }">
                <i title="Edit Project" class="far fa-edit"></i
              ></router-link>
            </div>
            <div class="left">
              <p>Starting Date:</p>
              <p>Ending Date:</p>
            </div>
            <div class="right">
              <p>Now</p>
              <p>Now</p>
            </div>
            <h5>Description</h5>
            <p class="desc">this is a description</p>
          </div>
        </div>
        <div class="row">
          <h3>Gallery</h3>
        </div>
        <div class="row">
          <div class="gallery col-md-4">
            <GalleryImage source="DEVS.jpg" />
          </div>
          <div class="gallery col-md-4">
            <GalleryImage source="DEVS.jpg" />
          </div>
          <div class="gallery col-md-4">
            <GalleryImage source="DEVS.jpg" />
          </div>
        </div>
      </div>
    </div>
    <Wave />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import GalleryImage from "@/components/GalleryImage.vue";
import Wave from "@/components/Wave.vue";

export default {
  name: "EventDetail",
  components: {
    Header,
    GalleryImage,
    Wave,
  },
};
</script>

<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
}
.content-wrap {
  padding-bottom: 26.5rem;
}
.card-link {
  color: #a97c50;
}
.card-link:hover {
  color: #8b5e3b;
}
.far {
  float: none;
  font-size: 28px;
}
.image {
  padding: 50px 20px;
}
.status {
  padding: 60px 20px;
}
img {
  width: 100%;
  box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -webkit-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
  -moz-box-shadow: 3px 2px 9px 1px rgba(67, 65, 65, 0.17);
}
h3 {
  font-weight: 700;
  font-size: 25px;
  margin: -10px 0 30px 15px;
}
.left {
  clear: both;
  float: left;
}
.right {
  float: right;
}
h5 {
  clear: both;
  font-size: 20px;
  font-weight: 600;
  margin: 15px 0;
}
p {
  font-size: 18px;
}
.desc {
  font-weight: 300;
}
</style>