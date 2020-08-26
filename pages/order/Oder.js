// pages/order/Oder.js

// const createRecycleContext = require('../../miniprogram_npm/miniprogram-recycle-view')
var common=require('../common/common.js')
const createRecycleContext = require('miniprogram-recycle-view')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    tab_items: ['我的订单', '待支付', '待确定', '已支付'],
    items: [1, 2, 3, 4, 5, 6],
    height: 456,
    width: 100,
    loading:true
  },

  onChange(event) {
    // console.log(event)
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // let width=wx.getSystemInfoSync().screenWidth;
    // console.log(width)
    let height = common.rpx2px(450);
    let width = wx.getSystemInfoSync().windowWidth;
    this.setData({ height: height, width: width });

    console.log(width+"   "+height)
    

    var ctx = createRecycleContext({
      id: 'recycleId',
      dataKey: 'recycleList',
      page: this,
      itemSize: { // 这个参数也可以直接传下面定义的this.itemSizeFunc函数
        width:width,
        height: height
      }
    })


    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        sid: i,
        name: "监控点" + i,
        value: (i % 10) + "℃",
        status: "在线",
      });
    }
    //将数据append到列表
    ctx.append(arr)

    setTimeout(() => {
      
      this.setData({
        loading:false
      })
    }, 2000);

  },
  itemSizeFunc: function (item, idx) {
    console.log(' itemSizeFunc'+this.data.width)
    return {
      width: this.data.width,
      height: this.data.height
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})