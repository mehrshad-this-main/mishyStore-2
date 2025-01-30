<script>
	import { ref } from 'vue'
	export default {
		props: {
			indexed: Boolean,
		},
		setup(props) {
			const drawer = ref(false)
			return { drawer }
		},
	}
</script>
<template>
	<div>
		<v-app-bar
			elevation="0"
			color="transparent"
		>
			<h1
				class="site-title"
				v-bind:class="[indexed ? 'site-title-white' : 'site-title-color']"
			>
				MishyStore
			</h1>
			<v-responsive
				max-width="400"
				min-width="180"
				class="mx-auto"
			>
				<v-text-field
					:class="[indexed ? 'white' : 'bordered']"
					class="mx-2"
					append-icon="mdi-magnify"
					placeholder="جستوجو کنید..."
					hide-details
					rounded
				/>
			</v-responsive>
			<v-chip
				color="info"
				outlined
				class="mx-1 mx-md-2"
			>
				<v-icon color="secondary">mdi-account</v-icon>
				ورود و عضویت
				<v-icon>mdi-chevron-down</v-icon>
			</v-chip>
			<div
				class="d-flex flex-row ma-2"
				style="gap: 20px"
			>
				<v-icon :color="indexed ? 'white' : 'secondary'"
					>mdi-heart-outline</v-icon
				>
				<v-icon :color="indexed ? 'white' : 'secondary'"
					>mdi-reload</v-icon
				>
				<v-icon
					@click="drawer = true"
					:color="indexed ? 'white' : 'secondary'"
					>mdi-cart</v-icon
				>
			</div>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			absolute
			temporary
		></v-navigation-drawer>
	</div>
</template>
<style>
	.site-title {
		font-size: 2rem;
		font-weight: 400;
	}
	.site-title-white {
		color: white;
	}
	.site-title-color {
		color: #3c286b;
	}
	.bordered {
		border: 2px solid #3c286b;
	}
	@media only screen and (max-width: 1200px) {
		.site-title {
			font-size: 1.5rem;
		}
	}
</style>
