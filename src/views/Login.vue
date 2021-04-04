<template>
    <div id="login_container">
    <form class="login" @submit.prevent="login">
        <h1>Sign in</h1>
        <label>User name </label>
        <input  required v-model="username" type="text" placeholder="Snoopy"/>
        <br>
        <br>
        <label>Password </label>
        <input  required v-model="password" type="password" placeholder="Password"/>
        <hr/>   
        <button type="submit">Login</button>
    </form>
 </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    methods:{
        ...mapActions({

        }),
        // send user name and password by reading from the form
        login(){
            var res  = this.$store.dispatch('auth/loginUser',this)
            res.then(() => {
                console.log('hi')
                this.$router.push('/projects');
            })
        },
    },
    created(){
        console.log('log in Page')
    }
}
</script>

<style scoped>
#login_container{
    margin-top: 300px;
    width: 1000px;
    background-color: white;
    margin-left: 700px;
}
</style>