var postData = require("../../../data/post-data.js");
var appInst = getApp();

Page({
  data: {
    music: false,
  },
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
      collection[id] = false;
      if (!col) {
        wx.setStorageSync("collection", collection);
      }
      this.setData({ collection: col });
    } else {
      var col = {};
      col[id] = false;
      wx.setStorageSync("collection", col);
      wx.setData({ collection: col[id] });
    }

    var src = postData.data[this.data.currentIndex];
    var backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.title = src.backgroud_music.title;
    backgroundAudioManager.epname = src.backgroud_music.epname;
    backgroundAudioManager.singer = src.backgroud_music.singer;
    backgroundAudioManager.coverImgUrl = src.backgroud_music.cover;
    backgroundAudioManager.src = src.backgroud_music.url;
  },

  onShow: function () {
    var backgroundAudioManager = wx.getBackgroundAudioManager();
    var that = this;
    backgroundAudioManager.onPlay(function () {
      that.setData({ music: true });
    });
    backgroundAudioManager.onPause(function () {
      that.setData({ music: false });
    });
  },

  onReady: function () {
    var mgr = wx.getBackgroundAudioManager();
    if (mgr.paused) {
      this.setData({ music: false });
    } else {
      this.setData({ music: true });
    }
  },

  onCollectionTap: function (event) {
    var col = wx.getStorageSync("collection");
    var collect = col[this.data.currentIndex];
    collect = !collect;
    col[this.data.currentIndex] = collect;
    wx.setStorageSync("collection", col);
    this.setData({ collection: collect });
    this.showToast(collect, "收藏");
  },

  showToast: function (col, key) {
    wx.showToast({
      title: col ? key + "成功" : key + "取消",
      duration: 1000,
      mask: false,
      success: (result) => {},
      fail: () => {},
      complete: () => {},
    });
  },

  onShareTap: function (event) {
    var itemList = ["分享到QQ", "分享到微信", "分享到微博"];
    wx.showActionSheet({
      itemList: itemList,
      itemColor: "#000000",
      success: (result) => {
        var i = result.tapIndex;
        this.showToast(true, itemList[i]);
      },
      fail: () => {},
      complete: () => {},
    });
  },

  onMusicTap: function () {
    var backgroundAudioManager = wx.getBackgroundAudioManager();
    if (backgroundAudioManager.paused) {
      backgroundAudioManager.play();
    } else {
      backgroundAudioManager.pause();
    }
  },
});
