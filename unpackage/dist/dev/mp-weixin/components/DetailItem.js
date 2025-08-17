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
  __name: "DetailItem",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: "问题1"
    }
  },
  setup(__props) {
    const props = __props;
    const goToInterview = () => {
      common_vendor.index.navigateTo({
        url: `/pages/interview/interview?id=${props.id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title),
        b: common_vendor.p({
          type: "right",
          size: "18"
        }),
        c: common_vendor.o(goToInterview)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-85b5a588"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/DetailItem.js.map
