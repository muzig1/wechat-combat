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
  },
});
