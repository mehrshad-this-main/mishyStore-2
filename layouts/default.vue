<script setup>
	import { state } from '../store/main'
	const navMenu = state().navMenu
</script>
<template>
	<v-app>
		<AppBar
			:indexed="false"
			class="d-none d-md-block"
		/>
		<NavBar
			:navMenu="navMenu"
			:indexed="false"
			class="d-none d-md-block"
		/>
		<v-main>
			<Nuxt />
		</v-main>
		<v-footer class="pa-0 mt-8">
			<CFooter />
		</v-footer>
	</v-app>
</template>
<style>
	.nav {
		text-decoration: none;
		font-weight: 400;
	}
	.myF {
		font-size: small;
		color: white;
	}
	@media screen and (max-width: 1200px) {
		.myF {
			text-align: center;
		}
	}
</style>
