<script setup>
	import NavBar from '@/components/NavBar.vue';
	import DetailItem from '@/components/DetailItem.vue';
	import {
		computed,
		ref
	} from 'vue';
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import api from '@/api'
	import {
		useUserStore
	} from '@/store';
	const isDone = ref(false)
	const userStore = useUserStore()
	const doneQuesList = ref([])
	const noDoQuesList = ref([])
	const QuesList=computed(()=>{
		return isDone.value?doneQuesList.value:noDoQuesList.value
	})

	const getQuestionList = async (id) => {
		const res = await api.getQuestions(userStore.userInfo.id, id)
		doneQuesList.value = res.completed
		noDoQuesList.value = res.remaining
	}

	onLoad(async (e) => {
		getQuestionList(e.id)
	})
</script>

<template>
	<view class="detail-list">
		<NavBar title="详情" />
		<view class="detail-header">
			<view class="box">
				<text class="num" style="color: #D85A37">{{doneQuesList.length+noDoQuesList.length}}</text>
				<h3 class="desc">面试题数</h3>
			</view>
			<view class="box">
				<text class="num" style="color: #7CBA11">{{doneQuesList.length}}</text>
				<h3 class="desc">已完成</h3>
			</view>
		</view>
		<view class="detail-content">
			<view class="navbar-content">
				<view @click="isDone=false" class="navbar-item" :class="{active:!isDone}">未完成</view>
				<view class="navbar-item" @click="isDone=true" :class="{active:isDone}">已完成</view>
			</view>
			<scroll-view scroll-y="true" class="scroll-view">
				<view class="detail-container">
					<DetailItem v-for="item in QuesList" :key="item.id" :title="item.content" :id="item.id" />
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.detail-list {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background:
			linear-gradient(to bottom, transparent 70%, #F7F7F7),
			linear-gradient(to right, rgb(255, 244, 230), #F8D9B8);

		.detail-header {
			width: 100%;
			height: 180rpx;
			margin: 30rpx auto 0;
			display: flex;
			justify-content: space-around;
			flex-shrink: 0;

			.box {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.num {
					font-size: 44rpx;
					font-weight: bold;
				}

				.desc {
					font-size: 33rpx;
					font-weight: 400;
					color: #73604B;
				}
			}
		}

		.detail-content {
			flex: 1;
			width: 100%;
			background-color: #fff;
			border-radius: 40rpx 40rpx 0 0;
			padding: 40rpx 0 20rpx;
			display: flex;
			flex-direction: column;
			overflow: hidden;


			.navbar-content {
				height: 90rpx;
				display: flex;
				width: 100%;
				justify-content: space-between;
				align-items: center;
				flex-shrink: 0;

				.navbar-item {
					flex: 1;
					display: flex;
					width: 100%;
					align-items: center;
					justify-content: center;
					font-size: 34rpx;
					line-height: 70rpx;


					&.active {
						color: #bca48c;
						border-bottom: 3rpx solid #F8D9B8;
					}
				}
			}

			.scroll-view {
				flex: 1;
				width: 100%;
				box-sizing: border-box;
				height: 1px;

				.detail-container {
					padding: 0 30rpx;
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					gap: 10rpx;
					padding-bottom: 40rpx;
				}
			}
		}
	}
</style>