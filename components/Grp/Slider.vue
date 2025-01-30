<script>
	import { computed } from 'vue'
	export default {
		props: ['obj'],
		setup(props) {
			const pList = [
				{
					name: 'کوه کیش',
					id: 0,
					price: 12000,
				},
				{
					name: 'جزیره کیش',
					id: 1,
					price: 32000,
				},
				{
					name: 'قهوه کیش',
					id: 2,
					price: 2000,
				},
				{
					name: 'راه کیش',
					id: 3,
					price: 42000,
				},
				{
					name: 'گل زنبق',
					id: 4,
					price: 42000,
				},
			]
			const pList2 = [
				{
					name: 'کوه کیش',
					id: 13,
					price: 12000,
				},
				{
					name: 'جزیره کیش',
					id: 14,
					price: 32000,
				},
				{
					name: 'قهوه کیش',
					id: 12,
					price: 2000,
				},
				{
					name: 'راه کیش',
					id: 10,
					price: 42000,
				},
				{
					name: 'گل زنبق',
					id: 11,
					price: 42000,
				},
			]
			const mainList = computed(() => (props.obj ? pList : pList2))

			return { mainList }
		},
	}
</script>
<template>
	<v-slide-group
		show-arrows
		class="my-4"
	>
		<v-slid-item
			class="ma-2"
			v-for="i in mainList"
			:key="i.id"
		>
			<Card
				:name="i.name"
				:id="i.id"
				:price="i.price"
			/>
		</v-slid-item>
	</v-slide-group>
</template>
