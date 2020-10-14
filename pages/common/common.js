function rpx2px(rpx) {
  var systemInfo = wx.getSystemInfoSync();
  var px = rpx / 750 * systemInfo.windowWidth;
  return px
}


function getScrollViewHeight(top_view_id,scroll_view_margin_rpx, callback) {
  var query = wx.createSelectorQuery();
  query.select('#' + top_view_id).boundingClientRect()
  query.selectViewport().scrollOffset()
  query.exec(function (res) {
    wx.getSystemInfo({
      success: (result) => {
        var sr_heigth = result.windowHeight - res[0].height - rpx2px(scroll_view_margin_rpx);
        callback(sr_heigth)
      },
    })

  })
}

module.exports = {
  rpx2px: rpx2px,
  getScrollViewHeight:getScrollViewHeight
}