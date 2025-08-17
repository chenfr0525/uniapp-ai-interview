# 面霸AI - 智能语音面试小程序

## 项目概述

面霸AI是一款基于语音交互的智能面试模拟小程序，帮助求职者通过AI模拟真实面试场景，提升面试表现。本项目使用Uniapp框架开发，纯前端实现，数据通过Mock模拟。

## 技术栈

- **前端框架**: Uniapp (Vue3语法)
- **状态管理**: Pinia
- **构建工具**: HBuilderX
- **Mock数据**: 本地JSON模拟

## 项目结构

```
面霸AI/
├── static/                  # 公共资源
│   ├── images/              # 图标和图片资源
│   └── preview/             # 项目展示图片
├── components/              # 公共组件
├── mock/                    # Mock数据
│   ├── data                 # 面试问题数据
│   ├── services             # 获取数据
│   └── index.js             # 统一导出数据
├── pages/                   # 页面目录
│   ├── index/               # 首页
│   ├── interview/           # 面试页面
│   ├── result/              # 分析报告页
│   └── list/                # 分类列表页
├── stores/                  # Pinia状态管理
├── utils/                   # 工具函数
│   ├── request.js           # 请求封装
└── App.vue                  # 应用入口
```

## 页面展示

#### 首页

![首页](/static/preview/home.png)

#### 分类页

![分类页](/static/preview/classify.png)

#### 详情

![详情](/static/preview/detail.png)

#### 个人中心

![个人中心](/static/preview/myInfo.png)

#### 搜索

![搜索](/static/preview/search.png)

![搜索结果](/static/preview/searchResult.png)

#### 面试

![面试](/static/preview/interview.png)

![面试结果](/static/preview/result.png)

#### 面试记录

![面试记录](/static/preview/list.png)

#### 任务中心（新增）

![任务中心](/static/preview/task.png)

## 功能特性

### 1. 核心功能

- **AI模拟面试**: 语音交互模拟真实面试场景
- **多岗位题库**: 覆盖前端、后端、产品经理等12类岗位
- **智能分析**: 面试表现评估与建议
- **历史记录**: 保存每次面试记录

### 2.项目说明

本项目是一个 Uniapp 学习实践项目，主要目的为：

1. **技术迁移练习**：基于已完成的 Vue3 Web 前端项目迁移到 Uniapp 小程序平台
   （原 Vue3 项目地址：[项目链接]([chenfr0525/ai-interview](https://github.com/chenfr0525/ai-interview))
   
2. **纯前端实现**：
   - 所有数据通过 Mock 方式模拟
   - 语音交互功能使用 setTimeout 模拟流程
   - 未接入真实后端服务
3. **与原项目的区别**：
   - 原 Vue3 项目实现了完整的语音交互功能
   - 原项目有真实后端接口对接
   - 本项目仅保留前端交互逻辑
4. **学习重点**：
   - Uniapp 多端适配
   - 小程序 API 使用
   - Vue3 在 Uniapp 中的实践

## 特别说明

⚠️ **注意**：这只是一个前端演示项目，主要展示界面交互和流程逻辑，不包含：

- 真实的语音识别功能
- AI 面试分析算法
- 后端数据交互

