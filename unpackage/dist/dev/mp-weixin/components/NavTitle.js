"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "NavTitle",
  props: {
    title: {
      type: String,
      default: "热门岗位推荐"
    }
  },
  setup(__props) {
    const props = __props;
    const goBack = () => {
      if (props.title === "热门岗位推荐") {
        common_vendor.index.switchTab({
          url: "/pages/classify/classify"
        });
      } else if (props.title === "最近面试记录") {
        common_vendor.index.navigateTo({
          url: "/pages/record/record"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title),
        b: common_vendor.p({
          type: "right",
          size: "20"
        }),
        c: common_vendor.o(($event) => goBack())
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-af31a403"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/NavTitle.js.map
