<template>
	<div class="city-group">
		<van-index-bar>
			<van-index-anchor index="热门" :index-list="indexList" />
			<div class="list">
				<template v-for="(city, index) in groupData.hotCities">
					<div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
				</template>
			</div>

			<template v-for="(item, index) in groupData.cities" :key="index">
				<van-index-anchor :index="item.group">{{ item.group }}</van-index-anchor>
				<van-cell v-for="(city, index) in item.cities" :key="index" :title="city.cityName" @click="cityClick(city)" />
			</template>

		</van-index-bar>

	</div>
</template>

<script setup>
import router from '@/router';
import { computed } from '@vue/reactivity';
import useCityStore from '@/stores/modules/city';

const props = defineProps({
	groupData: {
		type: Object,
		default: () => ({})
	}
})

// 动态映射a-z
const indexList = computed(() => {
	// map返回的是一个数组
	const list = props.groupData.cities.map(item => item.group)
	list.unshift("#")
	return  list
})

// 选择城市
const cityStore=useCityStore() 
const cityClick=(city)=>{
	//保留城市
	cityStore.onlyCity=city

	//返回上一级
	router.back()
}
</script>

<style lang="less" scoped>
.list {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 10px;
	padding-right: 25px;

	.city {
		width: 70px;
		height: 28px;
		border-radius: 14px;
		font-size: 12px;
		color: #000;
		text-align: center;
		line-height: 28px;
		background-color: #fff4ec;
		margin: 10px 0;
	}

}
</style>