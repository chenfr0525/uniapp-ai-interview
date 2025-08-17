<script setup>
import { ref } from 'vue'

// 任务分类
const categories = ref([
  { id: 1, name: '全部',value:'all', active: true },
  { id: 2, name: '进行中', value:'doing',active: false },
  { id: 3, name: '已完成', value:'done',active: false },
  { id: 4, name: '未开始', value:'nodo',active: false }
])

// 任务列表
const tasks = ref([
  {
    id: 1,
    title: '完成前端基础面试',
    desc: '包含HTML、CSS、JavaScript基础问题',
    progress: 80,
    status: 'doing',
    deadline: '2023-12-15',
    reward: 50,
    type: '面试'
  },
  {
    id: 2,
    title: '掌握Vue3核心概念',
    desc: '学习Vue3组合式API和响应式原理',
    progress: 30,
    status: 'doing',
    deadline: '2023-12-20',
    reward: 30,
    type: '学习'
  },
  {
    id: 3,
    title: '完成算法每日一题',
    desc: '解决LeetCode中等难度题目',
    progress: 100,
    status: 'done',
    deadline: '2023-12-10',
    reward: 20,
    type: '练习'
  },
  {
    id: 4,
    title: '准备React面试题',
    desc: '整理常见React面试问题及答案',
    progress: 0,
    status: 'nodo',
    deadline: '2023-12-25',
    reward: 40,
    type: '准备'
  }
])

// 切换分类
const switchCategory = (id) => {
  categories.value.forEach(item => {
    item.active = item.id === id
  })
}

// 获取安全高度
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="task-center-container">
    <!-- 头部区域 -->
    <view class="header" :style="{paddingTop: safeAreaInsets.top + 'px'}">
      <view class="title-box">
        <text class="title">任务中心</text>
        <text class="subtitle">每日任务，提升自我</text>
      </view>
      <view class="progress-box">
        <view class="progress-bar">
          <view class="progress" :style="{width: '65%'}"></view>
        </view>
        <text class="progress-text">今日进度: 65%</text>
      </view>
    </view>

    <!-- 分类标签 -->
    <scroll-view class="category-scroll" scroll-x>
      <view class="category-container">
        <view 
          v-for="item in categories" 
          :key="item.id" 
          class="category-item" 
          :class="{active: item.active}"
          @tab="switchCategory(item.id)"
        >
          {{item.name}}
        </view>
      </view>
    </scroll-view>

    <!-- 任务列表 -->
    <scroll-view class="task-scroll" scroll-y>
      <view class="task-list">
        <view v-for="task in tasks" :key="task.id" class="task-item">
          <view class="task-header">
            <text class="task-title">{{task.title}}</text>
            <text class="task-reward">{{task.reward}}积分</text>
          </view>
          <text class="task-desc">{{task.desc}}</text>
          
          <view class="task-progress">
            <text class="progress-text">进度: {{task.progress}}%</text>
            <view class="progress-bar">
              <view 
                class="progress" 
                :style="{width: task.progress + '%'}"
                :class="{
                  'progress-done': task.progress === 100,
                  'progress-doing': task.progress > 0 && task.progress < 100
                }"
              ></view>
            </view>
          </view>
          
          <view class="task-footer">
            <text class="task-deadline">截止: {{task.deadline}}</text>
            <view class="task-status" :class="'status-' + task.status">
              {{task.status}}
            </view>
          </view>
        </view>
      </view>
	  
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
.task-center-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #f5f7fa, #e4e8f0);
  
  .header {
    width: 100%;
    padding: 20rpx 40rpx;
    background: linear-gradient(to right, #6b8cff, #4b6cff);
    color: #fff;
    box-shadow: 0 4rpx 12rpx rgba(75, 108, 255, 0.2);
    
    .title-box {
      margin-bottom: 20rpx;
      
      .title {
        font-size: 44rpx;
        font-weight: bold;
        display: block;
      }
      
      .subtitle {
        font-size: 28rpx;
        opacity: 0.9;
      }
    }
    
    .progress-box {
      display: flex;
      align-items: center;
      margin-top: 30rpx;
      
      .progress-bar {
        flex: 1;
        height: 16rpx;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 8rpx;
        overflow: hidden;
        margin-right: 20rpx;
        
        .progress {
          height: 100%;
          background-color: #fff;
          border-radius: 8rpx;
          transition: width 0.3s;
        }
      }
      
      .progress-text {
        font-size: 26rpx;
      }
    }
  }
  
  .category-scroll {
    width: 100%;
    white-space: nowrap;
    background-color: #fff;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
    
    .category-container {
      display: inline-flex;
      padding: 20rpx 30rpx;
      
      .category-item {
        padding: 12rpx 30rpx;
        margin-right: 20rpx;
        font-size: 28rpx;
        color: #666;
        border-radius: 30rpx;
        background-color: #f5f7fa;
        
        &.active {
          background-color: #4b6cff;
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
  
  .task-scroll {
    flex: 1;
	height: 1px;
    width: 100%;
    box-sizing: border-box;
    
    .task-list {
		padding: 30rpx;
      display: flex;
      flex-direction: column;
      gap: 30rpx;
      
      .task-item {
        background-color: #fff;
        border-radius: 20rpx;
        padding: 30rpx;
        box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
        
        .task-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20rpx;
          
          .task-title {
            font-size: 32rpx;
            font-weight: bold;
            color: #333;
          }
          
          .task-reward {
            font-size: 26rpx;
            color: #ff9500;
            font-weight: bold;
          }
        }
        
        .task-desc {
          font-size: 28rpx;
          color: #666;
          margin-bottom: 30rpx;
          display: block;
        }
        
        .task-progress {
          margin-bottom: 30rpx;
          
          .progress-text {
            font-size: 26rpx;
            color: #999;
            display: block;
            margin-bottom: 10rpx;
          }
          
          .progress-bar {
            height: 12rpx;
            background-color: #f5f7fa;
            border-radius: 6rpx;
            overflow: hidden;
            
            .progress {
              height: 100%;
              border-radius: 6rpx;
              background-color: #ddd;
              
              &.progress-doing {
                background-color: #4b6cff;
              }
              
              &.progress-done {
                background-color: #00c853;
              }
            }
          }
        }
        
        .task-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          
          .task-deadline {
            font-size: 26rpx;
            color: #999;
          }
          
          .task-status {
            font-size: 26rpx;
            padding: 6rpx 20rpx;
            border-radius: 20rpx;
            
            &.status-done {
              background-color: #e8f5e9;
              color: #00c853;
            }
            
            &.status-doing {
              background-color: #e3f2fd;
              color: #2196f3;
            }
            
            &.status-nodo {
              background-color: #f5f5f5;
              color: #9e9e9e;
            }
          }
        }
      }
    }
  }
}
</style>