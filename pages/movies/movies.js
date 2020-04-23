// pages/movies/movies.js
Page({
  /**
   * Page initial data
   */
  data: {
    items: [
      "/images/icon/star.png",
      "/images/icon/star.png",
      "/images/icon/star.png",
      "/images/icon/star-anti.png",
      "/images/icon/star-anti.png",
    ],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var self = this;
    // var reqTask = wx.request({
    //   url: "https://gank.io/api/v2/random/category/Girl/type/Girl/count/10",
    //   header: { "content-type": "application/json" },
    //   method: "GET",
    //   dataType: "json",
    //   responseType: "text",
    //   success: (result) => {
    //     console.log(result);
    //     wx.setStorageSync("grils", result.data);
    //   },
    //   fail: () => {},
    //   complete: () => {},
    // });
    var girls = wx.getStorageSync("grils");
    this.setData({ line1: { line: girls.data.slice(0, 3) } });
    this.setData({ line2: { line: girls.data.slice(4, 7) } });
    this.setData({ line3: { line: girls.data.slice(8, 11) } });
    console.log(this.data);
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {},

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {},

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {},
});
