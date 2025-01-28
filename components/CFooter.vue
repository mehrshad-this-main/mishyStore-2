<script setup>
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	const chipList = [
		{
			title: 'جدید ترین محصولات',
			img: 'fire-svgrepo-com(2).svg',
			id: 0,
		},
		{
			title: 'درباره شرکت',
			img: 'info-circle-svgrepo-com.svg',
			id: 1,
		},
		{
			title: 'همکاری با شرکت',
			img: 'support-svgrepo-com.svg',
			id: 2,
		},
		{
			title: 'مجوز های فعالیت',
			img: 'tick-svgrepo-com.svg',
			id: 3,
		},
		{
			title: 'خدمات پس ازفروش',
			img: 'deliver-food-svgrepo-com.svg',
			id: 4,
		},
	]
	const socialMedia = ['instagram', 'telegram', 'bale', 'whatsapp', 'soroush']
	const navList = [
		{
			id: 0,
			title: 'دسترسی سریع ',
			list: [
				{ title: 'صفحه اصلی ', to: '/', id: 1 },
				{ title: 'فروشگاه محصولات', to: '/', id: 2 },
				{ title: 'درباره ما', to: '/', id: 3 },
				{ title: 'تماس با ما', to: '/', id: 4 },
				{ title: 'مقالات سایت ', to: '/', id: 5 },
			],
		},
		{
			id: 1,
			title: 'لینک های مفید',
			list: [
				{ title: 'حساب کاربری', to: '/', id: 1 },
				{ title: 'فروشنده شوید', to: '/', id: 2 },
				{ title: 'درخواست همکاری', to: '/', id: 3 },
				{ title: 'قوانین مرجوعی', to: '/', id: 4 },
				{ title: 'حریم خصوصی', to: '/', id: 5 },
			],
		},
		{
			id: 2,
			title: 'دسته بندی ها',
			list: [
				{ title: 'فروشنده شوید', to: '/', id: 1 },
				{ title: 'تماس با ما', to: '/', id: 2 },
				{ title: 'درخواست همکاری', to: '/', id: 3 },
				{ title: 'حریم خصوصی', to: '/', id: 4 },
				{ title: 'مقالات سایت ', to: '/', id: 5 },
			],
		},
	]
</script>
<template>
	<v-sheet
		width="100%"
		color="info"
		class="d-flex flex-column"
	>
		<v-row
			no-gutters
			class="btn-footer d-flex flex-row flex-wrap justify-space-around"
		>
			<div
				v-for="i in chipList"
				style="gap: 10px"
				class="rounded-pill d-flex align-center chip justify-start"
				:key="i.id"
			>
				<v-avatar
					color="primary"
					class="mr-2"
				>
					<img
						:src="`/icon/${i.img}`"
						alt="icon"
						class="ma-2 pa-2"
						width="40"
					/>
				</v-avatar>
				<span style="font-size: small">{{ i.title }} </span>
			</div>
		</v-row>
		<v-container class="d-flex justify-center align-center footerC">
			<v-row
				no-gutters
				align="center"
			>
				<v-col
					cols="12"
					md="6"
					class="FCaption"
				>
					<div class="myF text-h3">MISHY STORE</div>
					<span class="d-block myF">
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
						چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
						بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
						برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
						با هدف بهبود ابزارهای کاربردی می باشد
					</span>
					<div
						class="d-flex flex-row justify-md-start justify-center my-2"
						style="gap: 20px"
					>
						<v-btn
							icon
							x-small
							v-for="i in socialMedia"
							:key="i"
							color="primary"
						>
							<div class="myI">
								<v-img
									width="20"
									:src="`/socialMedias/${i}.svg`"
								/>
							</div>
						</v-btn>
					</div>
				</v-col>
				<v-col
					cols="12"
					md="6"
				>
					<div class="d-flex flex-row justify-space-between">
						<div
							v-for="i in navList"
							:kei="i.id"
							style="color: white"
						>
							{{ i.title }}
							<v-list
								flat
								color="transparent"
								dense
							>
								<v-list-item
									color="transparent"
									v-for="item in i.list"
									:to="item.to"
									:key="item.id"
								>
									<span class="myF">
										.
										{{ item.title }}
									</span>
								</v-list-item>
							</v-list>
						</div>
					</div>
				</v-col>
			</v-row>
		</v-container>
		<v-sheet
			width="95%"
			color="primary"
			class="mx-auto rounded-pill"
		>
			<v-row
				no-gutters
				align="center"
				justify="space-between"
				class="pa-2"
			>
				<v-col
					cols="12"
					md="4"
				>
					<v-row
						no-gutters
						justify="space-between"
						class="justify-md-start ma-2"
					>
						<div class="mr-5 d-flex flex-column">
							<span class="myF">تماس با ما</span>
							<span class="ma-auto"
								>09<span style="color: blueviolet"
									>12345678</span
								></span
							>
						</div>
						<div class="mr-5 d-flex flex-column">
							<span class="myF">پست الکترونی</span>
							<span class="ma-auto"
								><span style="color: blueviolet">
									info</span
								>@gmail.com</span
							>
						</div>
					</v-row>
				</v-col>
				<v-col
					cols="12"
					md="5"
				>
					<div class="d-md-flex flex-md-row justify-end">
						<div class="d-flex flex-row justify-center">
							<div
								v-for="i in 3"
								:key="i"
								class="pa-2 my-auto mx-2 rounded"
								style="
									border: 1px dashed #000;
									font-size: small;
									max-height: 50px;
								"
							>
								مجوز
							</div>
						</div>
						<div class="d-flex flex-row justify-center">
							<v-sheet
								dark
								width="130"
								height="50"
								class="rounded-xl d-flex flex-row align-center justify-center ma-2"
								style="gap: 9px"
							>
								<div
									class="d-flex flex-column text-center"
								>
									<span style="font-size: xx-small"
										>download on
									</span>
									<span class="ma-auto d-block"
										>play store</span
									>
								</div>
								<div>
									<v-img
										style="filter: invert(100%)"
										width="24"
										src="/icon/playstore.svg"
									></v-img>
								</div>
							</v-sheet>
							<v-sheet
								dark
								width="130"
								height="50"
								class="rounded-xl d-flex flex-row align-center justify-center ma-2"
								style="gap: 9px"
							>
								<div
									class="d-flex flex-column text-center"
								>
									<span style="font-size: xx-small"
										>download on
									</span>
									<span class="ma-auto d-block"
										>play store</span
									>
								</div>
								<div>
									<v-img
										style="filter: invert(100%)"
										width="24"
										src="/icon/playstore.svg"
									></v-img>
								</div>
							</v-sheet>
						</div>
					</div>
				</v-col>
			</v-row>
		</v-sheet>
		<div
			style="width: 90%"
			class="d-flex ma-auto flex-row justify-space-between align-center mt-3"
		>
			<div>
				<span class="myF">تمام حقوق این سایت محفوظ است </span>
				<span class="myF">طراحی شده توسط MISHY </span>
			</div>
			<v-btn
				icon
				large
				@click="scrollToTop()"
			>
				<v-icon color="white">mdi-chevron-up</v-icon>
			</v-btn>
		</div>
	</v-sheet>
</template>
<style>
	.btn-footer {
		top: 0;
		left: 0;
		width: 100%;
		transform: translateY(-37px);
	}
	.chip {
		flex-grow: 1;
		flex-shrink: 0;
		flex-basis: 0;
		border: 4px solid #51367b;
		min-width: 160px;
		max-width: 240px;
		height: 75px;
		background-color: white;
	}
	.myI {
		filter: invert(100%);
	}
</style>
