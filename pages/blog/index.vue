<script>
	import { blogList } from '../../store/str'
	export default {
		data() {
			return {
				blogList,
				length: 2,
				onboarding: 0,
				SMS: [
					{
						icon: 'instagram',
						quantity: 80002,
						color: 'info',
						id: 0,
					},
					{
						icon: 'send',
						quantity: 24660,
						color: 'success',
						id: 1,
					},
					{
						icon: 'call',
						quantity: 12000,
						color: 'yellow',
						id: 2,
					},
				],
			}
		},

		methods: {
			next() {
				this.onboarding =
					this.onboarding + 1 === this.length ? 0 : this.onboarding + 1
			},
			prev() {
				this.onboarding =
					this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1
			},
		},
		setup() {
			const brC = [
				{
					text: 'صفحه اصلی',
					to: '/',
				},
				{
					text: 'وبلاگ',
					to: '/blog',
				},
			]
			return { brC }
		},
	}
</script>
<template>
	<div>
		<v-sheet
			width="90%"
			height="60"
			class="d-flex rounded-xl my-6 mx-auto"
		>
			<v-breadcrumbs>
				<v-breadcrumbs-item
					v-for="i in brC"
					:key="i.text"
					:to="i.to"
					>/{{ i.text }}</v-breadcrumbs-item
				>
			</v-breadcrumbs>
		</v-sheet>
		<v-row class="mb-6">
			<v-col
				cols="12"
				md="6"
				sm="6"
			>
				<v-row>
					<v-col
						cols="12"
						md="6"
						class="d-none d-sm-block"
					>
						<v-sheet
							withe="100%"
							height="520"
						>
							<v-img
								width="90%"
								class="ma-auto rounded-xl align-end tr-image"
								height="100%"
								alt="img"
								src="https://picsum.photos/seed/1017/600/660"
								gradient="to top,rgba(20, 22, 35, 0.7), transparent"
							>
								<div class="d-flex flex-column ma-4">
									<div
										class="d-flex flex-row justify-space-around"
									>
										<div class="myF">
											<v-icon
												small
												color="white"
												>mdi-calendar-month</v-icon
											>
											11 اسفند
										</div>
										<div class="myF">
											<v-icon
												small
												color="white"
												>mdi-chat-processing-outline</v-icon
											>
											1 دیدگاه
										</div>
									</div>
									<span
										class="myF text-center mt-4"
										style="font-size: larger"
									>
										جاده ارکان
									</span>
								</div>
							</v-img>
						</v-sheet>
					</v-col>
					<v-col
						cols="12"
						md="6"
					>
						<v-sheet
							withe="100%"
							height="250"
							class="mb-6"
						>
							<v-img
								src="https://picsum.photos/seed/101/520/400"
								width="90%"
								class="ma-auto rounded-xl align-end tr-image"
								alt="img"
								height="100%"
								gradient="to top,rgba(20, 22, 35, 0.7), transparent"
							>
								<div class="d-flex flex-column ma-4">
									<div
										class="d-flex flex-row justify-space-around"
									>
										<div class="myF">
											<v-icon
												small
												color="white"
												>mdi-calendar-month</v-icon
											>
											1 اسفند
										</div>
										<div class="myF">
											<v-icon
												small
												color="white"
												>mdi-chat-processing-outline</v-icon
											>
											2 دیدگاه
										</div>
									</div>
									<span
										class="myF text-center mt-4"
										style="font-size: larger"
									>
										از توانایی های ما استفاده کنید
									</span>
								</div>
							</v-img>
						</v-sheet>
						<v-sheet
							withe="100%"
							height="250"
							><v-img
								width="90%"
								class="ma-auto rounded-xl align-end tr-image"
								height="100%"
								gradient="to top,rgba(20, 22, 35, 0.7), transparent"
								src="https://picsum.photos/seed/1012/600/600"
							>
								<div class="d-flex flex-column ma-4">
									<div
										class="d-flex flex-row justify-space-around"
									>
										<div class="myF">
											<v-icon
												small
												color="white"
												>mdi-calendar-month</v-icon
											>
											3 اسفند
										</div>
										<div class="myF">
											<v-icon
												small
												color="white"
												>mdi-chat-processing-outline</v-icon
											>
											3دیدگاه
										</div>
									</div>
									<span
										class="myF text-center mt-4"
										style="font-size: larger"
									>
										بازار ارز ها درحال ریزش است
									</span>
								</div>
							</v-img></v-sheet
						>
					</v-col>
				</v-row>
			</v-col>
			<v-col
				cols="12"
				md="6"
				sm="6"
			>
				<v-row>
					<v-col
						cols="12"
						md="6"
					>
						<v-sheet
							withe="100%"
							height="250"
							class="mb-6"
							><v-img
								width="90%"
								class="ma-auto rounded-xl align-end tr-image"
								height="100%"
								gradient="to top,rgba(20, 22, 35, 0.7), transparent"
								src="https://picsum.photos/seed/111/600/600"
							>
								<div class="d-flex flex-column ma-4">
									<div
										class="d-flex flex-row justify-space-around"
									>
										<div class="myF">
											<v-icon
												small
												color="white"
												>mdi-calendar-month</v-icon
											>
											11 بهمن
										</div>
										<div class="myF">
											<v-icon
												small
												color="white"
												>mdi-chat-processing-outline</v-icon
											>
											یک دیدگاه
										</div>
									</div>
									<span
										class="myF text-center mt-4"
										style="font-size: larger"
									>
										این روز ها اینتل چه میکند
									</span>
								</div>
							</v-img></v-sheet
						>
						<v-sheet
							withe="100%"
							height="250"
							><v-img
								width="90%"
								class="ma-auto rounded-xl d-flex align-end tr-image"
								height="100%"
								src="https://picsum.photos/seed/108/600/600"
								gradient="to top,rgba(20, 22, 35, 0.7), transparent"
							>
								<div class="d-flex flex-column ma-4">
									<div
										class="d-flex flex-row justify-space-around"
									>
										<div class="myF">
											<v-icon
												small
												color="white"
												>mdi-calendar-month</v-icon
											>
											9 آذر
										</div>
										<div class="myF">
											<v-icon
												small
												color="white"
												>mdi-chat-processing-outline</v-icon
											>
											بدون دیدگاه
										</div>
									</div>
									<span
										class="myF text-center mt-4"
										style="font-size: larger"
									>
										اندروید 15 در راه است
									</span>
								</div>
							</v-img>
						</v-sheet>
					</v-col>

					<v-col
						cols="12"
						md="6"
					>
						<v-sheet
							withe="100%"
							height="520"
							class="d-none d-sm-block"
						>
							<v-img
								width="90%"
								class="ma-auto rounded-xl align-end tr-image"
								height="100%"
								alt="img"
								src="https://picsum.photos/seed/1020/600/660"
								gradient="to top,rgba(20, 22, 35, 0.7), transparent"
								><div class="d-flex flex-column ma-4">
									<div
										class="d-flex flex-row justify-space-around"
									>
										<div class="myF">
											<v-icon
												small
												color="white"
												>mdi-calendar-month</v-icon
											>
											12 فروردین
										</div>
										<div class="myF">
											<v-icon
												small
												color="white"
												>mdi-chat-processing-outline</v-icon
											>
											2 دیدگاه
										</div>
									</div>
									<span
										class="myF text-center mt-4"
										style="font-size: larger"
									>
										تاثیر نوشایه انرژی زا روی بدن
									</span>
								</div></v-img
							>
						</v-sheet>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
		<div class="d-flex flex-column align-center justify-center pa-12">
			<v-img
				src="/icon/category-svgrepo-com.svg"
				alt="act"
				class="my-4"
				max-width="50"
			></v-img>
			<span style="font-size: larger">دسته بندی مقالات</span>
		</div>
		<v-container fluid>
			<v-row class="pb-6">
				<v-col
					v-for="i in 4"
					:key="i"
				>
					<v-img
						class="d-flex align-center justify-center rounded-xl px-2"
						:src="`https://picsum.photos/seed/101${i}/250/200`"
						height="80"
						alt="null"
					>
						<div class="d-flex flex-row align-center justify-space-between">
							<div class="myF">فرهنگی</div>
							<div class="myF primary py-2 px-3 rounded-pill">
								{{ i }}
							</div>
						</div>
					</v-img>
				</v-col>
			</v-row>
		</v-container>
		<v-container
			fluid
			class="pb-10"
		>
			<v-row>
				<v-col
					cols="12"
					md="9"
				>
					<span>جدید ترین ها</span>
					<div class="grid">
						<GrpBlog
							v-for="i in blogList"
							:key="i.id"
							:id="i.id"
							:name="i.name"
							:tag="i.tag"
						/>
					</div>
				</v-col>

				<v-col
					cols="12"
					md="3"
				>
					<span>پربحث ترین ها</span>
					<v-sheet
						color="primary"
						width="100%"
						rounded
						class="pb-2 pt-4"
					>
						<div
							v-for="i in 4"
							:key="i"
						>
							<v-row class="pa-1 mx-1">
								<v-col
									cols="12"
									md="4"
								>
									<v-img
										:src="`https://picsum.photos/seed/10${i}/200/200`"
										max-width="75"
										height="75"
										class="rounded-xl"
									></v-img>
								</v-col>
								<v-col
									cols="12"
									md="8"
									align="center"
									class="d-flex flex-column justify-space-between"
								>
									<span class="text-right"
										>ساده ترین روش ترک اعتیاد</span
									>
									<div
										class="d-flex flex-row justify-space-between"
									>
										<span style="font-size: small">
											دو دیدگاه
											<v-icon
												small
												color="info"
												>mdi-chat-processing-outline</v-icon
											>
										</span>
										<span
											style="
												font-size: small;
												color: blueviolet;
											"
											>ادامه مطلب...</span
										>
									</div>
								</v-col>
							</v-row>
						</div>
						<div
							style="font-size: large"
							class="ma-3"
						>
							مارا دنبال کنید
						</div>

						<v-banner
							v-for="i in SMS"
							:key="i.id"
							:color="i.color"
							rounded
							class="mx-4 mb-2"
						>
							<div
								class="d-flex flex-row align-center justify-space-between"
							>
								<div class="myF">
									<v-icon color="white"
										>mdi-{{ i.icon }}
									</v-icon>
									{{ i.quantity }}k فالور
								</div>
								<div class="myF ml-2">دنبال کردن+</div>
							</div>
						</v-banner>
					</v-sheet>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<style>
	.grid {
		display: grid;
		width: 100%;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}
	.tr-image {
		transition: all 1s;
	}
	.tr-image:hover {
		transform: rotate(7deg);
	}
	.custom-pic {
		width: 140px;
	}
	@media screen and (max-width: 980px) {
		.custom-pic {
			width: 100%;
		}
		.grid {
			display: flex;
			flex-direction: column;
		}
	}
</style>
