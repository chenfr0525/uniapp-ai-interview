<script setup>
	import { useUserStore } from '../../store';
	const userStore=useUserStore()
	//获取安全高度
	const {
		safeAreaInsets
	} = uni.getSystemInfoSync()
</script>

<template>
	<view class="myinfo-container">
		<view class="info-content"
			:style="{paddingTop:`calc(${safeAreaInsets.top}px + 60px)`, height: `calc(${safeAreaInsets.top}px + 260rpx)`}">
			<view class="avatar">
				<image :src="userStore.userInfo.avatar" mode="aspectFit"></image>
			</view>
			<view class="description">
				<h3 class="nickname">{{userStore.userInfo.username}}</h3>
				<text>ID:{{userStore.userInfo.id}}</text>
			</view>
		</view>
		<view class="content-container">
			<view class="box">
				<h3 class="num" style="color: #D85A37">99</h3>
				<text>最高分</text>
			</view>
			<view class="box">
				<h3 class="num" style="color: #C9B920">76</h3>
				<text>最低分</text>
			</view>
			<view class="box">
				<h3 class="num" style="color: #7CBA11">56</h3>
				<text>面试次数</text>
			</view>
		</view>

		<view class="content-container">
			<navigator class="box" url="/pages/record/record">
				<view class="icon">
					<image src="/static/images/秒表.png" mode="aspectFit" />
				</view>
				<text>历史记录</text>
			</navigator>
			<navigator class="box" url="/pages/taskCenter/taskCenter">
				<view class="icon">
					<image src="/static/images/射箭.png" mode="aspectFit" />
				</view>
				<text>任务中心</text>
			</navigator>
		</view>

		<view class="content-container util-box">
			<view class="content-item">
				<text>联系我们</text>
				<uni-icons type="right" size="25"></uni-icons>
			</view>
			<view class="content-item">
				<text>帮助中心</text>
				<uni-icons type="right" size="25"></uni-icons>
			</view>
			<view class="content-item">
				<text>退出应用</text>
				<uni-icons type="right" size="25"></uni-icons>
			</view>
		</view>

	</view>
</template>

<style lang="scss" scoped>
	.myinfo-container {
		width: 100vw;
		/* #ifdef H5 */
		height:calc(100vh - 100rpx);
		/* #endif */
		
		/* #ifndef H5 */
		height:100vh;
		/* #endif */
		display: flex;
		flex-direction: column;
		gap: 20rpx;
		background:
			linear-gradient(to bottom, #E9EBF7, transparent),
			radial-gradient(at left top, rgb(179, 220, 238), transparent);

		.info-content {
			width: 100%;
			display: flex;
			align-items: center;
			padding-left: 60rpx;

			.avatar {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 50rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.description {
				.nickname {
					font-size: 38rpx;
					font-weight: bold;
					color: #010204;
				}

				text {
					font-size: 26rpx;
					color: #A1A1A1;
				}
			}
		}

		.content-container {
			display: flex;
			justify-content: space-around;
			align-items: center;
			background-color: #F7F7F7;
			border-radius: 30rpx;
			box-shadow: #E9EBF7 0px 0px 10px;
			width: 88%;
			margin: 0 auto;
			padding: 20rpx;

			.box {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;

				.num {
					font-size: 36rpx;
					font-weight: bold;
				}

				text {
					font-size: 28rpx;
					color: #73604B;
				}

				.icon {
					width: 115rpx;
					height: 115rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			&.util-box {
				padding: 0rpx;
				flex-direction: column;

				.content-item {
					padding:40rpx 20rpx;
					width: 86%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 1px solid #3e3e3e;

					&:last-child {
						border: none;
					}
				}
			}
		}
	}
</style>