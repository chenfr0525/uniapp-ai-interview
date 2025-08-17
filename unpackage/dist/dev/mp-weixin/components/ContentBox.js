"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "ContentBox",
  props: {
    index: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: "前端"
    },
    content: {
      type: String,
      default: "前端相关面试问题"
    },
    num: {
      type: Number,
      default: 1
    }
  },
  setup(__props) {
    const color = [{
      background: "rgb(255,240,240)",
      color: "#814330"
    }, {
      background: "rgb(232,221,244)",
      color: "#512E79"
    }, {
      background: "rgb(218,233,248)",
      color: "#33586D"
    }, {
      background: "rgb(244,221,244)",
      color: "#792E60"
    }, {
      background: "rgb(225,238,214)",
      color: "#2F655B"
    }, {
      background: "rgb(247,234,190)",
      color: "#635A30"
    }];
    const props = __props;
    const i = props.index % color.length;
    const goDetail = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/detailList/detailList?id=${id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title),
        b: common_vendor.t(__props.content),
        c: common_vendor.o(($event) => goDetail(__props.id)),
        d: `linear-gradient(to right, ${color[i].background} 50%, #fff)`,
        e: color[i].color
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bcce938a"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/ContentBox.js.map
