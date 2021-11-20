<template>
	<header
		v-on:scroll="scrollHandler"
		class="
			fixed
			w-full
			z-30
			md:bg-opacity-90
			transition
			duration-300
			ease-in-out
		"
		:class="{ 'bg-white blur shadow-lg': !top }"
	>
		<div class="max-w-6xl mx-auto px-5 sm:px-6">
			<div class="flex items-center justify-between h-16 md:h-20">
				<div class="flex-shrink-0 mr-4">
					<router-link
						to="/"
						class="flex flex-row items-center"
						aria-label="Cruip"
						@click="scrollToTop()"
					>
						<img src="../assets/logo.webp" class="logo" alt="" />
						<!-- Text After Logo-->
						<span
							class="
								m-2
								text-2xl
								font-semibold
								bg-clip-text
								text-transparent
								bg-gradient-to-r
								from-blue-500
								to-teal-400
							"
						>
						</span>
					</router-link>
				</div>
				<nav class="flex flex-grow">
					<ul class="flex flex-grow justify-end flex-wrap items-center">
						<li :key="index" v-for="(link, index) in navLink">
							<a
								:href="'#' + link.name"
								v-if="!link.isButton"
								class="
									font-medium
									text-primaryOn
									hover:text-secondaryOn
									px-5
									py-3
									flex
									items-center
									transition
									duration-150
									ease-in-out
								"
							>
								{{ link.name }}
							</a>
							<router-link
								to="login"
								v-else-if="link.isButton"
								class="btn-sm text-primary bg-secondaryOn ml-3 bg-black"
							>
								{{ link.name }}
							</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>
<script>
	import { navLink } from "@/assets/StaticData";
	export default {
		name: "StaticHeader",

		data() {
			return {
				navLink: navLink,
				top: true,
				isBottom: "bg-white blur shadow-lg",
				isActiveButton: "btn-sm text-primary bg-secondaryOn  ml-3",
				isActiveLink:
					"font-medium text-primaryOn hover:text-secondaryOn px-5 py-3 flex items-center transition duration-150 ease-in-out",
			};
		},
		created() {
			window.addEventListener("scroll", this.scrollHandler);
		},
		methods: {
			scrollHandler(event) {
				window.pageYOffset > 10 ? (this.top = false) : (this.top = true);
			},
			scrollToTop() {
				window.scrollTo(0, 0);
			},
		},
	};
</script>
<style>
	.logo {
		width: 100px;
		scale: 1.2;
		background: white;
		border-radius: 200px;
		z-index: 10;
	}
</style>
