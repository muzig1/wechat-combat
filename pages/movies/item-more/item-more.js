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
    this.setData({
      getDataByCategoryReq: {
        category: category,
        type: typ,
        page: 1,
      },
    });
    this.getDataByCategoryReq();
  },

  getDataByCategoryReq: function () {
    wx.showNavigationBarLoading();
    let req = this.data.getDataByCategoryReq;
    let url =
      appInst.gconf.gankURN +
      "data/category/" +
      req.category +
      "/type/" +
      req.type +
      "/page/" +
      req.page +
      "/count/12";
    // let that = this;
    // var reqTask = wx.request({
    //   url: url,
    //   header: { "content-type": "application/json" },
    //   method: "GET",
    //   dataType: "json",
    //   responseType: "text",
    //   success: (result) => {
    //     let res = wx.getStorageSync("more" + req.category);
    //     if (res) {
    //       if (!res.data) {
    //         res.data = [];
    //       }
    //       res.data = res.data.concat(result.data.data);
    //     } else {
    //       res = result.data;
    //     }
    //     wx.setStorageSync("more" + req.category, res);
    //     that.setData({ res: res });
    //   },
    //   fail: () => {},
    //   complete: () => {
    //     wx.hideNavigationBarLoading();
    //   },
    // });
    let res = wx.getStorageSync("more" + req.category);
      res.data.forEach(elem => { 
        if (elem.title.length > 10) {
          elem.title = elem.title.substring(0, 10) + "..."
        }
      });
    this.setData({ res: res });
    wx.hideNavigationBarLoading();
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
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
    console.log("hide");
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {
    // let req = this.data.getDataByCategoryReq;
    // wx.setStorageSync("more" + req.category, {});
    console.log("unload");
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {},

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    let req = this.data.getDataByCategoryReq;
    req.page++;
    if (req.page >= 5) {
      return;
    }
    this.data.getDataByCategoryReq = req;
    this.getDataByCategoryReq();
    console.log("onPullDownRefresh");
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {},

  onPullDownRefresh: function () {
    console.log("refresh");
  },

  onItemTap: function (event) {
    let item = event.currentTarget.dataset.item;
    console.log(item);
  },
});
