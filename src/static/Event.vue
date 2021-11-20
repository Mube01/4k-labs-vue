<template>
	<div
		class="grid gap-3 grid-cols-12 grid-rows-1 mb-24"
		data-aos="zoom-y-out"
		data-aos-delay="150"
	>
		<div
			class="z-50 items-center"
			:class="[num % 2 == 0 ? rightCont : leftCont]"
		>
			<h2
				class="
					mb-1
					text-2xl
					font-bold
					leading-none
					tracking-tight
					text-gray-400
				"
			></h2>
			<h1
				class="
					mb-4
					text-2xl
					font-bold
					leading-none
					tracking-tight
					text-gray-800
				"
			>
				{{ event.event_title }}
			</h1>
			<div
				class="
					px-4
					py-6
					bg-accent
					shadow-lg
					sm:rounded-3xl
					bg-clip-padding bg-opacity-60
					border border-gray-100
				"
			>
				<div class="max-w-md mx-auto">
					<div class="divide-y divide-red-200">
						<div
							class="
								py-1
								text-base
								leading-6
								space-y-4
								text-gray-700
								sm:text-lg sm:leading-7
							"
						>
							<p>
								{{ event.event_description }}
							</p>
						</div>
						<div class="flex flex-row-reverse">
							<img
								:src="`/api_v1/get_event/${event.event_image}`"
								class="h-7 w-auto"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				class="flex"
				:class="[num % 2 == 0 ? 'flex-row-reverse' : 'flex-row']"
			>
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
			</div>
			<br />
		</div>
		<div class="m-auto" :class="[num % 2 == 0 ? leftImg : rightImg]">
			<div class="customeFilter">
				<img
					alt="Card"
					:src="`/api_v1/get_event/${event.event_image}`"
					class="rounded-lg bg-blend-darken hover:bg-black m-0 box-border img"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Event",
		data() {
			return {
				leftImg: "col-start-1 col-end-8 row-start-1 row-end-2 ",
				rightCont:
					"col-start-7 col-end-13 row-start-1 row-end-2  z-50 text-right ",

				rightImg: "col-start-6 col-end-13 row-start-1 row-end-2 ",
				leftCont: "col-start-1 col-end-7 row-start-1 row-end-2  ",
			};
		},
		props: {
			event: {
				type: Object,
			},
			num: Number,
		},
	};
</script>

<style scoped></style>
