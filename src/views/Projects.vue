<template>
	<section class="relative bg-projectbg" id="Projects">
		<div
			class="absolute inset-0 bg-projectbg pointer-events-none mb-16"
			aria-hidden="true"
		></div>
		<div
			class="
				absolute
				left-0
				right-0
				m-auto
				w-px
				p-px
				h-20
				bg-projectbg
				transform
				-translate-y-1/2
			"
		></div>
		<div class="relative max-w-6xl mx-auto px-4 sm:px-6">
			<div class="pt-12 md:pt-20">
				<div class="w-full text-center pb-12 md:pb-16">
					<span
						class="
							inline-block
							mb-10
							text- text-4xl
							bg-clip-text
							text-transparent
							bg-gradient-to-r
							from-blue-500
							to-teal-400
							font-black
						"
					>
						Projects
					</span>
					<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
						<div
							:key="project.project_id"
							v-for="(project, val) in projectToDisplay"
						>
							<Project :num="val + 1" :project="project" />
						</div>
					</div>
					<button
						class="
							btn-sm
							text-gray-200
							bg-gray-900
							hover:bg-gray-800
							ml-3
							my-12
						"
						v-on:click="showLess = !showLess"
						v-show="hasButton"
					>
						{{ showLess === true ? "Show Less" : "Show More" }}
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	import Project from "../components/Project.vue";
	export default {
		name: "Projects",
		components: {
			// Event,
			Project,
		},
		data() {
			return {
				showLess: true,
				hasButton: true,
			};
		},
		methods: {
			...mapActions({
				getAllInfo: "home/getAllInfo",
			}),
			toggleHasButton() {
				this.hasButton = false;
			},
		},
		computed: {
			...mapGetters({
				projects: "home/getProjects",
			}),
			projectToDisplay() {
				this.projects.length <= 3 ? this.toggleHasButton() : "";
				if (this.showLess) {
					return this.projects.slice(0, 3);
				} else {
					return this.projects;
				}
			},
		},
		created() {
			this.getAllInfo()
				.then((result) => {})
				.catch((err) => {});
			console.log(this.projects);
		},
	};
</script>

<style></style>
