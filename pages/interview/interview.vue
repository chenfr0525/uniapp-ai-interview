<script setup>
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import api from '@/api'

	const question = ref({
		id: 1,
		title: ''
	})

	const isRecording = ref(false)
	const countdown = ref('1:00')
	let timer = null
	let recordingTimer = null

	// 开始录音
	const startRecording = () => {
		isRecording.value = true
		startCountdown()

		// 这里可以调用实际的录音API
		// uni.startRecord(...)

		console.log('开始录音')
	}

	// 结束录音
	const stopRecording = () => {
		isRecording.value = false
		clearCountdown()

		// 这里可以调用停止录音API
		// uni.stopRecord(...)

		console.log('结束录音')

		// 模拟录音完成后跳转
		setTimeout(() => {
			uni.redirectTo({
				url: `/pages/result/result?questionId=${question.value.id}` // 替换为你的结果页路径
			})
		}, 500)
	}

	// 倒计时
	const startCountdown = () => {
		let seconds = 60
		timer = setInterval(() => {
			seconds--
			const mins = Math.floor(seconds / 60)
			const secs = seconds % 60
			countdown.value = `${mins}:${secs < 10 ? '0' + secs : secs}`

			if (seconds <= 0) {
				stopRecording()
			}
		}, 1000)
	}

	// 清除倒计时
	const clearCountdown = () => {
		if (timer) {
			clearInterval(timer)
			timer = null
		}
		countdown.value = '1:00'
	}

	// 防止用户触摸时移动手指
	const handleTouchMove = (e) => {
		if (isRecording.value) {
			e.preventDefault()
		}
	}

	onLoad(async (e) => {
		question.value.id = e.id
		const res =await api.getQuestionById(question.value.id)
		question.value.title=res.content
	})
</script>

<template>
	<view class="interview-container">
		<view class="interview-desc">
			<view class="ai">
				<image src="/static/images/AI.png" mode="aspectFit"></image>
			</view>
			<view class="question">问题:{{question.title}}</view>
		</view>
		<view class="dialog-box">
			<view class="left box">{{isRecording?'我正在认真听你说话':'长按话筒开始面试！'}}</view>
			<view class="right box" v-if="isRecording">
				倒计时：{{countdown}}
			</view>
		</view>
		<view class="footer-container">
			<view class="button" :class="{active:isRecording} " @touchstart="startRecording" @touchend="stopRecording"
				@touchcancel="stopRecording" @touchmove="handleTouchMove">
				<uni-icons :type="isRecording?'mic-filled':'mic'" size="60"></uni-icons>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.interview-container {
		width: 100%;
		height: 100vh;
		background: #f7f7f7;
		display: flex;
		flex-direction: column;

		.interview-desc {
			height: 400rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 30rpx;

			.ai {
				width: 240rpx;
				height: 240rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.question {
				height: 40rpx;
				font-size: 35rpx;
				color: #010204;
			}
		}

		.dialog-box {
			height: 300rpx;
			padding: 20rpx;
			display: flex;
			flex-direction: column;
			gap: 20rpx;

			.box {
				border-radius: 30rpx;
				padding: 20rpx 36rpx;
				font-size: 30rpx;
			}

			.left {
				align-self: flex-start;
				background-color: #F8FC61;
				color: #333;
			}

			.right {
				align-self: flex-end;
				background-color: #fff;
				color: #666;
			}
		}

		.footer-container {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;

			.button {
				width: 260rpx;
				height: 260rpx;
				background: linear-gradient(to bottom, rgb(229, 250, 114), #e8e9d2);
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
				transition: background 0.2s, box-shadow 0.2s;
				color: #4E5969;

				&.active {
					background: linear-gradient(to bottom, rgb(229, 250, 114), #aeaf9e);
					box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
				}
			}
		}
	}
</style>