// pages/component/item01/Item01.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      item:Object
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
    scroll_item_tap: function (event) {

      var url = event.currentTarget.dataset['index'].url

      // console.log('-----'+url)
      this.triggerEvent('customevent1', url)

  
      // wx.miniProgram.navigateTo({
      //   url: url
      // })

    }
  }
})
