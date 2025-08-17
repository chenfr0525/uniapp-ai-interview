<script setup>
	import NavBar from '@/components/NavBar.vue';
	import ContentBox from '@/components/ContentBox.vue';
	import {
		ref
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import api from '@/api'

	const title = ref('')

	const categoryList = ref([])

	const getCategoryList = async (keyword) => {
		const res = await api.searchCategories(keyword)
		categoryList.value = res
	}

	onLoad(async (e) => {
		title.value = e.keyword
		await getCategoryList(e.keyword)
	})
</script>

<template>
	<view class="list-container">
		<NavBar :title="title" />
		<view class="content-container" v-if="categoryList.length>0">
			<ContentBox v-for="(item, index) in categoryList" :num="item.num" :key="item.id" :index="index"
				:id="item.id" :title="item.name" :content="item.description" />
		</view>
		<view class="no-data" v-else>
			<text>没有该面试题哦！</text>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.list-container {
		width: 100vw;
		height: 100%;

		.content-container {
			overflow-y: auto;
			padding: 20rpx;
			display: flex;
			flex-direction: column;
			gap: 20rpx;

			.content-box {}
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