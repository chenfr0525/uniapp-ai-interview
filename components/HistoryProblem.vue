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
		obj: {
			type: Object,
			default: () => ({})
		}
	})
	const i = props.index % color.length
	const goRecord=(id)=>{
		uni.navigateTo({
			url:`/pages/result/result?id=${id}&questionId=${props.obj.questionId}`
		})
	}
	</script>

<template>
	<view class="content-box" @click="goRecord(obj.id)"
		:style="{ background: `linear-gradient(to right, ${color[i].background} 50%, #fff)`, color: color[i].color }">
		<view class="title">
			<view class="title-text">{{obj.category}}</view>
			<view class="score">{{obj.score}}</view>
			<view class="date">{{obj.time}}</view>
		</view>
		<view class="content">{{obj.question}}</view>
	</view>
</template>

<style lang="scss">
	.content-box {
		width: 100%;
		height: 130rpx;
		padding: 12rpx 16rpx;
		border-radius: 8rpx;
		box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

		.title {
			font-size: 34rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 12rpx;

			.title-text {
				font-weight: 700;
			}

			.score {
				font-size: 30rpx;
			}

			.date {
				font-size: 24rpx;
			}
		}

		.content {
			font-size: 29rpx;
		}
	}
</style>