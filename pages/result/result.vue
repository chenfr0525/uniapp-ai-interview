<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import api from '@/api'
	import {
		ref
	} from 'vue'

	const result = ref()
	const questionId = ref()
	const getResult = async (id) => {
		const res = await api.getRecordById(id)
		result.value = res
	}

	onLoad(async (e) => {
		if (e.id) {
			await getResult(e.id)
		} else {
			result.value = {
				scores: {
					total: 88,
					expression: 85,
					logic: 90,
					knowledge: 87,
					communication: 86,
					problemSolving: 89
				},
				evaluations: {
					skillAssessment: "哎哟，不错哦",
					aiFeedback: "回答流畅，但可以补充更多实际应用场景",
					overall: "表现优秀，建议继续保持"
				}
			}
		}
		questionId.value = e.questionId
	})

	const onRefresh = () => {
		uni.navigateTo({
			url: `/pages/interview/interview?id=${questionId.value}`
		})
	}
	const onGoBack = () => {
		uni.navigateBack()
	}
</script>

<template>
	<view class="result-container">
		<view class="score">
			<text class="num">{{result?.scores?.total}}</text>
			<h3 class="desc">最终成绩</h3>
		</view>
		<scroll-view scroll-y class="scroll-view">
			<view class="content-container">
				<view class="box">
					<view class="title"><uni-icons type="mail-open" size="20"></uni-icons>表达能力</view>
					<view class="score">{{result?.scores?.expression}}分</view>
				</view>
				<view class="box">
					<view class="title"><uni-icons type="help" size="20"></uni-icons>逻辑思维</view>
					<view class="score">{{result?.scores?.logic}}分</view>
				</view>
				<view class="box">
					<view class="title"><uni-icons type="gift" size="20"></uni-icons>专业知识</view>
					<view class="score">{{result?.scores?.knowledge}}分</view>
				</view>
				<view class="box">
					<view class="title"><uni-icons type="hand-up" size="20"></uni-icons>沟通技巧</view>
					<view class="score">{{result?.scores?.communication}}分</view>
				</view>
				<view class="box">
					<view class="title"><uni-icons type="fire" size="20"></uni-icons>问题解决</view>
					<view class="score">{{result?.scores?.problemSolving}}分</view>
				</view>
				<view class="access">
					<view class="title">技能评估</view>
					<view class="desc">
						{{result?.evaluations?.skillAssessment}}
					</view>
				</view>
				<view class="access">
					<view class="title">AI分析反馈</view>
					<view class="desc">{{result?.evaluations?.aiFeedback}}</view>
				</view>
				<view class="access">
					<view class="title">总体评价</view>
					<view class="desc">{{result?.evaluations?.overall}}</view>
				</view>
			</view>
		</scroll-view>
		<view class="button-container">
			<view @click="onRefresh" class="refresh btn">重新面试</view>
			<view @click="onGoBack" class="confirm btn">确认</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.result-container {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: linear-gradient(to right, rgb(225, 238, 214), rgb(234, 246, 226));
		overflow: hidden;
		position: relative;

		.score {
			height: 200rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;

			.num {
				font-size: 60rpx;
				font-weight: bold;
				color: #D85A37;
			}

			.desc {
				font-size: 32rpx;
				color: #73604B;
			}
		}

		.scroll-view {
			width: 100%;
			/* 关键修改：添加明确的高度限制 */
			min-height: calc(100vh - 200rpx - 110rpx - 300rpx);
			/* 这个1px很重要，配合flex:1使用 */
			padding: 20rpx;
			box-sizing: border-box;
			/* 确保滚动容器可以滚动 */
			overflow: hidden;

			.content-container {
				display: flex;
				flex-direction: column;
				gap: 10px;
				width: 100%;
				background-color: #fff;
				border-radius: 20rpx;
				padding-bottom: 40rpx;
				min-height: min-content;

				.box {
					height: 100rpx;
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 10rpx 20rpx;
					border-bottom: 1px solid #cacaca;

					.title {
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 32rpx;
						color: #666;
					}

					.score {
						font-size: 32rpx;
						font-weight: bold;
						color: #7CBA11
					}
				}

				.access {
					padding: 10rpx 20rpx;
					width: 100%;
					display: flex;
					gap: 10rpx;
					flex-direction: column;
					align-items: flex-start;

					.title {
						font-size: 30rpx;
						font-weight: bold;
						color: #010204;
					}

					.desc {
						width: 100%;
						font-size: 28rpx;
						color: #666;
					}
				}
			}
		}

		.button-container {
			height: 110rpx;
			padding: 10rpx 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-shrink: 0;

			.btn {
				height: 90rpx;
				width: 48%;
				padding: 20rpx;
				text-align: center;
				border-radius: 16rpx;
				font-size: 32rpx;
				color: #fff;
			}

			.refresh {
				background: linear-gradient(to right, #d76647, #f9e18a);
			}

			.confirm {
				background: linear-gradient(to right, #99bd5a, #fff6d5);
			}
		}

	}
</style>