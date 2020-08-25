// pages/component/tabs/Tabs.js

var common=require('../../common/common.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTabIndex: 0,
    scrollleft: 0,
    _tab_width_px: 0,
    _center_offleft: 0,
  },


  lifetimes: {
    ready() {

      console.log('---------ready')
      var rpx = 200;
      var px=common.rpx2px(rpx)

      var center_offleft = wx.getSystemInfoSync().windowWidth / 2

      console.log('200rpx -> px ' + px)
      this.setData({
        _tab_width_px: px,
        _center_offleft: center_offleft
      })
    }
  },

  pageLifetimes: {

    show: function () {

      console.log('tabs --- show ')
    },
    resizeBy: function (size) {
      console.log('tabs --- resizeBy ')
    }
  },

  observers: {
    'items': function (items) {
      console.log('items update ')

      this.triggerEvent('tap_check', this.properties.items[this.data.currentTabIndex])

    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tap_check: function (event) {

      console.log(event.currentTarget.offsetLeft  +'   '+this.data._center_offleft)
      var current_tab_offleft = event.currentTarget.offsetLeft + this.data._tab_width_px / 2

      if (current_tab_offleft > this.data._center_offleft) {
        console.log('偏右 开始左移动到center size '+(current_tab_offleft-this.data._center_offleft))
        this.setData({
          scrollleft: current_tab_offleft - this.data._center_offleft
        })
      } else {
        this.setData({
          scrollleft: 0
        })
      }
      // console.log(event)
      this.setData({
        currentTabIndex: event.currentTarget.dataset.index
      })

      // console.log(this.properties.items[this.data.currentTabIndex])
      this.triggerEvent('tap_check', this.properties.items[this.data.currentTabIndex])
    }
  }
})