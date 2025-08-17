"use strict";
const mock_data_interviewCategories = require("../data/interviewCategories.js");
const mock_data_interviewQuestion = require("../data/interviewQuestion.js");
const mock_data_userRecords = require("../data/userRecords.js");
const mockApi = {
  // 获取面试分类
  async getCategories() {
    return mock_data_interviewCategories.interviewCategories;
  },
  //模糊搜索分类
  async searchCategories(keyword) {
    if (!keyword || typeof keyword !== "string") {
      return mock_data_interviewCategories.interviewCategories;
    }
    const lowerKeyword = keyword.toLowerCase();
    return mock_data_interviewCategories.interviewCategories.filter(
      (category) => category.name.toLowerCase().includes(lowerKeyword)
    );
  },
  //获取推荐的面试分类
  async getRecommendedCategories() {
    return mock_data_interviewCategories.interviewCategories.filter((item) => item.recommended);
  },
  //难度筛选
  async getCategoriesByDifficulty(level) {
    return mock_data_interviewCategories.interviewCategories.filter((item) => item.difficulty === level);
  },
  // 根据分类ID获取问题
  async getQuestions(userId, categoryId) {
    var _a, _b;
    const allQuestions = mock_data_interviewQuestion.interviewQuestions[categoryId] || [];
    const userRecord = mock_data_userRecords.userRecords.find((user) => user.id === userId);
    const answeredQuestionIds = (userRecord == null ? void 0 : userRecord.records.map((item) => item.questionId)) || [];
    const completed = allQuestions.filter((q) => answeredQuestionIds.includes(q.id));
    const remaining = allQuestions.filter((q) => !answeredQuestionIds.includes(q.id));
    return {
      categoryId,
      categoryName: ((_a = completed[0]) == null ? void 0 : _a.categoryName) || ((_b = allQuestions[0]) == null ? void 0 : _b.categoryName) || "",
      completed,
      remaining
    };
  },
  //根据id获取问题
  async getQuestionById(questionId) {
    for (const index in mock_data_interviewQuestion.interviewQuestions) {
      const foundQuestion = mock_data_interviewQuestion.interviewQuestions[index].find(
        (question) => question.id === +questionId
      );
      if (foundQuestion) {
        return foundQuestion;
      }
    }
    return null;
  },
  // 获取用户记录
  async getRecords() {
    const data = mock_data_userRecords.userRecords[0].records.map((item) => {
      return {
        id: item.id,
        category: item.categoryName,
        time: item.interviewTime,
        question: item.questionContent,
        questionId: item.questionId,
        score: item.scores.total
      };
    });
    return {
      data
    };
  },
  //根据id获取面试结果
  async getRecordById(id) {
    const data = mock_data_userRecords.userRecords[0].records.find((item) => item.id === +id);
    return data;
  }
};
exports.mockApi = mockApi;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/mock/services/mockApi.js.map
