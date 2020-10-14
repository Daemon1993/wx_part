const common = require("../common/common")

Component({

  data: {
    items: [],
    net_banners: [],
    banner_text: '',
    ganhuo_items: [],
    loading: true,
    hiddenMain: true,
    isShow: false,
    dynamic: 'aaaaa',
    sv_height: '100%'
  },


  lifetimes: {
    attached() {
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



      common.getScrollViewHeight('l-s-b',110,(sr_height)=>{
        console.log(sr_height)
        this.setData({
          sv_height:sr_height+'px'
        })
      })

      this.getBaseData();
    }

  },

  methods: {
    getBaseData() {
      console.log("getBaseData")
      var that = this
      wx.request({
        url: 'https://gank.io/api/v2/banners',
        success: function (res) {
          // console.log(res.data.data) // 服务器回包信息
          that.setData({
            net_banners: res.data.data,
            banner_text: res.data.data[0].title,
            loading: false,
          })
        }
      })

      wx.request({
        url: 'https://gank.io/api/v2/data/category/GanHuo/type/Android/page/1/count/20',
        success: function (res) {
          // console.log(res.data.data)

          that.setData({
            ganhuo_items: res.data.data,
            hiddenMain: true,
          })
        }
      })
    },

    scroll_item_tap: function (url) {
      // console.log(url.detail)
      wx.navigateTo({
        url: '../web_h5/Web_H5?url=' + url.detail,
      })
    },
    go2Oder: function (event) {
        wx.navigateTo({
          url: '../order/Oder',
        })
      }

      ,
    changeShow: function (event) {
      var that = this;
      this.setData({
        isShow: !that.data.isShow
      })
    }
  },

  pageLifetimes: {
    show() {



      console.log('index Component show ' + this.data.dynamic)
      wx.setNavigationBarTitle({
        title: '首页',
      })


      // if (typeof this.getTabBar === 'function' &&
      //   this.getTabBar()) {
      //   this.getTabBar().setData({
      //     selected: 0
      //   })
      // }

    },
    hiden() {
      console.log('index Component hiden')
    }
  },



})