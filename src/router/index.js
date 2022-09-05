// 通过createrouter创建路由对象，传入哈希/history模式
import { createRouter,createWebHashHistory } from "vue-router" 
// 声明映射关系 path--components
const routes=[
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'/home',
		component: ()=> import("@/views/home/home.vue")
	},
	{
		path:'/favor',
		component: ()=> import("@/views/favor/favor.vue")
	},
	{
		path:'/order',
		component: ()=> import("@/views/order/order.vue")
	},
	{
		path:'/message',
		component:()=>import("@/views/message/message.vue")
	},
	{
		path:'/city',
		component:()=>import("@/views/city/cityInfo.vue") 
	},
	{
		path:'/search',
		component:()=>import("@/views/search/searchInfo.vue")
	}
]
const router=createRouter({
	routes,
	history:createWebHashHistory()
})

export default router