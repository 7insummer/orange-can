/************
 * 开放api的代码结果都以console.log的方式输出到控制台
 * 没有UI上的结果展示
 * 请开发者自行查看Console面板的输出结果
 */
Page({
  data: {},
  onTap: function () {
    wx.login({
      success: function (res) {
        console.log('code:' + res.code);
        wx.request({
          url: "http://127.0.0.1:8080/wxopen/wxpay.php",
          data: {
            code: res.code
          },
          success: function (res) {
            var preData = res.data;
            console.log(preData);
            wx.requestPayment({
              timeStamp: preData.timeStamp.toString(),
              nonceStr: preData.nonceStr,
              package: preData.package,
              signType: preData.signType,
              paySign: preData.paySign,
              success: function(res){
                console.log(res);
              },
              fail: function(error) {
                 console.log(res);
              }
            })
          }
        })
      }
    })
  }
})