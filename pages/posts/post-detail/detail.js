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
      col[id] = false;
      wx.setStorageSync("collection", col);
      wx.setData({ collection: col[id] });
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
    // properties(Read only)(duration,currentTime,paused,buffered)
    // properties(src(m4a, aac, mp3, wav),startTime,title,epname,singer,coverImgUrl,webUrl,protocol)
    var backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.title = "此时此刻";
    backgroundAudioManager.epname = "此时此刻";
    backgroundAudioManager.singer = "许巍";
    backgroundAudioManager.coverImgUrl =
      "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000";
    // 设置了 src 之后会自动播放
    backgroundAudioManager.src =
      "http://music.163.com/song/media/outer/url?id=108220.mp3";

    if (backgroundAudioManager.paused) {
      backgroundAudioManager.play();
    } else {
      backgroundAudioManager.pause();
    }
  },
});
