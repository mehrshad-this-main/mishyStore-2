<script>
	import { ref } from 'vue'
	export default {
		props: ['navList'],
		setup() {
			const drawer = ref(false)
			const drawer2 = ref(false)
			return { drawer, drawer2 }
		},
	}
</script>
<template>
	<div>
		<v-app-bar
			elevation="0"
			class="ma-4"
			shaped
		>
			<v-btn
				@click="drawer2 = true"
				icon
				plain
				small
				class="mx-2"
				color="primary"
			>
				<v-img
					src="/icon/category-svgrepo-com.svg"
					width="20"
					alt="cat"
				></v-img>
			</v-btn>
			<v-app-bar-title class="mx-auto">MISHY STORE</v-app-bar-title>
			<div
				class="mx-2 d-flex flex-row"
				style="gap: 10px"
			>
				<v-icon color="primary">mdi-account</v-icon>
				<v-icon
					@click="drawer = true"
					color="primary"
					>mdi-cart</v-icon
				>
			</div>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			app
			temporary
		></v-navigation-drawer>
		<v-navigation-drawer
			v-model="drawer2"
			right
			app
			temporary
			color="primary"
		>
			<h3 class="ma-auto pa-4 info site-title">MISHY STORE</h3>
			<v-text-field
				append-icon="mdi-magnify"
				placeholder="جستوجو کنید..."
				hide-details
				class="white pa-2 ma-4"
				rounded
			/>
			<v-list nav>
				<v-list-item
					v-for="i in navList"
					:key="i.id"
					:to="i.link"
				>
					{{ i.name }}
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>
