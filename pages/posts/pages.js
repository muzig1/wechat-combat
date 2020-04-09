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
    var content = [
      {
        avatar_img: "/images/avatar/1.png",
        date: "Nov 20 2020",
        post_img: "/images/post/crab.png",
        content:
          "一叶落便知秋意浓，即使江南的绿色褪色之期晚了几许，南飞的大雁也会在天空一会儿排成一字，一会儿排成人字，秋天真的来了，中秋真的来了，国庆真的来了。\n一叶落便知秋意浓，即使江南的绿色褪色之期晚了几许，南飞的大雁也会在天空一会儿排成一字，一会儿排成人字，秋天真的来了，中秋真的来了，国庆真的来了。",
        collection_num: 79,
        view_num: 200,
        post_img_condition: true,
      },
      {
        avatar_img: "/images/avatar/1.png",
        date: "Nov 20 2020",
        post_img: "/images/post/crab.png",
        content:
          "一叶落便知秋意浓，即使江南的绿色褪色之期晚了几许，南飞的大雁也会在天空一会儿排成一字，一会儿排成人字，秋天真的来了，中秋真的来了，国庆真的来了。\n一叶落便知秋意浓，即使江南的绿色褪色之期晚了几许，南飞的大雁也会在天空一会儿排成一字，一会儿排成人字，秋天真的来了，中秋真的来了，国庆真的来了。",
        collection_num: 79,
        view_num: 200,
        post_img_condition: true,
      },
    ];
    this.setData({
      content: content,
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
});
