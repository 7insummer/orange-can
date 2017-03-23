Page({
    onTapJump: function (event) {
        wx.switchTab({
            url: "../post/post",
            success: function () {
                console.log("jump success")
            },
            fail: function () {
                console.log("jump failed")
            },
            complete: function () {
                console.log("jump complete")
            }
        });
    },
    onUnload: function (event) {
        console.log("page is unload")
    },
    onHide: function (event) {
        console.log("page is hide")
    },
})