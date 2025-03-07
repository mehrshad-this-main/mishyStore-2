<script>
	export default {
		props: {
			navMenu: Array,
			indexed: Boolean,
		},
	}
</script>
<template>
	<div>
		<div
			style="width: 97.5%"
			class="d-flex flex-row justify-center mx-auto my-auto"
		>
			<v-sheet
				class="d-flex flex-row justify-space-between rounded-r-pill mx-auto align-center"
				:color="indexed ? 'white' : 'primary'"
				style="height: fit-content; width: 100%"
			>
				<FMegaMenu />
				<v-row
					no-gutters
					class="d-flex flex-row"
				>
					<v-btn
						:color="indexed ? 'info' : 'secondary'"
						plain
						v-for="i in navMenu"
						:key="i.id"
						:to="i.link"
					>
						{{ i.name }}
					</v-btn>
				</v-row>
				<v-chip
					class="mx-4 d-none d-md-block"
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
<style></style>
