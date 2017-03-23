Page({
  data: {
    date: "2017-11-18"
  },
  bindDateChange: function (event) {
    this.setData({
      date: event.detail.value
    })
  },
  formSubmit: function (event) {
    console.log(event);
    wx.login({
      success: function (loginRes) {
        wx.request({
          url: 'http://localhost:8080/wxopen/wxtplmessage.php?code='
          + loginRes.code,
          data: {
            formId: event.detail.formId,
            formData: event.detail.value
          },
          method: 'POST',
          success: function (res) {
            console.log(res.data);
          }
        })
      }
    })
  }
})