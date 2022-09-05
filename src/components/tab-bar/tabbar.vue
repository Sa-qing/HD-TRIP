<template>
	<div class="tab-bar">
		<div class="tab-bar-item" v-for="(item, index) in tabbarData" :key="index"
			:class="{ active: currentIndex === index }" @click="checkView(item,index)">
			<img v-if="currentIndex !== index" :src="getTabImg(item.image)" alt="">
			<img v-else=" currentIndex === index " :src="getTabImg(item.imageActive)" alt="">
			<span class="text">{{ item.text }}</span>
		</div>
	</div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar.js' 
import { getTabImg } from '@/utils/load-assets.js'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const currentIndex = ref(0)
const router=useRouter()
const checkView = (item,index) => {
	currentIndex.value = index
	router.push(item.path)

}
</script>

<style lang="less" scoped>
	.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;

  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 36px;
    }
    
    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
// .tab-bar {
// 	position: fixed;
// 	bottom: 0;
// 	left: 0;
// 	right: 0;
// 	height: 50px;
// 	display: flex;
// 	border-top: 1px; 

// 	.tab-bar-item {
// 		flex: 1;
// 		justify-content: center;
// 		align-items: center;
// 		display: flex;
// 		flex-direction: column;

// 		&.active {
// 			color: var(--primary-color);
// 		}

// 		.text {
// 			font-size: 12px;
// 			margin-top: 2px;
// 		}

// 		img {
// 			width: 34px;
// 		}
// 	}
// }
</style>