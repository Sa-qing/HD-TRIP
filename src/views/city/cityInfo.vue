<template>
	<div class="cityInfo hiddenTabBar">
		<div class="top">
			<!-- 搜索框 -->
			<van-search v-model="value" shape="round" placeholder="城市/区域/位置" show-action="true" action-text="取消"
				@search="onSearch" @cancel="onCancel" />

			<!-- tab栏的切换 -->
			<van-tabs v-model:active="active" line-height="3">
				<template v-for="(value, key, index) in getCity" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
			</van-tabs>
		</div>
		<div class="content">
			<template v-for="(value,key,index) in getCity" > 
				<cityGroup v-show="active === key" :group-data="value"/>
			</template>
			<!-- <template v-for="(item, index) in currentGroup" :key="index">
				{{ item }}
			</template> -->
		</div>

	</div>

</template>

<script setup>
import { ref ,computed} from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city.js'
import { storeToRefs } from 'pinia' 
import cityGroup from './cpns/city-group.vue'
const router = useRouter()

// 搜索取消
const onCancel = () => {
	return router.back()
}

// tab栏的切换
const active = ref();

// 发送网络请求，获取城市数据 
const cityStore = useCityStore()
cityStore.fetchAllCityData()
const { getCity } = storeToRefs(cityStore)

//获取选中标签后的数据
const currentGroup = computed(() => getCity.value[active.value])
</script>


<style lang="less" scoped>
.cityInfo {

	// .top{
	// 	position: fixed;
	// 	top: 0;
	// 	left: 0;
	// 	right: 0;
	// }

	// .content{
	// 	margin-top: 98px;
	// }
	.content {
		height: calc(100vh - 98px);

		overflow-y: auto;
	}
}
</style>