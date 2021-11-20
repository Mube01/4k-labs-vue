<template>
	<div>
		<Alert />
		<router-view :key="$route.path" />
	</div>
</template>

<script>
	import Alert from "@/components/Alert.vue";
	import { mapActions, mapGetters } from "vuex";
	export default {
		components: {
			Alert,
		},
		computed: {
			isAuthenticated() {
				return this.$store.getters["auth/isAuthenticated"];
			},
		},
		methods: {
			...mapActions({
				fetchProject: "projects/getAllProjects",
				getAllPortalInfo: "getAllPortalInfo",
			}),
		},
		mounted() {
			setInterval(() => {
				if (this.isAuthenticated) {
					this.getAllPortalInfo()
						.then((result) => {
							console.log("hi");
							console.log(result.data);
						})
						.catch((err) => {});
				}
			}, 2000);
		},
	};
</script>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
</style>
