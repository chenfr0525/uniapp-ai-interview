<script setup>
	import HistoryProblem from '@/components/HistoryProblem.vue'
	import {
		ref
	} from "vue"
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import api from '@/api'

	// 最近面试记录
	const recentCategoryList = ref([])
	
	const getInterviewRecord = async () => {
		const res = await api.getRecords()
		recentCategoryList.value = res.data
	}
	
	onLoad(async()=>{
		await getInterviewRecord()
	})
</script>

<template>
	<view class="record-container">
		<view class="content" v-if="recentCategoryList.length > 0">
			<HistoryProblem v-for="(item, index) in recentCategoryList" :key="item.categoryId" :index="index"
				:obj="item" />
		</view>
		<view class="no-data" v-else>
			<text>你还没有面试记录哦~</text>
		</view>
	</view>
</template>


<style lang="scss" scoped>
	.record-container {
		width: 100%;
		height: 100vh;

		.content {
			display: flex;
			flex-direction: column;
			gap: 20rpx;
			width: 100%;
			padding: 20rpx 20rpx 40rpx;
		}
		
		.no-data {
			 height: calc(100% - 60px);
			    background: #FFF;
			    text-align: center;
			    padding-top: 100rpx;
			    font-size: 32rpx;
			    color: #999;
		}
	}
</style>