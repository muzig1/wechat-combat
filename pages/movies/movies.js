var appInst = getApp();

// pages/movies/movies.js
Page({
  /**
   * Page initial data
   */
  data: {
    open:true,
  },

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
      data.data.forEach(elem => { 
        if (elem.title.length > 10) {
          elem.title = elem.title.substring(0, 10) + "..."
        }
      });
      lines.push({ line: data.data, t: category });
      console.log(data);
    }
    this.setData({ category: lines });

    let res = wx.getStorageSync("moreGirl");
    res.data.forEach(elem => { 
      if (elem.title.length > 10) {
        elem.title = elem.title.substring(0, 10) + "..."
      }
    });
  this.setData({ res: res });
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

  onBindFocus:function() {
    this.setData({open:false})
  },

  onCancelTap: function(e) {
    this.CloseSearchPanel(e)
  },

  onBindBlur: function(e) {
    let v = e.detail.value
    if (!v) {
      this.CloseSearchPanel(e)
      return
    }
    this.onSearchReq(e.detail.value)
  },

  CloseSearchPanel: function(e) {
    this.setData({open:true})
    e.detail.value = ""
  },

  onSearchReq: function(content) {
    // let url = "https://gank.io/api/v2/search/android/category/GanHuo/type/Android/page/1/count/10"
    // var reqTask = wx.request({
    //   url: url,
    //   header: {'content-type':'application/json'},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: (result)=>{
    //     wx.setStorageSync("search", result.data);
    //     console.log(result.data)
    //   },
    //   fail: ()=>{},
    //   complete: ()=>{}
    // });

    let res = wx.getStorageSync("search")
    this.setData({res:res})
  }
});
