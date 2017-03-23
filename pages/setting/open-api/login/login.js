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
        console.log('code:'+res.code);
        wx.request({
          url: "http://localhost:8080/wxopen/wxlogin.php",
          data: {
            code: res.code
          },
          success: function (res) {
            console.log(res.data);
          }
        })
      }
    })
  }
})