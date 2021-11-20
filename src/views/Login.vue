<template>
	<div class="flex flex-col min-h-screen overflow-hidden">
		<StaticHeader />
		<main class="flex-grow">
			<section className="relative">
				<div className="px-16 mx-auto ">
					<div className="pt-16  md:pt-40 ">
						<div className=" ">
							<div>
								<form class="" onsubmit="return false">
									<!-- <img class="logo" src="@/assets/logo.webp" /> -->
									<div id="google-signin-button"></div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
		<Footer id="footer" />
	</div>
</template>

<script>
	import StaticHeader from "../static/StaticHeader";
	import Footer from "@/static/Footer.vue";
	import { mapGetters, mapActions } from "vuex";

	export default {
		name: "Login",
		components: { StaticHeader, Footer },
		data() {
			return {
				password: "",
				username: "",
			};
		},
		computed: {
			...mapGetters({
				isAuthenticated: ["auth/isAuthenticated"],
				isSuperAdmin: ["user/isSuperAdmin"],
			}),
		},
		methods: {
			...mapActions({
				errorAlert: "errorAlert",
				successAlert: "successAlert",
				loginUser: "auth/loginUser",
				logoutUser: "auth/logoutUser2",
			}),
			// send user name and password by reading from the form
			onSignIn(user) {
				var id_token = user.getAuthResponse().id_token;
				this.loginUser(id_token)
					.then((result) => {
						this.successAlert("login successfull");
						this.$router.push({ name: "Divisions" });
					})
					.catch((err) => {
						this.errorAlert(err.message);
					});
			},
			onFailure(err) {
				this.errorAlert(err.error);
			},
		},
		mounted() {
			if (this.isSuperAdmin) {
				this.logoutUser();
			} else if (this.isAuthenticated) {
				this.$router.push({ name: "Divisions" });
			} else {
				window.gapi.load("auth2", () => {
					this.auth2 = window.gapi.auth2.init({
						scope: "profile email",
					});
				});
				const gapi = window.gapi;
				gapi.signin2.render("google-signin-button", {
					onsuccess: this.onSignIn,
					onfailure: this.onFailure,
					width: 240,
					height: 50,
					longtitle: true,
					theme: "white",
				});
			}
		},
	};
</script>

<style scoped></style>
