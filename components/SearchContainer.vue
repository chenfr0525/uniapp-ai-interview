<script setup>
	import {
		defineProps
	} from "vue"
	const props = defineProps({
		obj: {
			type: Object,
			default: {}
		}
	})
	const goList = (name) => {
		uni.navigateTo({
			url: `/pages/list/list?keyword=${name}`
		})
	}
</script>

<template>
	<view class="search-content">
		<view @click="goList(item.name)" class="search-item" v-for="item in obj" :key="item.id">{{item.name}}</view>
	</view>
</template>

<style lang="scss" scoped>
	.search-content {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 20rpx;

		.search-item {
			max-width: 250rpx;
			height: 43rpx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			padding: 8rpx 12rpx;
			background-color: #f7f7f7;
			border-radius: 20rpx;
			font-size: 14px;
			color: #010204;
		}
	}
</style>