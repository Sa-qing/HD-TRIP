<template>
	<div class="home">
		<homeNavBar />

		<div class="banner">
			<img src="@/assets/img/home/banner.webp" alt="">
		</div>
		<homeSearchBox />
	</div>
</template>

<script setup>
import homeNavBar from './cpns/home-navBar.vue'
import homeSearchBox from './cpns/home-search-box.vue'
</script>

<style lang="less" scoped>
.home {
	.banner {
		img {
			width: 100%;
		}
	}


}
</style>