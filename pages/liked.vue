<template>
	<div class="d-flex flex-column justify-center align-center">
		<v-icon
			color="secondary"
			size="64"
			class="mt-8"
			>mdi-heart</v-icon
		>
		<span style="font-size: large"> علاقه مندی ها </span>
		<span style="font-size: small"> لیست علاقه مندی های شما </span>
		<v-container fluid>
			<v-sheet
				color="primary"
				rounded
				width="100%"
				class="d-flex justify-center align-center pa-8"
			>
				<span>
					هیچ محصولی در لیست علاقه مندی شما وجود ندارد. لطفا ابتدا از فروشگاه
					محصولاتی را به لیست علاقه مندی خود اضافه کنید.
				</span>
			</v-sheet>
		</v-container>
		<v-btn
			color="info"
			rounded
			large
			to="/"
			class="mb-16"
		>
			برگشت فروشگاه
		</v-btn>
	</div>
</template>
