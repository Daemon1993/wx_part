// pages/order/item/order_item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: Object
  },


  lifetimes: {
    ready: function () {
      // console.log('order item ready')
    },
  },

  pageLifetimes: {
    show: function () {
      // console.log('order item show')
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    over: function () {
      // console.log('over')

      // var query = wx.createSelectorQuery().in(this);
      // query.select('.main').boundingClientRect().exec((res) => {
      //   console.log(res)
      // });

    }
  }
})