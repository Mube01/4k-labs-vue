<template>
	<footer class="relative pt-8 pb-6 pattern">
		<div class="container mx-auto px-4">
			<div class="flex flex-wrap text-left lg:text-left">
				<div
					class="
						w-full
						lg:w-6/12
						px-4
						flex flex-row
						self-baseline
						mb-6
						items-center
					"
				>
					<div class="mr-2 flex flex-col">
						<button
							class="
								bg-white
								text-blue-400
								shadow-lg
								font-normal
								h-10
								w-10
								items-center
								justify-center
								align-center
								rounded-full
								outline-none
								focus:outline-none
								mb-2
							"
							type="button"
							onclick="location.href='https://twitter.com/4kbots'"
						>
							<i class="fab fa-twitter"></i>
						</button>
						<button
							class="
								bg-white
								text-blue-600
								shadow-lg
								font-normal
								h-10
								w-10
								items-center
								justify-center
								align-center
								rounded-full
								outline-none
								focus:outline-none
								mb-2
							"
							type="button"
							onclick="location.href='https://www.facebook.com/4K4KLABS/'"
						>
							<i class="fab fa-facebook-square"></i>
						</button>
						<button
							class="
								bg-white
								text-blue-600
								shadow-lg
								font-normal
								h-10
								w-10
								items-center
								justify-center
								align-center
								rounded-full
								outline-none
								focus:outline-none
								mb-2
							"
							type="button"
						>
							<i class="fab fa-linkedin"></i>
						</button>
						<button
							class="
								bg-white
								text-gray-800
								shadow-lg
								font-normal
								h-10
								w-10
								items-center
								justify-center
								align-center
								rounded-full
								outline-none
								focus:outline-none
								mb-2
							"
							type="button"
						>
							<i class="fab fa-github"></i>
						</button>
					</div>
					<div>
						<h4 class="text-3xl fonat-semibold text-gray-700">
							Let's keep in touch!
						</h4>
						<h5 class="text-lg mt-0 mb-2 text-gray-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel
							voluptas eius ex, commodi impedit.
						</h5>
					</div>
				</div>
				<div class="w-full lg:w-6/12 px-4">
					<div class="flex flex-wrap items-top mb-6">
						<div class="w-full lg:w-4/12 px-4 ml-auto">
							<span
								class="block uppercase text-gray-500 text-sm font-semibold mb-2"
							>
								Links
							</span>
							<ul class="list-unstyled">
								<li>
									<a
										class="
											text-gray-600
											hover:text-gray-800
											font-semibold
											block
											pb-2
											text-sm
										"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										class="
											text-gray-600
											hover:text-gray-800
											font-semibold
											block
											pb-2
											text-sm
										"
									>
										Project
									</a>
								</li>
								<li>
									<a
										class="
											text-gray-600
											hover:text-gray-800
											font-semibold
											block
											pb-2
											text-sm
										"
									>
										Specialization
									</a>
								</li>
								<li>
									<a
										class="
											text-gray-600
											hover:text-gray-800
											font-semibold
											block
											pb-2
											text-sm
										"
									>
										Contact Us
									</a>
								</li>
							</ul>
						</div>
						<div class="w-full lg:w-4/12 px-4">
							<img
								alt="Card"
								src="@/assets/logo.webp"
								data-aos="flip-left"
								data-aos-easing="ease-out-cubic"
								data-aos-duration="2000"
								style="width: '600px'; height: '400px'"
								class="rounded-lg bg-blend-darken m-0 box-border"
							/>
						</div>
					</div>
				</div>
			</div>
			<hr class="my-6 border-gray-300" />
			<div
				class="flex flex-wrap items-center md:justify-between justify-center"
			>
				<div class="w-full md:w-4/12 px-4 mx-auto text-center">
					<div class="text-sm text-gray-500 font-semibold py-1">
						© <span id="get-current-year">2021</span>
						<a class="text-gray-500 hover:text-gray-800" target="_blank">
							4K Labs
						</a>
						.
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "Footer",
	};
</script>
