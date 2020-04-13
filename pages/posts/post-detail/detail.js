var postData = require("../../../data/post_data.js");

Page({
  onLoad: function (args) {
    var id = args.id;
    var data = postData.data[id];
    this.setData({ ...data });
  },
});
