var postData = require("../../../data/post_data.js");

Page({
  onLoad: function (args) {
    var id = args.id;
    var data = postData.data[id];
    this.setData({ ...data });
    this.setData({
      currentIndex: id,
    });

    // 更新缓存
    var collection = wx.getStorageSync("collection");
    if (collection) {
      var col = collection[id];
      this.setData({ collection: col });
    } else {
      var col = {};
      col[id] = true;
      wx.setStorageSync("collection", col);
      wx.setData({ collection: col[id] });
    }
  },

  onCollectionTap: function (event) {
    console.log("ss");
    var col = wx.getStorageSync("collection");
    var collect = col[this.data.currentIndex];
    collect = !collect;
    col[this.data.currentIndex] = collect;
    wx.setStorageSync("collection", col);
    this.setData({ collection: collect });
  },

  onShareTap: function (event) {},
});
