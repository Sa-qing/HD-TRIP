<template>
	<div class="home">
		<!-- 导航栏 -->
		<HomeNavBar />
		<div class="banner">
			<img src="@/assets/img/home/banner.webp" alt="">
		</div>
		<!-- 关键字 -->
		<HomeSearchBox />
		<!-- 推荐类别 -->
		<HomeCategories />
		<!-- 内容 -->
		<HomeContent /> 

	</div>
</template>

<script setup>
import HomeNavBar from './cpns/home-navBar.vue'
import HomeSearchBox from './cpns/home-search-box.vue' 
import useHomeStore from '@/stores/modules/home'
import HomeCategories from './cpns/home-categories.vue' 
import HomeContent from './cpns//home-content.vue'
// 发送热门建议的网络请求
useHomeStore().fetchHotSuggests()  
// 发送推荐类别的网络请求
useHomeStore().fetchCategories()
// 发送房屋类别的网络请求
useHomeStore().fetchHouselist()

// 监听window创建的滚动事件
window.addEventListener("scroll",()=>{
	const clientHeight=document.documentElement.clientHeight
	const scrollTop=document.documentElement.scrollTop
	const scrollHeight=document.documentElement.scrollHeight
	if(clientHeight+scrollTop >=scrollHeight){
		useHomeStore.fetchHouselist()
	}
})
</script>

<style lang="less" scoped>
.home {
	height: 100vh;
	overflow-y: auto;
	box-sizing: border-box;
	padding-bottom: 60px;

	.banner {
		img {
			width: 100%;
		}
	}


}
</style>