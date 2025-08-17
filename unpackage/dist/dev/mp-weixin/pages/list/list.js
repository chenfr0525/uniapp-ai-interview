"use strict";
const common_vendor = require("../../common/vendor.js");
const mock_services_mockApi = require("../../mock/services/mockApi.js");
if (!Math) {
  (NavBar + ContentBox)();
}
const NavBar = () => "../../components/NavBar.js";
const ContentBox = () => "../../components/ContentBox.js";
const _sfc_main = {
  __name: "list",
  setup(__props) {
    const title = common_vendor.ref("");
    const categoryList = common_vendor.ref([]);
    const getCategoryList = async (keyword) => {
      const res = await mock_services_mockApi.mockApi.searchCategories(keyword);
      categoryList.value = res;
    };
    common_vendor.onLoad(async (e) => {
      title.value = e.keyword;
      await getCategoryList(e.keyword);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: title.value
        }),
        b: categoryList.value.length > 0
      }, categoryList.value.length > 0 ? {
        c: common_vendor.f(categoryList.value, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "98a9e0b2-1-" + i0,
            d: common_vendor.p({
              num: item.num,
              index,
              id: item.id,
              title: item.name,
              content: item.description
            })
          };
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-98a9e0b2"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/list/list.js.map
