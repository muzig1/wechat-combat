var gconf = {
  appName: "小程序",
};

function AppName() {
  return gconf.appName;
}

module.exports = {
  gconf: gconf,
  AppName: AppName,
};
