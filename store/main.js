export const state = () => ({
	sort: '',
	navMenu: [
		{ name: 'صفحه اصلی', link: '/', id: 0 },
		{ name: 'فروشگاه', link: '/shop', id: 1 },
		{ name: 'وبلاگ', link: '/blog', id: 2 },
		{ name: 'درباره ما', link: '/about-us', id: 3 },
		{ name: 'تماس باما', link: '/contact-us', id: 4 },
	],
})

export const mutations = {
	cheng(state, str) {
		state.sort = str
	},
}

export const getters = {
	navMenu: (state) => state.navMenu,
	sort: (state) => state.sort,
}
