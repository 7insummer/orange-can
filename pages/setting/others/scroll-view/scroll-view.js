var order = ['red', 'yellow', 'blue', 'green', 'red',
'SlateGray','GoldEnrod']
Page({
  data: {
    toView: 'green',
    scrollTop: 0
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
    this.setData({
      scrollTop:0
    })
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
