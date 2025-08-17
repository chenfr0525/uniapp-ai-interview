"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "taskCenter",
  setup(__props) {
    const categories = common_vendor.ref([
      { id: 1, name: "全部", value: "all", active: true },
      { id: 2, name: "进行中", value: "doing", active: false },
      { id: 3, name: "已完成", value: "done", active: false },
      { id: 4, name: "未开始", value: "nodo", active: false }
    ]);
    const tasks = common_vendor.ref([
      {
        id: 1,
        title: "完成前端基础面试",
        desc: "包含HTML、CSS、JavaScript基础问题",
        progress: 80,
        status: "doing",
        deadline: "2023-12-15",
        reward: 50,
        type: "面试"
      },
      {
        id: 2,
        title: "掌握Vue3核心概念",
        desc: "学习Vue3组合式API和响应式原理",
        progress: 30,
        status: "doing",
        deadline: "2023-12-20",
        reward: 30,
        type: "学习"
      },
      {
        id: 3,
        title: "完成算法每日一题",
        desc: "解决LeetCode中等难度题目",
        progress: 100,
        status: "done",
        deadline: "2023-12-10",
        reward: 20,
        type: "练习"
      },
      {
        id: 4,
        title: "准备React面试题",
        desc: "整理常见React面试问题及答案",
        progress: 0,
        status: "nodo",
        deadline: "2023-12-25",
        reward: 40,
        type: "准备"
      }
    ]);
    const switchCategory = (id) => {
      categories.value.forEach((item) => {
        item.active = item.id === id;
      });
    };
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(safeAreaInsets).top + "px",
        b: common_vendor.f(categories.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.id,
            c: item.active ? 1 : "",
            d: common_vendor.o(($event) => switchCategory(item.id), item.id)
          };
        }),
        c: common_vendor.f(tasks.value, (task, k0, i0) => {
          return {
            a: common_vendor.t(task.title),
            b: common_vendor.t(task.reward),
            c: common_vendor.t(task.desc),
            d: common_vendor.t(task.progress),
            e: task.progress + "%",
            f: task.progress === 100 ? 1 : "",
            g: task.progress > 0 && task.progress < 100 ? 1 : "",
            h: common_vendor.t(task.deadline),
            i: common_vendor.t(task.status),
            j: common_vendor.n("status-" + task.status),
            k: task.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-53a09dd8"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/taskCenter/taskCenter.js.map
