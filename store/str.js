export const mainList = [
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
	{
		name: 'جزیره کیش',
		id: 15,
		price: 32000,
	},
	{
		name: 'قهوه کیش',
		id: 16,
		price: 2000,
	},
	{
		name: 'راه کیش',
		id: 17,
		price: 42000,
	},
	{
		name: 'گل زنبق',
		id: 18,
		price: 42000,
	},
]

const blogItem = [
	{
		name: 'کوه کیش',
		tag: 'فرهنگی',
	},
	{
		name: 'جزیره کیش',
		tag: 'اقتصادی',
	},
	{
		name: 'قهوه کیش',
		tag: 'فرهنگی',
	},
	{
		name: 'جزیره کیش',
		tag: 'نمایشی',
	},
	{
		name: 'قهوه کیش',
		tag: 'سرگمی',
	},
]
function blogListF(item) {
	return item.map((item, index) => ({
		name: item.name,
		tag: item.tag,
		id: index + 1,
	}))
}
export const blogList = blogListF(blogItem)
