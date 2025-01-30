<script setup>
	const navMenu = [
		{ name: 'صفحه اصلی', link: '/', id: 0 },
		{ name: 'فروشگاه', link: '/shop', id: 1 },
		{ name: 'وبلاگ', link: '/', id: 2 },
		{ name: 'درباره ما', link: '/', id: 3 },
		{ name: 'تماس باما', link: '/', id: 4 },
	]
</script>
<template>
	<div>
		<div
			style="width: 97.5%"
			class="d-flex flex-row justify-center mx-auto my-auto"
		>
			<v-sheet
				class="d-flex flex-row justify-space-between rounded-r-pill mx-auto align-center"
				color="white"
				style="height: fit-content; width: 100%"
			>
				<v-btn
					color="primary"
					outlined
					rounded
					class="ml-0 ml-md-2 mr-4 my-4"
				>
					<v-img
						src="/icon/category-svgrepo-com.svg"
						alt="category"
						width="24"
						class="my-2 mx-0 mx-md-3"
					></v-img>
					<span class="mx-1">دسته بندی</span>
					<v-icon class="mx-0 mx-md-2">mdi-chevron-down</v-icon>
				</v-btn>
				<v-row
					no-gutters
					class="d-flex flex-row"
				>
					<v-btn
						color="primary"
						plain
						v-for="i in navMenu"
						:key="i.id"
						:to="i.link"
					>
						{{ i.name }}
					</v-btn>
				</v-row>
				<v-chip
					class="mx-4 primes"
					outlined
					color="primary"
				>
					<span> دارای مجوز رسمی از هرجا که بخوای </span>
				</v-chip>
			</v-sheet>
			<v-sheet
				width="fit-content"
				shaped
				class="accent d-flex flex-column justify-center align-center text-center"
			>
				<v-img
					width="40"
					class="ma-2"
					src="/icon/support-svgrepo-com.svg"
				></v-img>
				<span class="myF mt-0 mt-md-1"> پشتیبانی فوری </span>
				<span
					style="font-size: large"
					class="myF my-1 mx-2 mx-md-4"
				>
					#123145
				</span>
			</v-sheet>
		</div>
	</div>
</template>
<style>
	.primes {
		padding: auto;
	}
	@media only screen and (max-width: 1100px) {
		.primes {
			display: none;
		}
	}
</style>
