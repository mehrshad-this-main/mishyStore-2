<script>
	export default {
		props: ['title', 'subTitle'],
		methods: {
			goToShop() {
				this.$router.push('/shop')
			},
		},
	}
</script>
<template>
	<v-sheet
		nuxt
		@click="goToShop"
		width="240"
		height="420"
		class="my-4 c-card pt-2 d-flex flex-column justify-center"
		elevation="2"
	>
		<div
			class="mx-auto myF"
			style="font-size: x-large"
		>
			{{ title }}
		</div>
		<span
			class="mx-auto myF"
			style="font-size: large"
			>{{ subTitle }}</span
		>
		<img
			width="180"
			src="/icon/cart-large-svgrepo-com.svg"
			class="mx-auto"
			alt="null"
		/>
		<div class="mx-auto d-flex align-center pa-2 rounded-pill">
			<span style="color: black"> دیدن همه محصولات </span>
			<img
				width="24"
				src="/icon/left-arrow-svgrepo-com.svg"
				class="my-auto mx-2"
				alt="left-arrow"
			/>
		</div>
	</v-sheet>
</template>
<style>
	.c-card {
		position: relative;
		background: linear-gradient(to top, #ffffff, #8977ca);
	}

	.c-card:hover {
		background: linear-gradient(to top, #f6ebff, #1f008f);
	}
</style>
