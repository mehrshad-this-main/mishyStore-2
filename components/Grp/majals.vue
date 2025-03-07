<template>
	<v-sheet
		width="100%"
		class="d-flex mb-16 justify-center align-center"
	>
		<v-slide-group show-arrows>
			<v-slide-item
				v-for="i in 4"
				:key="i"
				class="ma-2"
			>
				<v-card
					class="rounded pa-2"
					width="290"
				>
					<v-img
						width="250"
						class="rounded ma-auto"
						height="170"
						src="https://picsum.photos/seed/1017/300/260"
					/>
					<v-card-title>لورم ایپسوم متن ساختگی</v-card-title>
					<v-card-subtitle>
						<span
							>لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی با تولید
							سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
							است چاپگرها و متون بلکه روزنامه و مجله در شرایط فعلی
							تکنولوژی مورد نیاز ...
						</span>
					</v-card-subtitle>
				</v-card>
			</v-slide-item>
		</v-slide-group>
	</v-sheet>
</template>
