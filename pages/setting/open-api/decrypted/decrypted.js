/************
 * 开放api的代码结果都以console.log的方式输出到控制台
 * 没有UI上的结果展示
 * 请开发者自行查看Console面板的输出结果
 * 
 * 获取用户加密信息
 */
Page({
  data: {},
  onTap: function () {
    wx.login({
      success: function (loginRes) {
        wx.getUserInfo({
          success: function (userRes) {
            wx.request({
              url: "http://localhost:8080/wxopen/wxdecryptuserinfo.php",
              data: {
                code: loginRes.code,
                encryptedData: userRes.encryptedData,
                iv: userRes.iv
              },
              success: function (res) {
                console.log(res.data);
              }
            })
          }
        })
      }
    })
  }
})