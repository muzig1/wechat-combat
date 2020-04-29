var appInst = getApp();

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
    var categoryList = ["Article", "GanHuo", "Girl"];
    this.data.categoryList = categoryList;
    var typeList = ["Android", "Flutter", "Girl"];

    let lines = [];
    for (let i in categoryList) {
      let category = categoryList[i];
      // let reqTask = wx.request({
      //   url:
      //     appInst.gconf.gankURN +
      //     "random/category/" +
      //     category +
      //     "/type/" +
      //     typeList[i] +
      //     "/count/3",
      //   header: { "content-type": "application/json" },
      //   method: "GET",
      //   dataType: "json",
      //   responseType: "text",
      //   success: (result) => {
      //     console.log(result.data);
      //     wx.setStorageSync(category, result.data);
      //   },
      //   fail: () => {},
      //   complete: () => {},
      // });
      let data = wx.getStorageSync(category);
      lines.push({ line: data.data, t: category });
      console.log(data);
    }
    this.setData({ category: lines });
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
