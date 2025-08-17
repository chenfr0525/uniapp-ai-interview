"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const mock_services_mockApi = require("../../mock/services/mockApi.js");
if (!Math) {
  ContentBox();
}
const ContentBox = () => "../../components/ContentBox.js";
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    const {
      safeAreaInsets
    } = common_vendor.index.getSystemInfoSync();
    const navItem = [
      {
        key: 1,
        title: "简单"
      },
      {
        key: 2,
        title: "中等"
      },
      {
        key: 3,
        title: "困难"
      }
    ];
    const activeItem = common_vendor.ref(1);
    const onTabChangeItem = async (val) => {
      activeItem.value = val;
      await getCategoryData();
    };
    const CategoryList = common_vendor.ref([]);
    const getCategoryData = async () => {
      const res = await mock_services_mockApi.mockApi.getCategoriesByDifficulty(activeItem.value);
      CategoryList.value = res;
    };
    common_vendor.onLoad(async () => {
      getCategoryData();
    });
    return (_ctx, _cache) => {
      return {
        a: `calc(${common_vendor.unref(safeAreaInsets).top}px + 60rpx)`,
        b: common_assets._imports_0$1,
        c: `calc(${common_vendor.unref(safeAreaInsets).top}px + -50rpx)`,
        d: common_vendor.unref(safeAreaInsets).top + "px",
        e: `calc(${common_vendor.unref(safeAreaInsets).top}px + 240rpx)`,
        f: common_vendor.f(navItem, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.o(($event) => onTabChangeItem(item.key), item.key),
            c: item.key,
            d: activeItem.value === item.key ? 1 : ""
          };
        }),
        g: common_vendor.f(CategoryList.value, (item, index, i0) => {
          return {
            a: item.id,
            b: item.id,
            c: "6bcfa975-0-" + i0,
            d: common_vendor.p({
              num: item.num,
              id: item.id,
              index,
              title: item.name,
              content: item.description
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6bcfa975"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/classify/classify.js.map
