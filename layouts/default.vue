<template>
	<v-app>
		<AppBar
			:indexed="false"
			class="d-none d-md-block"
		/>
		<NavBar class="d-none d-md-block" />
		<v-main>
			<Nuxt />
		</v-main>
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
