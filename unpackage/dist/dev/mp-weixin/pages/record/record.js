"use strict";
const common_vendor = require("../../common/vendor.js");
const mock_services_mockApi = require("../../mock/services/mockApi.js");
if (!Math) {
  HistoryProblem();
}
const HistoryProblem = () => "../../components/HistoryProblem.js";
const _sfc_main = {
  __name: "record",
  setup(__props) {
    const recentCategoryList = common_vendor.ref([]);
    const getInterviewRecord = async () => {
      const res = await mock_services_mockApi.mockApi.getRecords();
      recentCategoryList.value = res.data;
    };
    common_vendor.onLoad(async () => {
      await getInterviewRecord();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: recentCategoryList.value.length > 0
      }, recentCategoryList.value.length > 0 ? {
        b: common_vendor.f(recentCategoryList.value, (item, index, i0) => {
          return {
            a: item.categoryId,
            b: "ef6850c5-0-" + i0,
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ef6850c5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/record/record.js.map
