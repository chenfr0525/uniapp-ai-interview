"use strict";
const userRecords = [
  {
    id: "20256751",
    username: "糖包子",
    records: [
      {
        id: 1,
        categoryId: 1,
        categoryName: "前端开发",
        questionId: 101,
        questionContent: "请解释CSS盒模型的概念",
        interviewTime: "2023-11-15 14:30:00",
        scores: {
          total: 88,
          expression: 85,
          logic: 90,
          knowledge: 87,
          communication: 86,
          problemSolving: 89
        },
        evaluations: {
          skillAssessment: "对CSS盒模型理解深刻，能结合实际案例说明",
          aiFeedback: "回答流畅，但可以补充更多实际应用场景",
          overall: "表现优秀，建议继续保持"
        }
      },
      {
        id: 2,
        categoryId: 2,
        categoryName: "后端开发",
        questionId: 201,
        questionContent: "解释RESTful API的设计原则",
        interviewTime: "2023-11-16 10:15:00",
        scores: {
          total: 76,
          expression: 80,
          logic: 75,
          knowledge: 72,
          communication: 78,
          problemSolving: 74
        },
        evaluations: {
          skillAssessment: "基本理解RESTful原则，但举例不够充分",
          aiFeedback: "回答时有些紧张，可以更自信些",
          overall: "中等表现，需要更多练习"
        }
      },
      {
        id: 3,
        categoryId: 3,
        categoryName: "算法工程师",
        questionId: 301,
        questionContent: "解释时间复杂度和空间复杂度",
        interviewTime: "2023-11-17 15:20:00",
        scores: {
          total: 82,
          expression: 85,
          logic: 88,
          knowledge: 80,
          communication: 81,
          problemSolving: 83
        },
        evaluations: {
          skillAssessment: "算法基础扎实，能清晰解释时间复杂度",
          aiFeedback: "解题思路清晰，代码实现可以更简洁",
          overall: "表现良好，继续加强编码实践"
        }
      },
      {
        id: 4,
        categoryId: 4,
        categoryName: "产品经理",
        questionId: 401,
        questionContent: "如何进行需求优先级排序？",
        interviewTime: "2023-11-18 09:45:00",
        scores: {
          total: 91,
          expression: 92,
          logic: 90,
          knowledge: 89,
          communication: 93,
          problemSolving: 90
        },
        evaluations: {
          skillAssessment: "需求分析能力突出，逻辑清晰",
          aiFeedback: "产品思维全面，建议增加数据驱动意识",
          overall: "优秀表现，具备高级产品经理潜质"
        }
      },
      {
        id: 5,
        categoryId: 5,
        categoryName: "测试工程师",
        questionId: 501,
        questionContent: "黑盒测试和白盒测试的区别？",
        interviewTime: "2023-11-19 13:10:00",
        scores: {
          total: 68,
          expression: 70,
          logic: 65,
          knowledge: 66,
          communication: 72,
          problemSolving: 67
        },
        evaluations: {
          skillAssessment: "掌握基础测试理论，缺乏实战经验",
          aiFeedback: "测试用例设计可以更全面",
          overall: "需要更多实际项目练习"
        }
      },
      {
        id: 6,
        categoryId: 1,
        categoryName: "前端开发",
        questionId: 102,
        questionContent: "React和Vue的主要区别是什么？",
        interviewTime: "2023-11-20 16:30:00",
        scores: {
          total: 85,
          expression: 83,
          logic: 87,
          knowledge: 86,
          communication: 84,
          problemSolving: 88
        },
        evaluations: {
          skillAssessment: "能准确比较框架差异，理解深入",
          aiFeedback: "可以补充更多性能优化细节",
          overall: "表现稳定，技术理解到位"
        }
      },
      {
        id: 7,
        categoryId: 6,
        categoryName: "运维工程师",
        questionId: 601,
        questionContent: "如何排查服务器CPU占用过高问题？",
        interviewTime: "2023-11-21 11:20:00",
        scores: {
          total: 79,
          expression: 75,
          logic: 82,
          knowledge: 80,
          communication: 78,
          problemSolving: 81
        },
        evaluations: {
          skillAssessment: "了解基本运维概念，缺乏大规模集群经验",
          aiFeedback: "故障排查思路可以更系统化",
          overall: "基础达标，需要加强实战"
        }
      },
      {
        id: 8,
        categoryId: 7,
        categoryName: "UI设计师",
        questionId: 701,
        questionContent: "如何建立设计规范？",
        interviewTime: "2023-11-22 14:15:00",
        scores: {
          total: 72,
          expression: 75,
          logic: 70,
          knowledge: 68,
          communication: 74,
          problemSolving: 73
        },
        evaluations: {
          skillAssessment: "设计理论掌握良好，作品集不够丰富",
          aiFeedback: "可以加强用户研究方法的运用",
          overall: "有潜力，需要更多项目积累"
        }
      },
      {
        id: 9,
        categoryId: 8,
        categoryName: "大数据开发",
        questionId: 801,
        questionContent: "解释MapReduce的工作原理",
        interviewTime: "2023-11-23 10:00:00",
        scores: {
          total: 84,
          expression: 82,
          logic: 86,
          knowledge: 85,
          communication: 83,
          problemSolving: 87
        },
        evaluations: {
          skillAssessment: "大数据基础扎实，理解分布式计算原理",
          aiFeedback: "可以深入探讨实时计算场景",
          overall: "技术深度足够，表现良好"
        }
      },
      {
        id: 10,
        categoryId: 9,
        categoryName: "网络安全",
        questionId: 901,
        questionContent: "什么是OWASP TOP 10？",
        interviewTime: "2023-11-24 15:45:00",
        scores: {
          total: 77,
          expression: 75,
          logic: 79,
          knowledge: 76,
          communication: 78,
          problemSolving: 80
        },
        evaluations: {
          skillAssessment: "了解常见安全威胁，防御方案可以更全面",
          aiFeedback: "可以补充更多实战渗透经验",
          overall: "安全意识良好，需要加强实战"
        }
      }
    ]
  }
];
exports.userRecords = userRecords;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/mock/data/userRecords.js.map
