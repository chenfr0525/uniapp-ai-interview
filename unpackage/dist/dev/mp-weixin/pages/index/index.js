"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const mock_services_mockApi = require("../../mock/services/mockApi.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + NavTitle + ContentBox + HistoryProblem)();
}
const ContentBox = () => "../../components/ContentBox.js";
const NavTitle = () => "../../components/NavTitle.js";
const HistoryProblem = () => "../../components/HistoryProblem.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const {
      safeAreaInsets
    } = common_vendor.index.getSystemInfoSync();
    const hotCategoryList = common_vendor.ref([]);
    const recentCategoryList = common_vendor.ref([]);
    const getHotCategory = async () => {
      const res = await mock_services_mockApi.mockApi.getRecommendedCategories();
      hotCategoryList.value = res;
    };
    const getInterviewRecord = async () => {
      const res = await mock_services_mockApi.mockApi.getRecords();
      recentCategoryList.value = res.data.slice(res.data.length - 5, res.data.length);
    };
    const gotoSearch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    };
    common_vendor.onLoad(async () => {
      await getHotCategory();
      await getInterviewRecord();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0,
        b: common_vendor.unref(safeAreaInsets).top + "px",
        c: `calc(${common_vendor.unref(safeAreaInsets).top}px + 250rpx)`,
        d: `calc(${common_vendor.unref(safeAreaInsets).top}px + 250rpx)`,
        e: common_vendor.p({
          type: "search",
          size: "20",
          color: "#A8A8A8"
        }),
        f: common_vendor.p({
          type: "flag",
          size: "20",
          color: "#010204"
        }),
        g: common_vendor.o(gotoSearch),
        h: common_vendor.p({
          title: "热门岗位推荐"
        }),
        i: common_vendor.f(hotCategoryList.value, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "1cf27b2a-3-" + i0,
            d: common_vendor.p({
              num: item.num,
              id: item.id,
              index,
              title: item.name,
              content: item.difficulty === 1 ? "难度：简单" : item.difficulty === 2 ? "难度：中等" : "难度：困难"
            })
          };
        }),
        j: common_vendor.p({
          title: "最近面试记录"
        }),
        k: recentCategoryList.value.length > 0
      }, recentCategoryList.value.length > 0 ? {
        l: common_vendor.f(recentCategoryList.value, (item, index, i0) => {
          return {
            a: item.id,
            b: "1cf27b2a-5-" + i0,
            c: common_vendor.p({
              index,
              obj: item
            })
          };
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
