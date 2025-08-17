"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "SearchContainer",
  props: {
    obj: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const goList = (name) => {
      common_vendor.index.navigateTo({
        url: `/pages/list/list?keyword=${name}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.obj, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.o(($event) => goList(item.name), item.id),
            c: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c1ee981f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/SearchContainer.js.map
