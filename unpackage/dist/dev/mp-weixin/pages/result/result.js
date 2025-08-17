"use strict";
const common_vendor = require("../../common/vendor.js");
const mock_services_mockApi = require("../../mock/services/mockApi.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "result",
  setup(__props) {
    const result = common_vendor.ref();
    const questionId = common_vendor.ref();
    const getResult = async (id) => {
      const res = await mock_services_mockApi.mockApi.getRecordById(id);
      result.value = res;
    };
    common_vendor.onLoad(async (e) => {
      if (e.id) {
        await getResult(e.id);
      } else {
        result.value = {
          scores: {
            total: 88,
            expression: 85,
            logic: 90,
            knowledge: 87,
            communication: 86,
            problemSolving: 89
          },
          evaluations: {
            skillAssessment: "哎哟，不错哦",
            aiFeedback: "回答流畅，但可以补充更多实际应用场景",
            overall: "表现优秀，建议继续保持"
          }
        };
      }
      questionId.value = e.questionId;
    });
    const onRefresh = () => {
      common_vendor.index.navigateTo({
        url: `/pages/interview/interview?id=${questionId.value}`
      });
    };
    const onGoBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      return {
        a: common_vendor.t((_b = (_a = result.value) == null ? void 0 : _a.scores) == null ? void 0 : _b.total),
        b: common_vendor.p({
          type: "mail-open",
          size: "20"
        }),
        c: common_vendor.t((_d = (_c = result.value) == null ? void 0 : _c.scores) == null ? void 0 : _d.expression),
        d: common_vendor.p({
          type: "help",
          size: "20"
        }),
        e: common_vendor.t((_f = (_e = result.value) == null ? void 0 : _e.scores) == null ? void 0 : _f.logic),
        f: common_vendor.p({
          type: "gift",
          size: "20"
        }),
        g: common_vendor.t((_h = (_g = result.value) == null ? void 0 : _g.scores) == null ? void 0 : _h.knowledge),
        h: common_vendor.p({
          type: "hand-up",
          size: "20"
        }),
        i: common_vendor.t((_j = (_i = result.value) == null ? void 0 : _i.scores) == null ? void 0 : _j.communication),
        j: common_vendor.p({
          type: "fire",
          size: "20"
        }),
        k: common_vendor.t((_l = (_k = result.value) == null ? void 0 : _k.scores) == null ? void 0 : _l.problemSolving),
        l: common_vendor.t((_n = (_m = result.value) == null ? void 0 : _m.evaluations) == null ? void 0 : _n.skillAssessment),
        m: common_vendor.t((_p = (_o = result.value) == null ? void 0 : _o.evaluations) == null ? void 0 : _p.aiFeedback),
        n: common_vendor.t((_r = (_q = result.value) == null ? void 0 : _q.evaluations) == null ? void 0 : _r.overall),
        o: common_vendor.o(onRefresh),
        p: common_vendor.o(onGoBack)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b615976f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/result/result.js.map
