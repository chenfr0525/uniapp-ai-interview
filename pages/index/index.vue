<script setup>
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import api from '@/api'
	import ContentBox from '@/components/ContentBox.vue'
	import NavTitle from '@/components/NavTitle.vue'
	import HistoryProblem from '@/components/HistoryProblem.vue'

	//获取安全高度
	const {
		safeAreaInsets
	} = uni.getSystemInfoSync()


	// 热门
	const hotCategoryList = ref([])

	// 最近面试记录
	const recentCategoryList = ref([])

	const getHotCategory = async () => {
		const res = await api.getRecommendedCategories()
		hotCategoryList.value = res
	}

	const getInterviewRecord = async () => {
		const res = await api.getRecords()
		recentCategoryList.value = res.data.slice(res.data.length-5,res.data.length)
	}


	// 跳转搜索页
	const gotoSearch = () => {
		uni.navigateTo({
			url: '/pages/search/search'
		})
	}



	onLoad(async () => {
		await getHotCategory()
		await getInterviewRecord()
	})
</script>

<template>
	<view class="home-view">
		<view class="fixed-header"
			:style="{paddingTop: safeAreaInsets.top + 'px', height: `calc(${safeAreaInsets.top}px + 250rpx)`}">
			<view class="description">
				<view class="ai">
					<image class="image" src="/static/images/AI.png" mode="aspectFit" />
				</view>

				<view class="box">
					<text class="title">你好，我是面霸AI~</text>
					<text class="subtitle">你的专属AI面试官来啦!</text>
				</view>
			</view>
		</view>
		<!-- 可滚动的body部分 -->
		<scroll-view class="scroll-body" scroll-y>
			<!-- 代替固定的头部 -->
			<view class="header-placeholder" :style="{height: `calc(${safeAreaInsets.top}px + 250rpx)`}"></view>
			<view class="body-container">
				<view class="search" @click="gotoSearch">
					<view class="box">
						<uni-icons type="search" size="20" color="#A8A8A8"></uni-icons>
						<text class="text">搜索你想要的~</text>
					</view>
					<view class="icon">
						<uni-icons type="flag" size="20" color="#010204"></uni-icons>
					</view>
				</view>

				<view class="hot">
					<NavTitle title="热门岗位推荐" />
					<scroll-view class="scroll-container" scroll-x>
						<view class="grid-container">
							<ContentBox v-for="(item, index) in hotCategoryList" :num="item.num" :key="item.id" :id="item.id"
								:index="index" :title="item.name"
								:content="item.difficulty === 1 ? '难度：简单' : item.difficulty === 2 ? '难度：中等' : '难度：困难'" />
						</view>
					</scroll-view>
				</view>
				<view class="recent">
					<NavTitle title="最近面试记录" />
					<view class="content" v-if="recentCategoryList.length > 0">
						<HistoryProblem v-for="(item, index) in recentCategoryList" :key="item.id"
							:index="index" :obj="item" />
					</view>
					<view class="no-data" v-else>
						<text>你还没有面试记录哦~</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<style scoped lang="scss">
	.home-view {
		width: 100vw;
		height: 100%;
		display: flex;
		flex-direction: column;
		background:
			linear-gradient(to right, #EAFF6B, #e6f3c3),
			radial-gradient(70% 200rpx at left top, #d4f182, transparent),
			radial-gradient(60% 200rpx at right top, #C8E86F, transparent),
			// 从40%位置开始渐变到白色
			linear-gradient(to bottom, transparent 40%, #fff 80%);

		/* 固定头部 */
		.fixed-header {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			z-index: 1;

			.description {
				position: relative;
				height: 250rpx;

				.ai {
					position: absolute;
					top: 55rpx;
					left: 20rpx;
					width: 200rpx;
					height: 200rpx;
					overflow: hidden;
				}

				.box {
					width: 470rpx;
					height: 170rpx;
					position: absolute;
					top: 20rpx;
					right: 20rpx;
					background: linear-gradient(to bottom, #545539, #717537);
					border-radius: 60rpx;
					padding: 30rpx 20rpx;
					box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
					color: #fff;

					.title {
						display: block;
						margin: 0;
						font-size: 40rpx;
						font-weight: bold;
						color: #EAFF6B;
					}

					.subtitle {
						display: block;
						margin: 15rpx 50rpx;
						font-size: 32rpx;
						color: #fff;
					}
				}
			}
		}

		/* 可滚动内容 */
		.scroll-body {
			width: 100%;
			height: 100%;

			box-sizing: border-box;
			z-index: 10;

			.header-placeholder {
				width: 100%;
			}

			.body-container {
				min-height: calc(100% - 202px);
				background-color: #FFF;
				border-radius: 60rpx 60rpx 0 0;
				box-shadow: #C8E86F 0px 0px 20rpx;
				padding: 40rpx 40rpx 20rpx 40rpx;

				.search {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 40rpx;

					.box {
						display: flex;
						align-items: center;
						border: 2rpx solid #eee;
						border-radius: 30rpx;
						padding: 20rpx 30rpx;
						width: 675rpx;
						height: 80rpx;
						box-shadow: 0 4rpx 6rpx rgba(0, 0, 0, 0.1);
						color: #A1A1A1;

						.text {
							margin-left: 20rpx;
							font-size: 32rpx;
						}
					}

					.icon {
						width: 80rpx;
						height: 80rpx;
						text-align: center;
						line-height: 80rpx;
						border-radius: 24rpx;
						background-color: #f7f7f7;
						margin-left: 10rpx;
						color: #010204;
						font-size: 40rpx;
					}
				}

				.hot {
					.scroll-container {
						width: 100%;
						height: 260rpx; // 两行高度

						.grid-container {
							display: inline-grid;
							grid-auto-flow: column;
							grid-template-rows: repeat(2, 120rpx);
							gap: 10rpx;

							:deep(.content-box) {
								width: 250rpx;
							}
						}
					}
				}

				.recent {
					.content {
						:deep(.content-box) {
							width: 100%;
							margin-bottom: 20rpx;
						}
					}

					.no-data {
						padding-top: 40rpx;
						height: 190rpx;
						text-align: center;
						font-size: 32rpx;
						color: #A1A1A1;
					}
				}
			}
		}
	}
</style>·