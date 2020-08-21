Component({

  data: {
    items: [],
    net_banners: [],
    banner_text: '',
    ganhuo_items: []
  },


  lifetimes: {
    attached: function () {
      console.log('attached')
    },
    moved: function () {
      console.log('moved')
    },
    detached: function () {
      console.log('detached')
    },
    ready: function () {
      console.log('ready')

      this.getBaseData();
    }
  },

  methods: {
    getBaseData: function () {
      console.log("getBaseData")
      var that = this
      wx.request({
        url: 'https://gank.io/api/v2/banners',
        success: function (res) {
          // console.log(res.data.data) // 服务器回包信息
          that.setData({
            net_banners: res.data.data,
            banner_text: res.data.data[0].title
          })
        }
      })

      wx.request({
        url: 'https://gank.io/api/v2/data/category/GanHuo/type/Android/page/1/count/20',
        success: function (res) {
          // console.log(res.data.data)

          that.setData({
            ganhuo_items: res.data.data
          })
        }
      })
    },

    scroll_item_tap: function (event) {
      var url = event.currentTarget.dataset['index'].url

      wx.navigateTo({
        url: '../web_h5/Web_H5?url='+url,
      })
      // wx.miniProgram.navigateTo({
      //   url: url
      // })
    }

  },

  pageLifetimes: {
    show() {

      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }

      var tempitems = [100]
      for (var i = 0; i < 100; i++) {
        tempitems[i] = i;
      }
      this.setData({
        items: tempitems
      })
    }
  },



})