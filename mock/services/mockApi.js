import {
	interviewCategories,
	interviewQuestions,
	userRecords,
	userStats
} from '@/mock/index.js'

// 模拟网络请求延迟
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const mockApi = {
	// 获取面试分类
	async getCategories() {
		return interviewCategories
	},
	//模糊搜索分类
	async searchCategories(keyword) {
		if (!keyword || typeof keyword !== 'string') {
			return interviewCategories; // 无关键词返回所有分类
		}

		const lowerKeyword = keyword.toLowerCase();

		return interviewCategories.filter(category =>
			category.name.toLowerCase().includes(lowerKeyword)
		);
	},

	//获取推荐的面试分类
	async getRecommendedCategories() {
		return interviewCategories.filter(item => item.recommended)
	},

	//难度筛选
	async getCategoriesByDifficulty(level) {
		return interviewCategories.filter(item => item.difficulty === level)
	},

	// 根据分类ID获取问题
	async getQuestions(userId, categoryId) {
		const allQuestions = interviewQuestions[categoryId] || [];
		const userRecord = userRecords.find(user => user.id === userId)
		const answeredQuestionIds = userRecord?.records.map(item => item.questionId) || []
		// 3. 分类问题
		const completed = allQuestions.filter(q => answeredQuestionIds.includes(q.id));
		const remaining = allQuestions.filter(q => !answeredQuestionIds.includes(q.id));
		return {
			categoryId,
			categoryName: completed[0]?.categoryName || allQuestions[0]?.categoryName || '',
			completed,
			remaining
		};
	},
	//根据id获取问题
	async getQuestionById(questionId) {
		// 遍历所有分类
		for (const index in interviewQuestions) {
			const foundQuestion = interviewQuestions[index].find(
				question => question.id === +questionId)
			// 如果找到则返回
			if (foundQuestion) {
				return foundQuestion
			}
		}

		// 未找到返回null
		return null;
	},

	// 获取用户记录
	async getRecords() {
		const data = userRecords[0].records.map(item => {
			return {
				id: item.id,
				category: item.categoryName,
				time: item.interviewTime,
				question: item.questionContent,
				questionId: item.questionId,
				score: item.scores.total
			}
		})
		return {
			data
		}
	},
	//根据id获取面试结果
	async getRecordById(id) {
		const data = userRecords[0].records.find(item => item.id === +id)
		return data
	}
}