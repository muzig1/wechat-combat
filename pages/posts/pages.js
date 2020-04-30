var post_data = require("../../data/post-data.js");

// pages/posts/pages.js
Page({
  /**
   * Page initial data
   */
  data: {
    // 单项数据绑定
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      content: post_data.data,
    });

    // var self = this;
    // var reqTask = wx.request({
    //   url: "https://gank.io/api/v2/banners",
    //   data: {},
    //   header: { "content-type": "application/json" },
    //   method: "GET",
    //   success: (result) => {
    //     wx.setStorageSync("swipers", result.data);
    //   },
    //   fail: () => {
    //     console.log("fail");
    //   },
    //   complete: () => {
    //     console.log("complete");
    //   },
    // });
    let swiper = wx.getStorageSync("swipers");
    this.setData({ swipers: swiper });

    console.log(this.data);
  },

  onPostTap: function (event) {
    var index = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: "/pages/posts/post-detail/detail?id=" + index,
    });
  },

  onSwiperTap: function (event) {
    var postID = event.target.dataset.postid;
    wx.navigateTo({
      url: "/pages/posts/post-detail/detail?id=" + postID,
    });
  },
});
