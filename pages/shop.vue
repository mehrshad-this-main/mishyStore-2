<script>
	import { mainList } from '../store/str'
	export default {
		data() {
			return {
				min: -50,
				max: 90,
				range: [-20, 70],
				mainList,
			}
		},
		setup() {
			const tags = ['کوه کیش', 'جزیره کیش', 'قهوه کیش', 'راه کیش', 'گل زنبق']
			const brC = [
				{
					text: 'صفحه اصلی',
					to: '/',
				},
				{
					text: 'فروشگاه',
					to: '/shop',
				},
			]
			const items = [
				{ title: 'Click Me' },
				{ title: 'Click Me' },
				{ title: 'Click Me' },
				{ title: 'Click Me 2' },
			]
			return { brC, items, tags }
		},
	}
</script>
<template>
	<div class="my-6 pb-2">
		<v-breadcrumbs>
			<template v-slot:divider>
				<v-icon>mdi-forward</v-icon>
			</template>
			<v-breadcrumbs-item
				v-for="i in brC"
				:key="i.text"
				:to="i.to"
			>
				/{{ i.text }}
			</v-breadcrumbs-item>
		</v-breadcrumbs>
		<v-row
			no-gutters
			class="my-4"
		>
			<v-col
				cols="12"
				md="3"
				class="px-1"
			>
				<v-sheet
					style="position: sticky; top: 15px"
					width="100%"
					color="info"
					class="rounded-xl"
				>
					<div class="text-h4 pa-4 myF">جستجو</div>
					<v-text-field
						style="height: 50px"
						class="mx-2 white"
						append-icon="mdi-magnify"
						placeholder="جستوجو کنید..."
						rounded
					/>
					<div class="pa-4">
						<v-range-slider
							v-model="range"
							:max="max"
							:min="min"
							hide-details
							class="align-center"
						>
						</v-range-slider>
						<div class="d-flex flex-row justify-space-around">
							<v-text-field
								dark
								rounded
								:value="range[1]"
								class="mt-0 pt-0"
								hide-details
								single-line
								style="max-width: 160px"
								@change="$set(range, 1, $event)"
							></v-text-field>
							<v-text-field
								dark
								rounded
								:value="range[0]"
								class="mt-0 pt-0"
								hide-details
								single-line
								style="max-width: 160px"
								@change="$set(range, 0, $event)"
							></v-text-field>
						</div>
					</div>
					<div class="mr-4">
						<div class="text-h4 myF">دسته بندی</div>
						<v-checkbox
							dark
							color="white"
							v-for="i in tags"
							:key="i"
							:label="i"
						></v-checkbox>
					</div>
					<div class="text-h4 pa-4 myF">برند ها</div>
					<div class="pa-3">
						<v-chip-group
							active-class="white--text"
							column
							outlined
							multiple
						>
							<v-chip
								v-for="tag in tags"
								:key="tag"
							>
								{{ tag }}
							</v-chip>
						</v-chip-group>
					</div>

					<div class="py-3 d-flex flex-row justify-center">
						<v-btn
							style="width: 90%"
							dark
							color="primary"
							black
							>اعمال فیلتر</v-btn
						>
					</div>
				</v-sheet>
			</v-col>
			<v-col
				cols="12"
				md="9"
				class="px-1"
			>
				<v-sheet
					color="primary"
					width="100%"
					height="80"
					class="rounded-xl align-center d-flex justify-space-between"
				>
					<div class="text-h4 pa-4 myF">فروشگاه</div>
					<div class="pa-4">
						<v-menu offset-y>
							<template v-slot:activator="{ on, attrs }">
								<v-btn
									color="info"
									outlined
									v-bind="attrs"
									v-on="on"
								>
									مرتب سازی بر اساس
								</v-btn>
							</template>
							<v-list>
								<v-list-item
									v-for="(item, index) in items"
									:key="index"
								>
									<v-list-item-title>
										{{ item.title }}
									</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
					</div>
				</v-sheet>
				<v-row no-gutters>
					<Card
						v-for="i in mainList"
						:key="i.id"
						:name="i.name"
						:price="i.price"
						:id="i.id"
						class="mr-4"
					/>
				</v-row>
			</v-col>
		</v-row>
	</div>
</template>
