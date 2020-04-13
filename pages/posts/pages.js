var post_data = require("../../data/post_data.js");

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
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    console.log("on ready");
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    console.log("on show");
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
    console.log("on hide");
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {
    console.log("on unload");
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {
    console.log("on unload«pull down refresh");
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    console.log("on reach bottom");
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {
    console.log("on share app message");
  },

  onPostTap: function (event) {
    var index = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: "/pages/posts/post-detail/detail?id=" + index,
    });
  },
});
