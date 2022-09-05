<template>
	<div class="searchInfo hiddenTabBar">
		<h2>searchInfo</h2>
		<h2>{{route.query.startDay}}</h2>
		<h2>{{route.query.tomorrow}}</h2>
		<h2>{{route.query.clickCity}}</h2>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route=	useRoute()
</script>

<style lang="less" scoped>
</style>