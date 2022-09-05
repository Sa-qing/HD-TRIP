import { defineStore } from 'pinia' 
import {getHotSuggests,getCategoriest,getHouselist}  from '@/service/index'
const useHomeStore = defineStore('home', {
	state() {
		return {
			hotSuggests:[],
			categories:[],
			hourseArray:[],
			allPage:1
		}
	},
	actions: { 
		// 热门搜索
		 async fetchHotSuggests(){
			const hs=await  getHotSuggests() 
			this.hotSuggests=hs.data
		},

		//分类列表
		async fetchCategories(){
			const categories =await  getCategoriest()
			this.categories=categories.data
		},

		//房屋列表
		async fetchHouselist(){ 
			
			const houselist= await getHouselist(this.allPage)
			this.allPage++
			this.hourseArray.push(houselist.data)
			
		}
	},
	getters: {

	}
})
export default useHomeStore