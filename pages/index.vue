<script>
	export default {
		layout: 'index',
	}
</script>
<template>
	<div>
		<v-sheet
			max-width="100%"
			class="d-flex flex-row align-center my-4 mr-4"
		>
			<div class="d-none d-md-block">
				<Coption
					class="my-4"
					title="محصولات ویژه"
					subTitle="تخفیف های باورنکردنی"
				/>
			</div>
			<v-sheet
				max-width="100%"
				min-width="80%"
			>
				<GrpSlider :obj="true" />
			</v-sheet>
		</v-sheet>
		<v-row
			no-gutters
			align="center"
			class="my-16 pb-6"
		>
			<v-col
				cols="12"
				md="3"
				sm="6"
			>
				<v-img
					class="rounded-lg ma-2"
					:aspect-ration="16 / 9"
					max-height="200"
					max-width="100%"
					src="https://picsum.photos/seed/107300/200"
				></v-img
			></v-col>
			<v-col
				cols="12"
				md="3"
				sm="6"
			>
				<v-img
					:aspect-ration="16 / 9"
					max-height="200"
					max-width="100%"
					class="rounded-lg ma-2"
					src="https://picsum.photos/seed/106/300/200"
				></v-img
			></v-col>
			<v-col
				cols="12"
				md="6"
				sm="12"
			>
				<v-img
					:aspect-ration="1"
					max-height="200"
					max-width="100%"
					class="rounded-lg ma-2"
					src="https://picsum.photos/seed/105/800/240"
				></v-img
			></v-col>
		</v-row>
		<div class="mx-auto d-flex flex-column align-center mt-16 py-6">
			<v-icon
				x-large
				color="accent"
				>mdi-dialpad</v-icon
			>
			<span style="font-size: large">جدید ترین ها</span>
			<span style="font-size: small">لورم اسپیچ لورم اسپیچ لورم </span>
			<GrpSlider :obj="false" />
		</div>
		<div
			class="mx-auto d-flex"
			style="height: 200px"
		>
			<div class="c-div d-flex justify-center align-center">
				<span class="d-flex siteN myF">MishyStore</span>
				<div
					class="inner d-flex flex-row align-center justify-space-between"
				>
					<div
						class="myF mx-3"
						style="font-size: x-large"
					>
						امار گویای ان است که چرامارابایدانتخات کنید
					</div>
					<div>
						<img
							src="/icon/left-arrow-svgrepo-com.svg"
							width="50"
							alt="left"
						/>
					</div>
					<div
						class="d-flex flex-row ml-3"
						style="gap: 20px"
					>
						<div
							class="mx-auto num d-flex align-center justify-center"
						>
							<span class="primaryFont">988+</span>
							تعداد فروش
						</div>
						<div
							class="mx-auto num d-flex align-center justify-center"
						>
							<span class="primaryFont">500+</span>
							تنوع محصولات
						</div>
						<div
							class="mx-auto num d-flex align-center justify-center"
						>
							<span class="primaryFont">89%</span>
							رضایت مشتریان
						</div>
					</div>
				</div>
			</div>
		</div>
		<v-sheet
			class="d-flex align-center"
			height="300"
			width="100%"
		>
			<v-container
				class="d-flex flex-row align-center justify-space-between gr rounded"
			>
				<div>
					<div style="font-size: x-large; color: blanchedalmond">
						زمستان تمام شد، اما فروش بهاره ما تازه شروع شده است!
					</div>
					<div style="font-size: small">
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
						چاپ و با استفاده از
						<br />طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
						مجله در ستون و سطر چاپگرها و متون بلکه روزنامه و مجله
						در ستون و سطر
					</div>
					<div class="pa-3">
						<v-btn
							color="info"
							outlined
							class="rounded-pill"
							large
						>
							دیدن همه محصولات
							<img
								class="mx-2"
								src="/icon/left-arrow-svgrepo-com.svg"
								width="20"
								alt="left"
							/>
						</v-btn>
						<v-btn
							color="info"
							large
							outlined
							class="rounded-pill"
						>
							تماس با ما
							<img
								class="mx-2"
								src="/icon/left-arrow-svgrepo-com.svg"
								width="20"
								alt="left"
							/>
						</v-btn>
					</div>
				</div>
				<div>
					<img
						width="80"
						style="
							transform: rotateZ(45px)
								rotate3d(1, 1, 1, 45deg);
						"
						src="/icon/cart-large-minimalistic-svgrepo-com.svg"
					/>
				</div>
			</v-container>
		</v-sheet>
		<v-sheet
			width="100%"
			height="500"
			class="mx-auto d-flex flex-row align-center my-4 ml-4"
		>
			<v-sheet
				max-width="100%"
				min-width="80%"
				class="mx-auto"
				color="transparent"
			>
				<GrpSlider obj />
			</v-sheet>
			<div class="d-md-block d-none">
				<Coption
					class="my-4 ml-5"
					title="پرفروش ترن ها"
					subTitle="یعنی بهترین ها"
				/>
			</div>
		</v-sheet>
		<div class="d-flex justify-center flex-column align-center my-16">
			<v-icon
				x-large
				class="my-4"
				color="accent"
				>mdi-newspaper</v-icon
			>
			<span style="font-size: large"> وبلاگ</span>
			<span style="font-size: small">لورم اسپیچ لورم اسپیچ لورم </span>
		</div>
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
								>لورم ایپسوم متن ساختگی لورم ایپسوم متن
								ساختگی با تولید سادگی نامفهوم از صنعت چاپ
								و با استفاده از طراحان گرافیک است چاپگرها
								و متون بلکه روزنامه و مجله در شرایط فعلی
								تکنولوژی مورد نیاز ...
							</span>
						</v-card-subtitle>
					</v-card>
				</v-slide-item>
			</v-slide-group>
		</v-sheet>
	</div>
</template>
<style>
	.num {
		width: 175px;
		height: 40px;
		background-color: white;
		border-radius: 10px;
	}
	.c-div {
		background: #bea9c5;
		width: 250px;
		height: 100px;
		border-radius: 50px;
		margin: auto;
		position: relative;
		transition: all 1s ease-in-out;
	}
	.c-div:hover {
		width: 95%;
		background: #3c286b;
		border-radius: 10px;
	}
	.inner {
		opacity: 0;
		visibility: hidden;
		transition: all 2s ease-in-out;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.c-div:hover .inner {
		opacity: 1;
		visibility: visible;
	}
	.inner div {
		display: none;
	}
	.inner:hover div {
		display: block;
	}
	.c-div .siteN {
		color: #51367b;
		position: absolute;
		font-size: x-large;
		opacity: 1;
		transition: opacity 1s ease-in-out;
	}
	.c-div:hover .siteN {
		opacity: 0;
	}
</style>
