<script setup>
	import {
		defineProps
	} from 'vue'
	defineProps({
		title: {
			type: String,
			default: '搜索结果'
		}
	})
	//获取安全高度
	const {
		safeAreaInsets
	} = uni.getSystemInfoSync()
	const goBack = () => {
		uni.navigateBack()
	}
</script>

<template>
	<view class="navbar-container"
		:style="{paddingTop: `calc(${safeAreaInsets.top}px + 20rpx)`, height: `calc(${safeAreaInsets.top}px + 100rpx)`}">
		<uni-icons type="left" size="26" @click="goBack"></uni-icons>
		<text class="title">{{title}}</text>
		<!-- 占位 -->
		<view></view>
	</view>
	<view :style="{height: `calc(${safeAreaInsets.top}px + 100rpx)`}"></view>
</template>

<style lang="scss">
	.navbar-container {
		position: fixed;
		top:0;
		left:0;
		right:0;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		background-color: #f4f4f4;
		height: 100rpx;

		.title {
			font-size: 40rpx;
		}
	}
</style>