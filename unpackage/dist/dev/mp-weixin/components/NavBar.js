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
  __name: "NavBar",
  props: {
    title: {
      type: String,
      default: "搜索结果"
    }
  },
  setup(__props) {
    const {
      safeAreaInsets
    } = common_vendor.index.getSystemInfoSync();
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.p({
          type: "left",
          size: "26"
        }),
        c: common_vendor.t(__props.title),
        d: `calc(${common_vendor.unref(safeAreaInsets).top}px + 20rpx)`,
        e: `calc(${common_vendor.unref(safeAreaInsets).top}px + 100rpx)`,
        f: `calc(${common_vendor.unref(safeAreaInsets).top}px + 100rpx)`
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/NavBar.js.map
