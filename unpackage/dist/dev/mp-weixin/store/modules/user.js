"use strict";
const common_vendor = require("../../common/vendor.js");
const useUserStore = common_vendor.defineStore(
  "AI-User",
  () => {
    const userInfo = common_vendor.ref({
      id: "20256751",
      username: "糖包子",
      avatar: "/static/images/avatar.jpeg"
    });
    const setUserInfo = (val) => {
      userInfo.value = val;
    };
    const clearUserInfo = () => {
      userInfo.value = void 0;
    };
    return {
      userInfo,
      setUserInfo,
      clearUserInfo
    };
  }
);
exports.useUserStore = useUserStore;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/store/modules/user.js.map
