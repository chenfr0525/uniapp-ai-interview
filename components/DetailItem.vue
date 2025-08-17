<script setup>
	import {
		defineProps
	} from 'vue';
	const props=defineProps({
		id:{
			type:Number,
			required:true
		},
		title: {
			type: String,
			default: '问题1'
		}
	})
	
	const goToInterview=()=>{
		uni.navigateTo({
			url:`/pages/interview/interview?id=${props.id}`
		})
	}
</script>

<template>
	<view class="detail-item" @tap="goToInterview">
		<text class="detail-title">{{title}}</text>
		<uni-icons type="right" size="18"></uni-icons>
	</view>
</template>

<style lang="scss" scoped>
	.detail-item {
		width: 100%;
		border: 1px solid #868073;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 20rpx;
		background-color: #FFF;
		padding: 12rpx 20rpx;

		.detail-title {
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
			text-overflow: ellipsis;
			font-size: 30rpx;
			color: #010204;
		}
	}
</style>