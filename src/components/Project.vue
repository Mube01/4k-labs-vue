<template>
	<div
		class="
			relative
			px-4
			py-6
			bg-gray-200
			shadow-lg
			sm:rounded-3xl
			bg-clip-padding bg-opacity-60
			border border-gray-100
			hover:drop-shadow-2xl hover:ring-8
			rounded-lg
			transform
			transition
			duration-500
			hover:scale-110
		"
		data-aos="zoom-y-out"
		data-aos-delay="150"
		style="backdropfilter: 'blur(20px) '"
	>
		<div class="flex flex-col px-6 py-5">
			<div class="flex flex-row justify-between">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1"
					strokeLinecap="round"
					strokeLinejoin="round"
					class="w-10 h-10 text-green-500"
				>
					<title>Folder</title>
					<path
						d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
					></path>
				</svg>
				<div class="flex flex-row items-center -mr-3">
					<a :href="project.github">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							class="w-6 h-6 text-black px-4 py-1 box-content"
						>
							<title>GitHub</title>
							<path
								d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
							></path>
						</svg>
					</a>
					<a :href="project.docs">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							class="w-6 h-6 text-black px-1 py-1 box-content"
						>
							<title>External Link</title>
							<path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							></path>
							<polyline points="15 3 21 3 21 9"></polyline>
							<line x1="10" y1="14" x2="21" y2="3"></line>
						</svg>
					</a>
				</div>
			</div>
			<div class="mt-4 flex flex-col text-left">
				<h1 class="mb-3 text-2xl h-16">{{ project.project_title }}</h1>

				<div class="divide-y divide-black">
					<div
						class="
							py-8
							text-base
							leading-6
							space-y-4
							text-gray-700
							sm:text-lg sm:leading-7
						"
					>
						<p class="h-10">
							{{ ProjectDesc }}
						</p>
					</div>
					<div
						class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7"
					>
						{{ project.Division }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Project",
		data() {
			return {};
		},
		props: {
			project: {
				type: Object,
			},
		},
		computed: {
			ProjectDesc() {
				return this.project.description.split(" ").splice(0, 10).join(" ");
			},
		},
	};
</script>

<style></style>
