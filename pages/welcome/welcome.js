Page({
  onTap: function () {
    // wx.navigateTo({
    //   url: "/pages/posts/pages",
    // });
    wx.redirectTo({
      url: "/pages/posts/pages",
      success: (result) => {},
      fail: () => {},
      complete: () => {},
    });
    console.log("tap");
  },

  onTTap: function () {
    console.log("ttap");
  },

  onSubTap: function () {
    console.log("subTap");
  },
});
