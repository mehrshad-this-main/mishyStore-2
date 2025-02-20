<script setup>
	const sheetsInfo = [
		{
			title: 'ساعات کاری',
			img: 'support-svgrepo-com',
			Description: 'شنبه تا چهارشنبه 8 تا 12',
			subDescription: 'پنجشنبه 8 تا 14',
		},
		{
			title: 'پست الکترونیکی',
			img: 'tick-svgrepo-com',
			Description: 'info@yoursite.com',
			subDescription: 'example@gmail.com',
		},
		{
			title: 'شماره های تماس',
			img: 'call',
			Description: '#1234558',
			subDescription: '#091234543',
		},
		{
			title: 'نشانی فروش گاه',
			img: 'map-location',
			Description: 'بجنورد  جنب سینماعمیق',
			subDescription: 'مجتمع اداری اوج واحد 404',
		},
	]
</script>
<template>
	<div class="mb-16">
		<div class="d-flex justify-center align-center flex-column">
			<div>
				<v-img
					width="50"
					src="/icon/fire-svgrepo-com(2).svg"
				></v-img>
			</div>
			<h1 class="my-1">تماس با فروشگاه ما</h1>
			<span class="mb-6">پاسوخگویی به سوالات شما</span>
			<v-container fluid>
				<v-row>
					<v-col
						v-for="i in sheetsInfo"
						:key="i"
						cols="6"
						md="3"
						><v-sheet
							color="info"
							width="100%"
							height="157"
							style="gap: 5px"
							class="d-flex rounded-xl flex-column align-center contact-sheets"
						>
							<div class="mt-3">
								<v-img
									:src="`/icon/${i.img}.svg`"
									width="40"
								></v-img>
							</div>
							<h4 class="myF text-h6">{{ i.title }}</h4>
							<span class="myF"> {{ i.Description }} </span>
							<span class="myF"> {{ i.subDescription }}</span>
						</v-sheet></v-col
					>
				</v-row>
			</v-container>
		</div>
		<div class="mt-8">
			<v-container fluid>
				<v-row class="justify-space-around">
					<v-col
						cols="12"
						md="4"
						><v-sheet
							width="100%"
							class="primary d-flex flex-column rounded-xl text-h6"
						>
							<div class="ma-3">
								ارسال
								<span style="color: blueviolet"
									>پیام شما</span
								>
								به ما
							</div>
							<v-container fluid>
								<v-row>
									<v-col cols="6">
										<v-text-field
											label="نام و نام خانوادگی"
											background-color="white"
											filled
										></v-text-field>
										<v-text-field
											background-color="white"
											label="شماره تماس"
											filled
										></v-text-field>
									</v-col>
									<v-col cols="6">
										<v-text-field
											background-color="white"
											label="پست الکترونیکی"
											filled
										></v-text-field>
										<v-text-field
											background-color="white"
											filled
											label="موضوع"
										></v-text-field>
									</v-col>
								</v-row>
								<v-textarea
									name="input-7-1"
									filled
									placeholder="پیام شما..."
									background-color="white"
								></v-textarea>
							</v-container>
						</v-sheet>
					</v-col>
					<v-col
						cols="12"
						md="8"
						><v-sheet
							width="100%"
							color="primary d-flex rounded-xl mb-3"
						>
							<v-img
								alt="img"
								class="ma-auto rounded-xl"
								src="/img/adc.png"
								width="100%"
								height="380"
							></v-img>
						</v-sheet>
						<v-row
							no-gutters
							justify="space-between"
						>
							<span
								>لورم ایپسوم متن ساختگی با تولید سادگی
								نامفهوم از صنعت چاپ.</span
							>
							<div class="d-flex flex-row">
								<div class="mx-2">
									<v-img
										width="20"
										src="/socialMedias/bale.svg"
									></v-img>
								</div>
								<div class="mx-2">
									<v-img
										width="20"
										src="/socialMedias/instagram.svg"
									></v-img>
								</div>
								<div class="mx-2">
									<v-img
										width="20"
										src="/socialMedias/soroush.svg"
									></v-img>
								</div>
								<div class="mx-2">
									<v-img
										width="20"
										src="/socialMedias/telegram.svg"
									></v-img>
								</div>
							</div>
						</v-row>
					</v-col>
				</v-row>
			</v-container>
		</div>
	</div>
</template>
