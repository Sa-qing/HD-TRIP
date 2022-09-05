<template>
	<div class="categories">
		<template v-for="(item, index) in categories" :key="item.id">
			<div class="items">
				<img :src="item.pictureUrl" alt="">
				<div class="text">{{ item.title }}</div>
			</div>
		</template>
	</div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useHomeStore from '@/stores/modules/home'
// 推荐类别
const { categories } = storeToRefs(useHomeStore())
</script>

<style lang="less" scoped>
.categories {
	display: flex;
	height: 80px;
	overflow-x: auto;
	padding: 0 10px;
	margin-top: 8px;

	&::-webkit-scrollbar {
		display: none;
	}

	.items {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 70px;
		text-align: center;


		img {
			width: 32px;
			height: 32px;
		}

		.text {
			font-size: 12px;
			margin-top: 8px;
		}
	}
}
</style>
