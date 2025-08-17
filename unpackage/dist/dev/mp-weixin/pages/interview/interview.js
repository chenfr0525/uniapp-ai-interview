"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
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
  __name: "interview",
  setup(__props) {
    const question = common_vendor.ref({
      id: 1,
      title: ""
    });
    const isRecording = common_vendor.ref(false);
    const countdown = common_vendor.ref("1:00");
    let timer = null;
    const startRecording = () => {
      isRecording.value = true;
      startCountdown();
      common_vendor.index.__f__("log", "at pages/interview/interview.vue:28", "开始录音");
    };
    const stopRecording = () => {
      isRecording.value = false;
      clearCountdown();
      common_vendor.index.__f__("log", "at pages/interview/interview.vue:39", "结束录音");
      setTimeout(() => {
        common_vendor.index.redirectTo({
          url: `/pages/result/result?questionId=${question.value.id}`
          // 替换为你的结果页路径
        });
      }, 500);
    };
    const startCountdown = () => {
      let seconds = 60;
      timer = setInterval(() => {
        seconds--;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        countdown.value = `${mins}:${secs < 10 ? "0" + secs : secs}`;
        if (seconds <= 0) {
          stopRecording();
        }
      }, 1e3);
    };
    const clearCountdown = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      countdown.value = "1:00";
    };
    const handleTouchMove = (e) => {
      if (isRecording.value) {
        e.preventDefault();
      }
    };
    common_vendor.onLoad(async (e) => {
      question.value.id = e.id;
      const res = await mock_services_mockApi.mockApi.getQuestionById(question.value.id);
      question.value.title = res.content;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0,
        b: common_vendor.t(question.value.title),
        c: common_vendor.t(isRecording.value ? "我正在认真听你说话" : "长按话筒开始面试！"),
        d: isRecording.value
      }, isRecording.value ? {
        e: common_vendor.t(countdown.value)
      } : {}, {
        f: common_vendor.p({
          type: isRecording.value ? "mic-filled" : "mic",
          size: "60"
        }),
        g: isRecording.value ? 1 : "",
        h: common_vendor.o(startRecording),
        i: common_vendor.o(stopRecording),
        j: common_vendor.o(stopRecording),
        k: common_vendor.o(handleTouchMove)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-99492b0e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/interview/interview.js.map
