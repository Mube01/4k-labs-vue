<template>
	<section class="relative bg-divisionbg" id="Specialization">
		<div
			class="absolute inset-0 bg-divisionbg pointer-events-none mb-16"
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
				bg-accent
				transform
				-translate-y-1/2
			"
		></div>
		<div class="custom-shape-divider-bottom-1635862722">
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<path
					d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
					class="shape-fill"
				></path>
			</svg>
		</div>

		<div class="relative max-w-6xl mx-auto px-4 sm:px-6">
			<div class="pt-12 md:pt-20">
				<div class="max-w-3xl mx-auto text-center pb-1.5 md:pb-16">
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
						Specialization
					</span>
					<p class="text-xl text-primaryOn">{{ DivisionInfo.divisionDesc }}</p>
					<!-- <p class="text-xl text-primaryOn">
						Our team is a combination of Electrical engineers, software
						engineers, Mechanical engineers, designers and more. 4K Labs- team
						is really humble ,smooth and fun.
					</p>
					<p class="text-xl text-primaryOn">
						According to the very interest and professional path members want to
						pursue 4K Labs have basic three specialization teams which are:
					</p> -->
				</div>

				<div class="md:grid md:grid-cols-12 md:gap-6">
					<div
						class="
							max-w-xl
							md:max-w-none md:w-full
							mx-auto
							md:col-span-7
							lg:col-span-6
							md:mt-6
						"
						data-aos="fade-right"
					>
						<div class="mb-8 md:mb-0">
							<a
								:key="index"
								v-for="(item, index) in DivisionInfo.division"
								class="
									flex
									items-center
									text-lg
									p-5
									rounded
									border
									transition
									duration-300
									ease-in-out
									mb-3
									bg-primary
									shadow-md
									border-accent
									hover:shadow-lg
								"
								href="#0"
							>
								<div>
									<div class="font-bold leading-snug tracking-tight mb-1">
										{{ item.name }}
									</div>
									<div class="text-primaryOn">
										{{ item.desc }}
									</div>
								</div>
								<div
									class="
										flex
										justify-center
										items-center
										w-8
										h-8
										bg-primary
										rounded-full
										shadow
										flex-shrink-0
										ml-3
									"
								>
									<img src="../assets/Png.png" class="w-3 h-3 fill-current" />
								</div>
							</a>
						</div>
					</div>

					<div
						class="
							max-w-xl
							md:max-w-none md:w-full
							mx-auto
							md:col-span-5
							lg:col-span-6
							mb-8
							md:mb-0 md:order-1
						"
						data-aos="zoom-y-out"
						ref="{tabs}"
					>
						<div class="relative flex flex-col text-center lg:text-right">
							<div class="relative inline-flex flex-col">
								<img
									class="md:max-w-none mx-auto rounded invisible"
									src="{logo}"
									width="500"
									height="462"
									alt="Features bg"
								/>
								<img
									class="
										md:max-w-none
										absolute
										w-full
										left-0
										transform
										animate-float
									"
									style="top: -10%"
									src="../assets/logo.webp"
									width="500"
									height="44"
									alt="Element"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import StaticProject from "./StaticProject";
	import { DivisionInfo } from "@/assets/StaticData";

	export default {
		name: "StaticDivision",
		components: {
			StaticProject,
		},
		data() {
			return {
				// navLink: navLink,
				DivisionInfo: DivisionInfo,
				top: true,
				isBottom: "bg-white blur shadow-lg",
				isActiveButton: "btn-sm text-primary bg-secondaryOn  ml-3",
				isActiveLink:
					"font-medium text-primaryOn hover:text-secondaryOn px-5 py-3 flex items-center transition duration-150 ease-in-out",
			};
		},
		methods: {},
		created() {},
	};
</script>

<style scoped></style>
