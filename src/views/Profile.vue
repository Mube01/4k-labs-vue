<template>
  <Header />
  <div class="container">
    <div class="row">
      <div class="col-md-4 text-center my-4">
        <ProfilePicture
          srcText="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgKCAgICAgICAgHCAoHBwcHCA8ICQcKFREWFiARHxMYHSggGBolJx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDysZFRkrNzctLTc3Nys3NysrKystLS0tKysrKysrLSsrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIDB//EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABkBAQEBAQEBAAAAAAAAAAAAAAECAwAEBv/EABgRAQEBAQEAAAAAAAAAAAAAAAABEQIS/9oADAMBAAIRAxEAPwDysyKQx4K+ukRRkS0kRkOGQLnKkKakGtJyDIZDIFzkSHDhkC5yMOHDg1c5GLCRqsCOLHHyzixrE7R5YxY0naPLGLG8Fh0XljA3gwovLGDG8BTeWaMasGOReWWbGxikWMWBuxmws7AkinBCjI50hhUKWsiKakC5FIVClpIijIGkikMhIXIDhwwLkCxpOVgxYUDgwNJwxnBjeDCMZDWLHCxmxnGwUWMjGsGFNjIxoFFjNjLdGFnYwLGgdZ2MppFOMGRSNQjmIpqRLWRSFNJaSKFGQNJFCiGkihkUjUC5BhKC5EsKwKxI4sccZxNYHDAMaRGMrCnCxmxnGxSmxkNYHIsZsZbFitRYwG7AWdjFjLYpRYyiCjGY1AYamQxoRpLWRNQGJayGQowNJEZDIQ0kRRC5EjIZAuRSLEQrAinHAsKcMZxYU4YymsFhTYyGgU2AWNCxybGA1QUWCxmxoVTOxms1us0s7GcDSKMYhgbjk8xNCGBrIY1BCmtJDDFDA1kJRC5EZA1A0kRRC5AUQrAinHAGk4YyinDAGg4WM4Glh1OMhoFFjLNbBRYwG7GSixmxmtiqjOxhElGOUagjULPkwiNRLWGGCGBpGoRDEtYSCFwxoQwNIikFwpGQKCaTiyjgcEknOwJIpoSRTQKVXJrIpBRYGcaqKLGBWrAWdjGEpWoxxjUEMLHktQRqCtYmoDEtY1CDA0hIMC4SilpEVEFwwpOUkk4pJOAwNJzmQ1Q5NAKKWUQU0UGgpoBoKKKzW6xSzoRBQ4xqMxqKeflqNRhqBrGjGSlpGzBCGsJgMC40gQ0hIIXDKWY0FJJApJOCS1kuSQcKkgUoEFFFBoKKKCCiis00FnaEkU64RplqLeblqGApaxqGCENI1CzGktIYQQ0jULMIXCRCFww6ydCpTq0Jx06Foc7SgnDSECLUkCm1K0Wg4i1BBybUkLSi0Vk0VTOpDUUa4NRiNRdebmtwxmFLSVuFiNQVrK1GoyZUtJWizpDSVoxkhcrRZlMoVpQ0uVpQQOlaE4akgXaQtGuTadFoRTqC0FNqotWiuTahqBZ2oWqs1SLSmUUa5QxiVqLrzc1uFmGJaytmVmGBpK3CxGktJWjGSFytFmUhcrSCC9OnWS461q1lOw61o0JztOjUHDSgHDSENKdI1WgptQQKLULVoKLUzSCi0JIo1wjUKW83JhiSWsaMSS1haiQaQkILjR1ILhSQUik4pJArUkXBak4IWpOFWjUikBIpqZtKMRWUkUUM1IooSRS//9k="
          imgWeight="250px"
        />
      </div>
      <div class="col-md-8 my-5">
        <p>Username: <span class="value">mube01</span></p>
        <p>Full name: <span class="value">Mubarek Jemal</span></p>
        <p>Division: <span class="value">Web</span></p>
        <p>Discription: <span class="value">Text</span></p>
        <a href="#">LinkedIn</a> <a href="#">Github</a>
      </div>
    </div>
    <div class="row">
      <p class="title">Projects they are working on</p>
      <div class="col-md-12">
        <Project />
      </div>
    </div>
    <div class="row">
      <p class="title">Projects they have worked on</p>
      <div class="col-md-12">
        <Project />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ProfilePicture from "@/components/ProfilePicture.vue";
import Project from "@/components/Project.vue";

export default {
  name: "Home",
  components: {
    Header,
    ProfilePicture,
    Project,
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
.value {
  font-weight: 700;
}
.title {
  margin: 10px 0 0 20px;
  font-size: 22px;
  font-weight: 700;
}
</style>