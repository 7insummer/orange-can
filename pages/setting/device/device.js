Page({
  data: {
    phoneInfo: [],
    softInfo: [],
    screenInfo: [],
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          phoneInfo: [
            { key: "手机型号", val: res.model },
            { key: "手机语言", val: res.language }
          ],
          softInfo: [
            { key: "微信版本", val: res.version },
            { key: "操作系统版本", val: res.system },
            { key: "客户端平台", val: res.platform }
          ],
          screenInfo: [
            { key: "屏幕像素比", val: res.pixelRatio },
            { key: "屏幕尺寸", val: res.windowWidth + '×' + res.windowHeight }
          ]
        });
      }
    });
  }
});