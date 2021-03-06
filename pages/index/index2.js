var util = require("../../utils/util")
Component({

  lifetimes: {

    ready() {
      // console.log('ready')


      this.getAllTypes();

    }
  },

  pageLifetimes: {
    show() {

      wx.setNavigationBarTitle({
        title: 'My',
      })

      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },

  data: {
    tab_check: 0,
    tab_items: [],
    loading: true,
    hidden_main: true
  },
  methods: {
    tap_check1: function (params) {
      // console.log(params.detail)
      this.setData({
        tab_check: params.detail
      })



    },
    getAllTypes: function () {
      var that = this
      wx.request({
        url: "https://gank.io/api/v2/categories/Article",
        success: function (res) {
          console.log(res.data.data)
          that.setData({
            tab_items: res.data.data,
            loading: false,
            hidden_main: false,
          })


        }
      })
    }
  }
})