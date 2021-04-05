<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-md-4 text-center my-4">
          <ProfilePicture
            srcText="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgKCAgICAgICAgHCAoHBwcHCA8ICQcKFREWFiARHxMYHSggGBolJx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDysZFRkrNzctLTc3Nys3NysrKystLS0tKysrKysrLSsrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIDB//EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABkBAQEBAQEBAAAAAAAAAAAAAAECAwAEBv/EABgRAQEBAQEAAAAAAAAAAAAAAAABEQIS/9oADAMBAAIRAxEAPwDysyKQx4K+ukRRkS0kRkOGQLnKkKakGtJyDIZDIFzkSHDhkC5yMOHDg1c5GLCRqsCOLHHyzixrE7R5YxY0naPLGLG8Fh0XljA3gwovLGDG8BTeWaMasGOReWWbGxikWMWBuxmws7AkinBCjI50hhUKWsiKakC5FIVClpIijIGkikMhIXIDhwwLkCxpOVgxYUDgwNJwxnBjeDCMZDWLHCxmxnGwUWMjGsGFNjIxoFFjNjLdGFnYwLGgdZ2MppFOMGRSNQjmIpqRLWRSFNJaSKFGQNJFCiGkihkUjUC5BhKC5EsKwKxI4sccZxNYHDAMaRGMrCnCxmxnGxSmxkNYHIsZsZbFitRYwG7AWdjFjLYpRYyiCjGY1AYamQxoRpLWRNQGJayGQowNJEZDIQ0kRRC5EjIZAuRSLEQrAinHAsKcMZxYU4YymsFhTYyGgU2AWNCxybGA1QUWCxmxoVTOxms1us0s7GcDSKMYhgbjk8xNCGBrIY1BCmtJDDFDA1kJRC5EZA1A0kRRC5AUQrAinHAGk4YyinDAGg4WM4Glh1OMhoFFjLNbBRYwG7GSixmxmtiqjOxhElGOUagjULPkwiNRLWGGCGBpGoRDEtYSCFwxoQwNIikFwpGQKCaTiyjgcEknOwJIpoSRTQKVXJrIpBRYGcaqKLGBWrAWdjGEpWoxxjUEMLHktQRqCtYmoDEtY1CDA0hIMC4SilpEVEFwwpOUkk4pJOAwNJzmQ1Q5NAKKWUQU0UGgpoBoKKKzW6xSzoRBQ4xqMxqKeflqNRhqBrGjGSlpGzBCGsJgMC40gQ0hIIXDKWY0FJJApJOCS1kuSQcKkgUoEFFFBoKKKCCiis00FnaEkU64RplqLeblqGApaxqGCENI1CzGktIYQQ0jULMIXCRCFww6ydCpTq0Jx06Foc7SgnDSECLUkCm1K0Wg4i1BBybUkLSi0Vk0VTOpDUUa4NRiNRdebmtwxmFLSVuFiNQVrK1GoyZUtJWizpDSVoxkhcrRZlMoVpQ0uVpQQOlaE4akgXaQtGuTadFoRTqC0FNqotWiuTahqBZ2oWqs1SLSmUUa5QxiVqLrzc1uFmGJaytmVmGBpK3CxGktJWjGSFytFmUhcrSCC9OnWS461q1lOw61o0JztOjUHDSgHDSENKdI1WgptQQKLULVoKLUzSCi0JIo1wjUKW83JhiSWsaMSS1haiQaQkILjR1ILhSQUik4pJArUkXBak4IWpOFWjUikBIpqZtKMRWUkUUM1IooSRS//9k="
            imgWeight="250px"
          />
          
        </div>
        <div class="col-md-5 my-4 pt-2">
          <p @dblclick="editUserInfo = true; field_value_changed = false">Username: <span class="value">
            <label  v-show="!editUserInfo">{{user_info.username}}</label>
            <input
              type="text"
              @change="field_value_changed = true"
              v-model="user_info.username"
              v-show="editUserInfo"
              @keyup.enter="
              closeEdit();
              "
             >
          </span></p>
          <p @dblclick="editUserInfo = true" >Full name: <span class="value">
            <label v-show="!editUserInfo">{{user_info['Full Name']}}</label>
             <input
              type="text"
              @change="field_value_changed = true"
              v-model="user_info['Full Name']"
              v-show="editUserInfo"
              @keyup.enter="
              closeEdit();
              "
             >
          </span></p>
          <p @dblclick="editUserInfo = true">Division: <span class="value">
            <label  v-show="!editUserInfo">{{user_info.Division}}</label>
            <input
              type="text"
              @change="field_value_changed = true"
              v-model="user_info.Division"
              v-show="editUserInfo"
              @keyup.enter="
              closeEdit();
              "
             >
          </span></p>
          <p  @dblclick="editUserInfo = true">Discription: <span class="value">
            <label v-show="!editUserInfo">{{user_info.Discription}}</label>
            <input
              type="text"
              @change="field_value_changed = true"
              v-model="user_info.Discription"
              v-show="editUserInfo"
              @keyup.enter="
              closeEdit();
              "
             >
          </span></p>

          <p @dblclick="editUserInfo = true">Password: <span class="value">
            <label  v-show="!editUserInfo"></label>
            <input
              required
              type="password"
              @change="field_value_changed = true"
              v-model="password"
              v-show="editUserInfo"
              @keyup.enter="
              closeEdit();
              "
             >
          </span></p>
          <p @dblclick="editUserInfo = true">New Password: <span class="value">
            <label  v-show="!editUserInfo"></label>
            <input
              type="password"
              @change="field_value_changed = true"
              v-model="newpassword"
              v-show="editUserInfo"
              @keyup.enter="
              closeEdit();
              "
             >
          </span></p>
          <p @dblclick="editUserInfo = true">Confirm Password: <span class="value">
            <label  v-show="!editUserInfo"></label>
            <input
              type="password"
              @change="field_value_changed = true"
              v-model="confirmpassword"
              v-show="editUserInfo"
              @keyup.enter="
              closeEdit();
              "
             >
          </span></p>
          <Button 
            :disabled = "!editUserInfo"
            text="Update Profile"
            color="#333"
            bgColor="white"
            border="2px solid #333"
            @click="updateInformation()"
          />
        </div>
        <div class="col-md-3 my-4 pt-2">
          <p><a @dblclick="sayHI()" href="#">
          LinkedIn </a>
          <input
              type="text"
              @change="field_value_changed = true"
              v-model="user_info.Linkden"
              v-show="editUserInfo"
              @keyup.enter="
              closeEdit();
              "
             >
         </p>
          <p><a href="#">
            Github </a>
            <input
                type="text"
                @change="field_value_changed = true"
                v-model="user_info.Github "
                v-show="editUserInfo"
                @keyup.enter="
                  closeEdit();
                "
              >
         </p>
        </div>
      </div>
       <div
        :key="project.project_code"
        v-for="project in projects"
        class="Projects"
        >
        <Project :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ProfilePicture from "@/components/ProfilePicture.vue";
import Project from "@/components/Project.vue";
import Button from "@/components/Button.vue";
import { mapGetters, mapActions } from "vuex";


export default {
  name: "Home",
  components: {
    Header,
    ProfilePicture,
    Button,
    Project,
  },
  data(){
    return{
      user_info:"",
      editUserInfo : false,
      field_value_changed:false,
      password:"",
      newpassword:"",
      confirmpassword:"",
    }
  },
  created(){
    this.user_info = this.$store.getters['user/getUserInformation']
  },
  computed: {
    ...mapGetters({
    }),
    projects(){
      return this.$store.getters['projects/listOfProjectsByUserId'](this.user_info.user_id)
    }
  },
  methods:{
    updateInformation(){
      console.log('the length is',this.newpassword.length)
      if(this.password.length===0){
        alert('password is requiered')
      }
      else if (this.newpassword !== this.confirmpassword){
        alert('please confirm the new passwod')
      }
      else if(this.newpassword.length<3 && this.newpassword.length!==0){
        alert('the length of the password must be greater than 3')
      }
      else{
        this.editUserInfo = false
        
        var data = {
          'password':this.password,
          'username':this.user_info.username,
          'Linkden' : this.user_info.Linkden,
          'Github' : this.user_info.Github,
          'Full Name':this.user_info['Full Name'],
          'Discription': this.user_info.Discription,
          'user_id':this.user_info.user_id
        }
        if(this.newpassword.length>=3){
          data['newpassword'] = this.newpassword
        }

          // this.password = ""
          // this.newpassword = ""
        this.$store.dispatch('profile/editProfile',data)
      }
      
    },
    closeEdit(){
      this.editUserInfo = false
      this.password = ""
      this.newpassword = ""
    }
  }

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