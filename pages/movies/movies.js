// pages/movies/movies.js
Page({
  /**
   * Page initial data
   */
  data: {},

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
    console.log(girls);
    for (let i in girls.data) {
      girls.data[i].mystars = [0, 0, 0, 0, 0];
    }
    this.setData({ line1: { line: girls.data.slice(0, 3), t: "Article" } });
    this.setData({ line2: { line: girls.data.slice(3, 6), t: "GanHuo" } });
    this.setData({ line3: { line: girls.data.slice(6, 9), t: "Girl" } });
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

  onMoreTap: function (event) {
    var category = event.currentTarget.dataset.category;
    wx.navigateTo({
      url: "/pages/movies/item-more/item-more?category=" + category,
      success: (result) => {},
      fail: () => {},
      complete: () => {},
    });
  },
});
