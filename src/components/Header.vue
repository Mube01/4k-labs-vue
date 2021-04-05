<template>
  <div id="header">
    <div class="container">
      <router-link to="/"
        ><img class="logo" src="@/assets/logo.webp"
      /></router-link>
      <div class="nav">
        <div class="dropdown">
          <ProfilePicture
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="false"
            aria-expanded="false"
            aria-hidden="false"
            srcText="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgKCAgICAgICAgHCAoHBwcHCA8ICQcKFREWFiARHxMYHSggGBolJx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDysZFRkrNzctLTc3Nys3NysrKystLS0tKysrKysrLSsrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIDB//EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABkBAQEBAQEBAAAAAAAAAAAAAAECAwAEBv/EABgRAQEBAQEAAAAAAAAAAAAAAAABEQIS/9oADAMBAAIRAxEAPwDysyKQx4K+ukRRkS0kRkOGQLnKkKakGtJyDIZDIFzkSHDhkC5yMOHDg1c5GLCRqsCOLHHyzixrE7R5YxY0naPLGLG8Fh0XljA3gwovLGDG8BTeWaMasGOReWWbGxikWMWBuxmws7AkinBCjI50hhUKWsiKakC5FIVClpIijIGkikMhIXIDhwwLkCxpOVgxYUDgwNJwxnBjeDCMZDWLHCxmxnGwUWMjGsGFNjIxoFFjNjLdGFnYwLGgdZ2MppFOMGRSNQjmIpqRLWRSFNJaSKFGQNJFCiGkihkUjUC5BhKC5EsKwKxI4sccZxNYHDAMaRGMrCnCxmxnGxSmxkNYHIsZsZbFitRYwG7AWdjFjLYpRYyiCjGY1AYamQxoRpLWRNQGJayGQowNJEZDIQ0kRRC5EjIZAuRSLEQrAinHAsKcMZxYU4YymsFhTYyGgU2AWNCxybGA1QUWCxmxoVTOxms1us0s7GcDSKMYhgbjk8xNCGBrIY1BCmtJDDFDA1kJRC5EZA1A0kRRC5AUQrAinHAGk4YyinDAGg4WM4Glh1OMhoFFjLNbBRYwG7GSixmxmtiqjOxhElGOUagjULPkwiNRLWGGCGBpGoRDEtYSCFwxoQwNIikFwpGQKCaTiyjgcEknOwJIpoSRTQKVXJrIpBRYGcaqKLGBWrAWdjGEpWoxxjUEMLHktQRqCtYmoDEtY1CDA0hIMC4SilpEVEFwwpOUkk4pJOAwNJzmQ1Q5NAKKWUQU0UGgpoBoKKKzW6xSzoRBQ4xqMxqKeflqNRhqBrGjGSlpGzBCGsJgMC40gQ0hIIXDKWY0FJJApJOCS1kuSQcKkgUoEFFFBoKKKCCiis00FnaEkU64RplqLeblqGApaxqGCENI1CzGktIYQQ0jULMIXCRCFww6ydCpTq0Jx06Foc7SgnDSECLUkCm1K0Wg4i1BBybUkLSi0Vk0VTOpDUUa4NRiNRdebmtwxmFLSVuFiNQVrK1GoyZUtJWizpDSVoxkhcrRZlMoVpQ0uVpQQOlaE4akgXaQtGuTadFoRTqC0FNqotWiuTahqBZ2oWqs1SLSmUUa5QxiVqLrzc1uFmGJaytmVmGBpK3CxGktJWjGSFytFmUhcrSCC9OnWS461q1lOw61o0JztOjUHDSgHDSENKdI1WgptQQKLULVoKLUzSCi0JIo1wjUKW83JhiSWsaMSS1haiQaQkILjR1ILhSQUik4pJArUkXBak4IWpOFWjUikBIpqZtKMRWUkUUM1IooSRS//9k="
            imgWeight="45px"
          />
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <router-link to="/profile"
              ><a class="dropdown-item" href="#">Profile</a>
            </router-link>
            <a class="dropdown-item" href="#" @click="logout">Logout</a>
          </div>
        </div>

        <router-link class="link_class" to="/login"> Login </router-link>

        <router-link class="link_class" to="/register">| Register </router-link>

        <router-link class="link_class" to="/projects"
          >| Projects |</router-link
        >

        <i class="fa fa-bell" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePicture from "./ProfilePicture";
import { reject } from "q";
export default {
  name: "Header",
  components: {
    ProfilePicture,
  },
  methods: {
    logout() {
      var res = this.$store.dispatch("auth/logoutUser");
      res
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => {
          reject(err);
        });
    },
  },
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 150px;
  background: white;
  display: block;
  overflow: hidden;
  border-bottom: 1px solid #e6e6e6;
}
img.logo {
  float: left;
  height: 70px;
  margin: 10px 0;
}
.nav {
  float: right;
  padding: 20px 0;
}
.fa {
  color: #333;
  font-size: 25px;
  margin: 10px 0 0 25px;
}
.dropdown-menu {
  position: relative;
  z-index: 100;
}
.dropdown-item {
  position: relative;
  z-index: 100;
}
</style>