<template>
	<v-menu
		open-on-hover
		offset-y
	>
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				v-bind="attrs"
				v-on="on"
				color=" secondary"
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
		</template>
		<v-card
			width="800"
			class="pa-4"
		>
			<v-row>
				<v-col cols="4">
					<v-list>
						<v-list-item>
							<v-list-item-title class="text-h6">
								دسته‌بندی ۱
							</v-list-item-title>
						</v-list-item>
						<v-list-item
							v-for="(item, index) in category1"
							:key="index"
						>
							<v-list-item-title>{{ item }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-col>

				<v-col cols="4">
					<v-list>
						<v-list-item>
							<v-list-item-title class="text-h6">
								دسته‌بندی ۲
							</v-list-item-title>
						</v-list-item>
						<v-list-item
							v-for="(item, index) in category2"
							:key="index"
						>
							<v-list-item-title>{{ item }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-col>
				<v-col cols="4">
					<v-img
						src="https://picsum.photos/300/200"
						class="rounded-lg"
					></v-img>
					<div class="text-h6 mt-2">پیشنهاد ویژه</div>
					<div class="text-body-2">محصولات ویژه را از دست ندهید!</div>
				</v-col>
			</v-row>
		</v-card>
	</v-menu>
</template>

<script>
	export default {
		data() {
			return {
				category1: ['لینک ۱', 'لینک ۲', 'لینک ۳', 'لینک ۴'],
				category2: ['لینک ۵', 'لینک ۶', 'لینک ۷', 'لینک ۸'],
			}
		},
	}
</script>
