<template>
	<div class="homeContent">
		<h2 class="title">热门精选</h2>
		<div class="list">
			<template v-for="(item,index) in hourseArray" :key="item.data.houseId">
				<HomeItemV9 v-if="item.discoveryContentType === 9" :item-data="item.data"/>
				<HomeItemV3 v-else-if="item.discoveryContentType === 3" :item-data="item.data"/>
			</template>
		</div>
	</div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'; 
import { storeToRefs } from 'pinia';
import HomeItemV9 from '@/components/home-item-v9/home-item-v9.vue'; 
import HomeItemV3 from '@/components/home-item-v3/home-item-v3.vue'; 

// 获取房屋列表数据
const {hourseArray} = storeToRefs(useHomeStore())
</script>

<style lang="less" scoped>
.homeContent {
	padding: 10px 8px;

	.title {
		padding: 8px;
		font-size: 22px;
	}

	.list{
		display: flex;
		flex-wrap: wrap;
	}
}
</style>