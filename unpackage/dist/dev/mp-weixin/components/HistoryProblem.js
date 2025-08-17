"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "HistoryProblem",
  props: {
    index: {
      type: Number,
      required: true
    },
    obj: {
      type: Object,
      default: () => ({})
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
    const goRecord = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/result/result?id=${id}&questionId=${props.obj.questionId}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.obj.category),
        b: common_vendor.t(__props.obj.score),
        c: common_vendor.t(__props.obj.time),
        d: common_vendor.t(__props.obj.question),
        e: common_vendor.o(($event) => goRecord(__props.obj.id)),
        f: `linear-gradient(to right, ${color[i].background} 50%, #fff)`,
        g: color[i].color
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/HistoryProblem.js.map
