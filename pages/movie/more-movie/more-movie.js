var app = getApp()
var util = require('../../../util/util.js')
Page({
  data: {
    movies: []
  },
  onLoad: function (options) {
    var category = options.category;
    this.data.navigateTitle = category;
    var dataUrl = "";
    switch (category) {
      case "正在热映":
        dataUrl = app.globalData.doubanBase +
          "/v2/movie/in_theaters";
        break;
      case "即将上映":
        dataUrl = app.globalData.doubanBase +
          "/v2/movie/coming_soon";
        break;
      case "豆瓣Top250":
        dataUrl = app.globalData.doubanBase + "/v2/movie/top250";
        break;
    }
    this.data.requestUrl = dataUrl;
    util.http(dataUrl, this.processDoubanData)
  },

  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.navigateTitle
    });
    wx.showNavigationBarLoading()
  },

  processDoubanData: function (moviesDouban) {
    var movies = [];
    for (var idx in moviesDouban.subjects) {
      var subject = moviesDouban.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
      }
      var temp = {
        stars: util.convertToStarsArray(subject.rating.stars),
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id
      }
      movies.push(temp)
    }
    var totalMovies = []
    totalMovies = this.data.movies.concat(movies);
    this.setData({
      movies: totalMovies
    });
    wx.stopPullDownRefresh();
    //隐藏loading状态
    wx.hideNavigationBarLoading();
  },

  onPullDownRefresh: function (event) {
    var refreshUrl = this.data.requestUrl +
      "?star=0&count=20";

    //刷新页面后将页面所有初始化参数恢复到初始值
    this.data.movies = [];
    util.http(refreshUrl, this.processDoubanData);
    //显示loading状态
    wx.showNavigationBarLoading();
  },

  onReachBottom: function (event) {
    var totalCount = this.data.movies.length;
    //拼接下一组数据的URL
    var nextUrl = this.data.requestUrl +
      "?start=" + totalCount + "&count=20";
    util.http(nextUrl, this.processDoubanData)
    //显示loading状态
    wx.showNavigationBarLoading();
  },

  onMovieTap: function (event) {
    var movieId = event.currentTarget.dataset.movieId;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?id=' + movieId
    })
  },
});