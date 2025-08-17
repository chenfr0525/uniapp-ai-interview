"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
require("../../store/index.js");
const store_modules_user = require("../../store/modules/user.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "myInfo",
  setup(__props) {
    const userStore = store_modules_user.useUserStore();
    const {
      safeAreaInsets
    } = common_vendor.index.getSystemInfoSync();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(userStore).userInfo.avatar,
        b: common_vendor.t(common_vendor.unref(userStore).userInfo.username),
        c: common_vendor.t(common_vendor.unref(userStore).userInfo.id),
        d: `calc(${common_vendor.unref(safeAreaInsets).top}px + 60px)`,
        e: `calc(${common_vendor.unref(safeAreaInsets).top}px + 260rpx)`,
        f: common_assets._imports_0$2,
        g: common_assets._imports_1,
        h: common_vendor.p({
          type: "right",
          size: "25"
        }),
        i: common_vendor.p({
          type: "right",
          size: "25"
        }),
        j: common_vendor.p({
          type: "right",
          size: "25"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ee02cf37"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/myInfo/myInfo.js.map
