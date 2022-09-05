import HYRequest from '@/service/request/index.js'

// 热门搜索
export const getHotSuggests = () => HYRequest.get({ url: '/home/hotSuggests' })

//分类列表
export const getCategoriest = () => HYRequest.get({ url: '/home/categories' })

//房屋列表
export const getHouselist = (allPage) => HYRequest.get({
	url: "/home/houselist",
	params: {
		page: allPage
	}
})