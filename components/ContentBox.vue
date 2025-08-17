<script setup>
	//获取渲染颜色
	const color = [{
		background: 'rgb(255,240,240)',
		color: '#814330'
	}, {
		background: 'rgb(232,221,244)',
		color: '#512E79'
	}, {
		background: 'rgb(218,233,248)',
		color: '#33586D'
	}, {
		background: 'rgb(244,221,244)',
		color: '#792E60'
	}, {
		background: 'rgb(225,238,214)',
		color: '#2F655B'
	}, {
		background: 'rgb(247,234,190)',
		color: '#635A30'
	}]

	const props = defineProps({
		index: {
			type: Number,
			required: true
		},
		id:{
			type:Number,
			required:true,
		},
		title: {
			type: String,
			default: '前端'
		},
		content: {
			type: String,
			default: '前端相关面试问题'
		},
		num: {
			type: Number,
			default: 1
		}
	})

	const i = props.index % color.length
	
	const goDetail=(id)=>{
		uni.navigateTo({
			url:`/pages/detailList/detailList?id=${id}`
		})
	}
</script>

<template>
	<view class="content-box" @tap="goDetail(id)"
		:style="{ background: `linear-gradient(to right, ${color[i].background} 50%, #fff)`, color: color[i].color }">
		<view class="title">
			<view class="title-text">{{title}}</view>
		</view>
		<view class="content">{{content}}</view>
	</view>
</template>

<style lang="scss" scoped>
	.content-box {
		width: 100%;
		height: 120rpx;
		padding: 12rpx 16rpx;
		border-radius: 8rpx;
		box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

		.title {
			font-size: 30rpx;
			font-weight: bold;
			display: flex;
			align-items: center;
			margin-bottom: 8rpx;

			.score {
				margin-left: 50rpx;
			}
		}

		.content {
			font-size: 28rpx;
		}
	}
</style>