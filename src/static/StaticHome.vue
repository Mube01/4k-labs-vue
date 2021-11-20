<template>
	<div class="flex flex-col min-h-screen overflow-hidden">
		<StaticHeader />
		<main class="flex-grow">
			<HeroSection />
			<StaticDivision id="Specialization" />
			<Events />
			<projects />
		</main>
		<Footer />
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	import StaticHeader from "./StaticHeader";
	import StaticDivision from "./StaticDivision";
	import Event from "./Event";
	import Teams from "./Teams";
	import Footer from "./Footer";
	import Projects from "../views/Projects.vue";
	import Events from "./Events.vue";
	import HeroSection from "./HeroSection";
	export default {
		name: "StaticHome",
		components: {
			StaticHeader,
			StaticDivision,
			Teams,
			Events,
			Projects,
			HeroSection,
			Footer,
		},
		methods: {
			...mapActions({
				getAllInfo: "home/getAllInfo",
			}),
		},
		computed: {
			...mapGetters({
				events: "home/getEvents",
			}),
		},
		created() {
			this.getAllInfo()
				.then((result) => {})
				.catch((err) => {});
		},
	};
</script>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	div {
		font-family: "Poppins", sans-serif;
	}
	.prompt {
		padding: 50px;
		text-align: center;
		font-size: 30px;
		background: #a97c50;
		color: white;
	}
	#Events {
		width: 100%;
		padding: 25px;

		margin-top: 70px;
	}
	@media screen and (max-width: 700px) {
		#Events {
			display: block;
		}
		.prompt {
			margin-top: 45px;
		}
		#Teams {
			height: 1250px;
			margin: 40px 0;
		}
	}
	#Teams {
		margin-top: 50px;
	}
	#Teams h1 {
		margin-bottom: 20px;
	}
	#Events h1 {
		margin-bottom: 40px;
	}
	p {
		font-size: 20px;
	}
	.text p {
		text-align: justify;
	}
</style>
