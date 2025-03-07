<script>
	export default {
		props: {
			name: String,
			id: Number,
			tag: String,
		},
	}
</script>
<template>
	<v-sheet
		color="primary"
		class="d-flex flex-md-row flex-column justify-space-between rounded-xl pa-4"
		width="100%"
	>
		<div class="custom-pic">
			<v-img
				width="100%"
				height="140"
				class="rounded-xl"
				:src="`https://picsum.photos/seed/10${id}/720/400`"
			></v-img>
		</div>
		<div class="d-flex flex-column justify-space-between pa-2">
			<div>
				{{ name }}
			</div>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing</div>
			<div class="d-flex flex-row justify-space-between">
				<v-btn
					color="info"
					small
				>
					{{ tag }}
				</v-btn>
				<v-btn
					outlined
					small
					color="secondary"
				>
					ادامه مطلب
				</v-btn>
			</div>
		</div>
	</v-sheet>
</template>
<style></style>
