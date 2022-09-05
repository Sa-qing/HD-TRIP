<template>
	<div class="search-box">
		<!-- 位置 -->
		<div class="location">
			<div class="city" @click="clickCity">{{onlyCity.cityName}}</div>
			<div class="position" @click="clickPosition">
				<span class="text">我的位置</span>
				<img src="@/assets/img/home/icon_location.png" alt="">
			</div>
		</div>

		<!-- 住店选择日期 -->
		<div class="section date-range" @click="show=true">
			<div class="start">
				<div class="date">
					<span class="tip">入住</span>
					<span class="time">{{startDay}}</span>
				</div>
				<div class="stay">共{{totalCount}}晚</div>
			</div>
			<div class="end">
				<div class="date">
					<span class="tip">离店</span>
					<span class="time">{{tomorrow}}</span>
				</div>
			</div>
		</div>
		<van-calendar v-model:show="show" type="range" @confirm="onConfirm" :round="false" color="#ff9854" />

		<!--关键字/位置/民宿名  -->
		<div class="section price-counter bottom-gray-line" @click="show=true">
			<div class="start">价格不限</div>
			<div class="end">人数不限</div>
		</div>
		<div class="section keyword  bottom-gray-line">关键字/位置/民宿名</div>


		<!-- 热门推荐 -->
		<div class="section hot-suggests">
			<template v-for="(item,index) in hotSuggests" :key="index">
				<div :style="{color:item.tagText.color,background:item.tagText.background}" class="item"> {{item.tagText.text}}
				</div>
			</template>
		</div>

		<!-- 搜索 -->
		<div class="section search" @click="search">
			<van-button round type="primary" size="large" color="#ff9854">搜索</van-button>
		</div>

	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia';
import {formatMonth,diffDayCount} from '@/utils/format-date'
import { ref } from 'vue';

// 获取城市/位置
const router=useRouter()
const clickCity = () => {
router.push('/city')
}
//回显选择位置
const getCity=useCityStore()
const {onlyCity}=storeToRefs(getCity)

//获取地理位置
const clickPosition = () => {
	navigator.geolocation.getCurrentPosition((position) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		console.log(latitude, longitude);
	}, (error) => {
		console.log(`ERROR(${error.code}): ${error.message}`);
	})
}

// 日期范围的处理
const date=new Date()
const newDate=new Date()
newDate.setDate(date.getDate() + 1)
const startDay=ref(formatMonth(date))
const tomorrow=ref(formatMonth(newDate)) 

const totalCount = ref(1);
const show = ref(false);
const onConfirm=(dates)=>{
	// 选择时间范围 
	startDay.value=formatMonth(dates[0])
	tomorrow.value=formatMonth(dates[1])
	
	// 总天数 
	totalCount.value=ref(diffDayCount(startDay,tomorrow))
	// 隐藏
	show.value=false
}

// 热门推荐
const hotSuggestArray=useHomeStore() 
const {hotSuggests} =storeToRefs(hotSuggestArray)

//搜索 传递参数 开始日期-结束日期-当前城市
const search=()=>{ 
	
	router.push({
		path:'/search',
		query:{
			startDay:startDay.value,
			tomorrow:tomorrow.value,
			clickCity:"广东"
		}
	})
}

</script>

<style lang="less" scoped>
.search-box {
	--van-calendar-popup-height: 100%;
}

.location {
	display: flex;
	align-items: center;
	height: 44px;
	padding: 0 20px;

	.city {
		flex: 1;
		color: #333;
		font-size: 15px;
	}

	.position {
		width: 74px;
		display: flex;
		align-items: center;

		.text {
			position: relative;
			top: 3px;
			font-size: 12px;
		}

		img {
			margin-left: 5px;
			width: 18px;
			height: 18px;
		}
	}
}

.section {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding: 0 20px;
	color: #999;
	height: 44px;

	.start {
		flex: 1;
		display: flex;
		height: 44px;
		align-items: center;
	}

	.end {
		min-width: 30%;
		padding-left: 20px;
	}

	.date {
		display: flex;
		flex-direction: column;

		.tip {
			font-size: 12px;
			color: #999;
		}

		.time {
			margin-top: 3px;
			color: #333;
			font-size: 15px;
			font-weight: 500;
		}
	}
}

.date-range {
	height: 44px;

	.stay {
		flex: 1;
		text-align: center;
		font-size: 12px;
		color: #666;
	}
}

.price-counter {
	.start {
		border-right: 1px solid var(--line-color);
	}
}

.hot-suggests {
	margin: 10px 0;
	height: auto;

	.item {
		padding: 4px 8px;
		margin: 4px;
		border-radius: 14px;
		font-size: 12px;
		line-height: 1;
	}
}
</style>