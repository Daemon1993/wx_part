

function rpx2px(rpx){
  var systemInfo = wx.getSystemInfoSync();
  var px = rpx / 750 * systemInfo.windowWidth;
  return px
}

module.exports.rpx2px=rpx2px