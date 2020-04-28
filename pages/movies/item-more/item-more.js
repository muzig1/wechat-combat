var appInst = getApp();
var util = require("../../../util/util.js");

// pages/movies/item-more/item-more.js
Page({
  /**
   * Page initial data
   */
  data: {},

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let typeList = ["Android", "Android", "Girl"];
    let category = options.category;
    this.data.category = category;
    let typ;
    switch (category) {
      case "GanHuo":
        this.data.navBarTitle = "干货";
        typ = typeList[0];
        break;
      case "Article":
        this.data.navBarTitle = "文章";
        typ = typeList[1];
        break;
      case "Girl":
        this.data.navBarTitle = "女孩";
        typ = typeList[2];
        break;
      default:
        console.log("[Warn] not implement category:" + category);
    }
    let url =
      appInst.gconf.gankURN +
      "data/category/" +
      category +
      "/type/" +
      typ +
      "/page/1/count/10";
    // var reqTask = wx.request({
    //   url: url,
    //   header: { "content-type": "application/json" },
    //   method: "GET",
    //   dataType: "json",
    //   responseType: "text",
    //   success: (result) => {
    //     wx.setStorageSync("more" + category, result.data);
    //   },
    //   fail: () => {},
    //   complete: () => {},
    // });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.navBarTitle,
      success: (result) => {},
      fail: () => {},
      complete: () => {},
    });

    let res = wx.getStorageSync("more" + this.data.category);
    this.setData({ res: res });
    console.log(this.data);
  },

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
