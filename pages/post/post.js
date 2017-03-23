import { DBPost } from '../../db/DBPost.js';

Page({
  data: {
  },
  onLoad: function () {
    var dbPost = new DBPost();
    this.setData({
      postList: dbPost.getAllPostData()
    });
  },

  onTapToDetail(event) {
    var postId = event.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  },

  // target 和currentTarget
  // target指的是当前点击的组件 和currentTarget 指的是事件捕获的组件
  // target这里指的是image，而currentTarget指的是swiper
  onSwiperTap: function (event) {
    var postId = event.target.dataset.postId;
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  }
})