<template>
	<div>
		<v-container fluid>
			<v-row class="pb-10">
				<v-col
					cols="12"
					md="4"
				>
					<div class="d-flex flex-column">
						<v-img
							height="300"
							width="800"
							class="rounded-xl"
							src="https://picsum.photos/seed/120/400/500"
						></v-img>
						<div>کیفیت و رضایت مشتریان دستور کار ماست..</div>
					</div>
				</v-col>
				<v-col
					cols="12"
					md="8"
				>
					<v-sheet
						class="mt-6 rounded-xl pa-10 text-h5"
						color="primary"
						width="100%"
					>
						<div>
							<span style="color: blueviolet">درباره ما</span>
							بیشتر بدانید
						</div>
						<div>
							<span style="font-size: medium">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ، و با استفاده از طراحان گرافیک است. چاپگرها
								و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
								لازم است.ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
								و با استفاده از طراحان گرافیک است.تولید سادگی
								نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
								است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ، و با استفاده از طراحان گرافیک است. چاپگرها
								و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
								لازم است.ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
								و با استفاده از طراحان گرافیک است.تولید سادگی
								نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
								است.
							</span>
						</div>
						<div>
							<div class="d-flex flex-md-row flex-column mt-2">
								<v-btn
									rounded
									large
									color="info"
									class="my-md-0 my-3"
									to="/contact-us.vue"
								>
									تماس باما
									<div>
										<v-img
											width="20"
											class="mr-2"
											src="/icon/support-svgrepo-com.svg"
										></v-img>
									</div>
								</v-btn>
								<v-btn
									rounded
									outlined
									large
									class="mx-2"
									color="info"
									to="/shop"
								>
									مشاهده فروشگاه
									<div>
										<v-img
											class="mr-2"
											width="20"
											src="/icon/cart-check-svgrepo-com(1).svg"
										></v-img>
									</div>
								</v-btn>
							</div>
						</div>
					</v-sheet>
				</v-col>
			</v-row>
			<v-row>
				<v-col
					cols="12"
					md="3"
					class="align-content-center"
				>
					<div style="font-size: larger">مزایای خریدازفروشگاه ما</div>
					<div>
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
						استفاده از طراحان گرافیک است.
					</div>
					<v-img
						src="/icon/left-arrow-svgrepo-com.svg"
						class="mx-auto d-md-block d-none"
						aspect-ratio="1"
						height="50"
						width="100"
					></v-img>
				</v-col>
				<v-col
					cols="12"
					md="9"
				>
					<v-container fluid>
						<v-row>
							<v-col
								v-for="i in 4"
								:key="i"
							>
								<v-card
									class="text-center align-center align-content-center rounded-xl"
									min-width="120px"
								>
									<v-icon
										size="50"
										color="pink"
										>mdi-instagram</v-icon
									>
									<div class="ma-auto pt-4">محصولات</div>
									<v-card-subtitle>
										لورم ایپسوم متن ساختگی با تولید سادگی
										نامفهوم از صنعت چاپ
									</v-card-subtitle>
								</v-card>
							</v-col>
						</v-row>
					</v-container>
				</v-col>
			</v-row>
		</v-container>
		<div class="d-flex flex-column align-center align-content-center my-8">
			<v-icon
				x-large
				color="accent"
				>mdi-account</v-icon
			>
			<span style="font-size: large">نظرات کاربران </span>
			<span style="font-size: small">لورم اسپیچ لورم اسپیچ لورم </span>
		</div>
		<v-sheet
			class="mx-auto"
			max-width="100%"
		>
			<v-slide-group
				class="pa-4"
				active-class="success"
				show-arrows
			>
				<v-slide-item
					v-for="i in 8"
					:key="i"
				>
					<v-card
						class="ma-4 mt-10 d-flex flex-column align-center text-center"
						height="210"
						width="400"
					>
						<v-avatar
							size="80"
							class="avatar"
						>
							<v-img
								:src="`https://picsum.photos/seed/12${i}/400/500`"
							></v-img>
						</v-avatar>
						<div style="font-size: large; transform: translate(0, -50%)">
							name
						</div>
						<span class="my-auto px-4">
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
							و با استفاده از طراحان گرافیک است.
						</span>
						<v-rating
							empty-icon="mdi-star-outline"
							full-icon="mdi-star"
							half-icon="mdi-star-half-full"
							length="5"
							readonly
							size="24"
							value="5"
							class="my-auto"
						></v-rating>
					</v-card>
				</v-slide-item>
			</v-slide-group>
		</v-sheet>
		<v-container
			fluid
			class="my-5"
		>
			<v-row no-gutters>
				<v-col
					cols="12"
					md="3"
				>
					<div class="d-flex">
						<v-img
							width="100%"
							class="rounded-r-xl"
							height="270"
							src="https://picsum.photos/seed/122/400/200"
						></v-img>
					</div>
				</v-col>
				<v-col
					cols="12"
					md="9"
				>
					<v-sheet
						color="primary"
						class="pa-4 d-flex flex-column justify-space-between mt-2 mt-md-0"
						min-height="270"
					>
						<div style="font-size: larger">
							برخی از اهداف و آرمان های مجموعه ما
						</div>
						<div>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
							و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
							روزنامه و مجله در ستون و سطرآنچنان که لازم است.لورم ایپسوم
							متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
							استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با
						</div>
						<div class="d-flex flex-wrap">
							<v-chip class="mx-4 my-2"
								>ارائه بهترین محصولات با نازلترین قیمت ها</v-chip
							>
							<v-chip class="mx-4 my-2"
								>ارائه انواع محصولات کاملا بهداشتی و
								استاندارد</v-chip
							>
							<v-chip class="mx-4 my-2"
								>ارتقا و بهبود سطح دانش جنسی جامعه</v-chip
							>
							<v-chip class="mx-4 my-2"
								>ارسال کاملا محرمانه به سراسر نقاط کشور</v-chip
							>
						</div>
					</v-sheet>
				</v-col>
			</v-row>
		</v-container>
		<GrpMajals class="pt-4" />
	</div>
</template>
<style>
	.avatar {
		transform: translate(0, -50%);
	}
</style>
