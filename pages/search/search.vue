<script setup>
	import SearchContainer from '@/components/SearchContainer.vue';
	import {
		ref
	} from 'vue'

	const recommandType = [{
			id: 1,
			name: '前端',
		}, {
			id: 2,
			name: '开发',
		}, {
			id: 3,
			name: 'java'
		},
		{
			id: 4,
			name: '后端'
		}, {
			id: 5,
			name: '数据'
		}, {
			id: 6,
			name: '设计'
		},
	]

	const keyword = ref('')
	const searchKey = () => {
		uni.navigateTo({
			url: `/pages/list/list?keyword=${keyword.value}`
		})
	}
</script>

<template>
	<view class="search-container">
		<view class="search-header">
			<input v-model="keyword" type="text" placeholder="搜索你想要的内容..." />
			<view class="icon" @click="searchKey">
				<uni-icons type="search" size="26"></uni-icons>
			</view>
		</view>
		<view class="search-content">
			<SearchContainer />
			<h3 class="title-text">热门推荐</h3>
			<SearchContainer :obj="recommandType" />
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.search-container {
		width: 100vw;
		height: 100%;

		.search-header {
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10rpx 20rpx;

			input {
				padding: 20rpx;
				width: 80%;
				border-radius: 20rpx;
				border: 1rpx solid #7a7a7a;
			}

			.icon {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 85rpx;
				height: 85rpx;
				margin-left: 10rpx;
				border-radius: 20rpx;
				background-color: #e2e2e2;
			}
		}

		.search-content {
			padding: 20rpx 25rpx;

			.title {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			.title-text {
				font-weight: 400;
				margin: 20rpx 0;
			}
		}
	}
</style>