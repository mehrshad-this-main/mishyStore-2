<script setup>
	import { state } from '../store/main'
	const navMenu = state().navMenu
</script>
<template>
	<v-app>
		<div class="primary pb-14 rounded-bl-circle">
			<GrpAppBar
				:navList="navMenu"
				class="d-block d-md-none"
			/>
			<AppBar
				indexed
				class="d-none d-md-block"
			/>
			<NavBar
				:navMenu="navMenu"
				:indexed="true"
				class="d-none d-md-block"
			/>
			<v-row
				no-gutters
				class="align-start justify-space-around mt-md-14 pt-3"
			>
				<v-col
					cols="12"
					md="5"
				>
					<div class="pa-4">
						<div
							style=""
							class="pr-4 pa-sm-4 intro-title"
						>
							از هویت واقعی خود زنده بمانید!
						</div>

						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
						چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
						بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
						برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
						با هدف بهبود ابزارهای کاربردی می باشد
					</div>
				</v-col>
				<v-col
					cols="12"
					md="7"
				>
					<v-responsive
						class="d-flex flex-row"
						style="gap: 20px; max-width: 100%"
					>
						<img
							v-for="i in 3"
							:key="i"
							class="rounded-xl pa-2"
							width="33%"
							style="max-width: 345px"
							:src="`https://picsum.photos/seed/10${i}/300`"
							alt="lorem img"
						/>
					</v-responsive>
				</v-col>
			</v-row>
		</div>
		<div>
			<Nuxt />
		</div>
		<v-footer class="ma-0 pa-0">
			<CFooter />
		</v-footer>
	</v-app>
</template>
<style>
	.intro-title {
		color: #3c286b;
		font-size: xx-large;
	}
	@media only screen and(max-width: 600px) {
		.intro-title {
			font-size: large;
			padding: 20px;
		}
	}
</style>
