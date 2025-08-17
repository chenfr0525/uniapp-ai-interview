<script setup>
	import ContentBox from '@/components/ContentBox.vue'
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import api from '@/api'

	//获取安全高度
	const {
		safeAreaInsets
	} = uni.getSystemInfoSync()

	const navItem = [{
			key: 1,
			title: '简单'
		},
		{
			key: 2,
			title: '中等'
		},
		{
			key: 3,
			title: '困难'
		},
	]

	const activeItem = ref(1)
	
	const onTabChangeItem=async(val)=>{
		activeItem.value=val
		await getCategoryData()
	}

	const CategoryList = ref([])

const getCategoryData=async()=>{
	const res=await api.getCategoriesByDifficulty(activeItem.value)
	CategoryList.value=res
}
onLoad(async()=>{
	getCategoryData()
})
</script>

<template>
	<view class="classify-view">
		<view class="classify-header"
			:style="{paddingTop: safeAreaInsets.top + 'px',height: `calc(${safeAreaInsets.top}px + 240rpx)`}">
			<view class="title" :style="{top: `calc(${safeAreaInsets.top}px + 60rpx)`}">
				<h3 class="content">面霸AI</h3>
				<text>我是您的专属私人AI面试官</text>
			</view>
			<view class="ai" :style="{top: `calc(${safeAreaInsets.top}px + -50rpx)`}">
				<image src="/static/images/AI.svg" mode="aspectFit"></image>
			</view>
		</view>
		<view class="body-container">
			<view class="navbar-content">
				<view @click="onTabChangeItem(item.key)"  v-for="item in navItem" :key="item.key" class="navbar-item"
					:class="{active:activeItem===item.key}">{{item.title}}</view>
			</view>
			<scroll-view scroll-y="true">
				<view class="content-container">
					<ContentBox v-for="(item, index) in CategoryList" :num="item.num" :key="item.id" :id="item.id"
						:index="index" :title="item.name"
						:content="item.description" />
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.classify-view {
		width: 100vw;
		height: 100%;
		display: flex;
		flex-direction: column;
		background:
			linear-gradient(to left, rgb(180, 245, 248), rgb(196, 235, 193)),
			radial-gradient(50% 100px at left top, rgb(13, 90, 8), transparent);

		.classify-header {
			position: relative;
			overflow: hidden;
			height: 240rpx;

			.title {
				position: absolute;
				left: 30rpx;
				height: 200rpx;

				.content {
					font-size: 50rpx;
					font-weight: bold;
					color: #010204;
					margin-bottom: 10rpx;
				}

				text {
					font-size: 26rpx;
					color: #1A464D;
					font-weight: bold;
				}

			}

			.ai {
				position: absolute;
				right: 120rpx;
				transform: rotate(0-45deg);

				image {
					width: 180rpx;
				}
			}
		}

		.body-container {
			min-height: calc(100% - 190px);
			background-color: #FFF;
			border-radius: 60rpx 60rpx 0 0;
			padding: 40rpx 40rpx 20rpx 40rpx;

			.navbar-content {
				display: flex;
				width: 100%;
				overflow: auto;
				justify-content: space-between;
				align-items: center;

				.navbar-item {
					display: flex;
					width: 100%;
					align-items: center;
					justify-content: center;
					font-size: 34rpx;
					line-height: 70rpx;
					transition: all 0.5s;


					&.active {
						color: rgb(128, 234, 255);
						border-bottom: 3rpx solid rgb(180, 245, 248);
					}
				}
			}

			.content-container {
				padding-top: 10rpx;
				display: flex;
				flex-direction: column;
				gap: 15rpx;

				:deep(.content-box) {
					width: 100%;
				}
			}

		}

	}
</style>