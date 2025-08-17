"use strict";
const common_vendor = require("../../common/vendor.js");
const mock_services_mockApi = require("../../mock/services/mockApi.js");
require("../../store/index.js");
const store_modules_user = require("../../store/modules/user.js");
if (!Math) {
  (NavBar + DetailItem)();
}
const NavBar = () => "../../components/NavBar.js";
const DetailItem = () => "../../components/DetailItem.js";
const _sfc_main = {
  __name: "detailList",
  setup(__props) {
    const isDone = common_vendor.ref(false);
    const userStore = store_modules_user.useUserStore();
    const doneQuesList = common_vendor.ref([]);
    const noDoQuesList = common_vendor.ref([]);
    const QuesList = common_vendor.computed(() => {
      return isDone.value ? doneQuesList.value : noDoQuesList.value;
    });
    const getQuestionList = async (id) => {
      const res = await mock_services_mockApi.mockApi.getQuestions(userStore.userInfo.id, id);
      doneQuesList.value = res.completed;
      noDoQuesList.value = res.remaining;
    };
    common_vendor.onLoad(async (e) => {
      getQuestionList(e.id);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "详情"
        }),
        b: common_vendor.t(doneQuesList.value.length + noDoQuesList.value.length),
        c: common_vendor.t(doneQuesList.value.length),
        d: common_vendor.o(($event) => isDone.value = false),
        e: !isDone.value ? 1 : "",
        f: common_vendor.o(($event) => isDone.value = true),
        g: isDone.value ? 1 : "",
        h: common_vendor.f(QuesList.value, (item, k0, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "3e67522b-1-" + i0,
            d: common_vendor.p({
              title: item.content,
              id: item.id
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3e67522b"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detailList/detailList.js.map
