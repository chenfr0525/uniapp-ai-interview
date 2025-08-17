<script setup>
	import { defineProps } from 'vue';
	const props = defineProps({
		title: {
			type: String,
			default: '热门岗位推荐'
		}
	})

	const goBack = () => {
		if (props.title === '热门岗位推荐') {
			uni.switchTab({
				url: "/pages/classify/classify"
			})
		}else if(props.title === '最近面试记录'){
			uni.navigateTo({
				url:"/pages/record/record"
			})
		}
	}
</script>

<template>
	<view class="nav-title">
		<view class="left">
			{{title}}
		</view>
		<view class="right" @tap="goBack()">
			<p class="text">全部</p>
			<uni-icons type="right" size="20"></uni-icons>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.nav-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;

		.left {
			font-size: 36rpx;
			font-weight: bold;
			color: #010204;
		}

		.right {
			height: 40rpx;
			line-height: 30rpx;
			padding: 4rpx;
			border: 1.2rpx solid #010204;
			display: flex;
			align-items: center;
			color: #010204;
			border-radius: 20rpx;

			.text {
				font-size: 30rpx;
				margin-right: 1rpx;
			}
		}
	}
</style>