"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + SearchContainer)();
}
const SearchContainer = () => "../../components/SearchContainer.js";
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const recommandType = [
      {
        id: 1,
        name: "前端"
      },
      {
        id: 2,
        name: "开发"
      },
      {
        id: 3,
        name: "java"
      },
      {
        id: 4,
        name: "后端"
      },
      {
        id: 5,
        name: "数据"
      },
      {
        id: 6,
        name: "设计"
      }
    ];
    const keyword = common_vendor.ref("");
    const searchKey = () => {
      common_vendor.index.navigateTo({
        url: `/pages/list/list?keyword=${keyword.value}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: keyword.value,
        b: common_vendor.o(($event) => keyword.value = $event.detail.value),
        c: common_vendor.p({
          type: "search",
          size: "26"
        }),
        d: common_vendor.o(searchKey),
        e: common_vendor.p({
          obj: recommandType
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/search/search.js.map
