// pages/movies/item-detail/item-detail.js
Page({
  /**
   * Page initial data
   */
  data: {
    cover_img: "/images/bill/tianqizhizi.webp",
    like_num: 1233,
    comment_num: 123,
    name: "天气之子 天気の子",
    location: "日本",
    date: "2019",
    elem: {
      views: 300,
      direct: "新海诚",
      filmmakers: ["醍醐虎汰朗", "森七菜", "倍赏千惠子", "本田翼"],
      type: ["爱情", "动画", "奇幻"],
    },
    brief_intro:
      "高一那年夏天，帆高（醍醐虎汰朗配音）离开位在离岛的家乡，独自一人来到东京，拮据的生活迫使他不得不找份工作，最后来到一间专门出版奇怪超自然刊物的出版社担任写手。不久，东京开始下起连日大雨，仿佛暗示着帆高不顺遂的未来，在这座繁忙城市里到处取材的帆高邂逅了与弟弟相依为命，不可思议的美少女阳菜（森七菜配音）。「等等就会放晴了喔。」阳菜这样告诉着帆高，不久，头顶的乌云逐渐散去，耀眼的阳光洒落街道……原来，阳菜拥有「改变天气」的奇妙能力……",
    film_makers: [
      "/images/avatar/1.png",
      "/images/avatar/2.png",
      "/images/avatar/3.png",
      "/images/avatar/4.png",
      "/images/avatar/5.png",
    ],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {},

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

  scroll(e) {},
});
