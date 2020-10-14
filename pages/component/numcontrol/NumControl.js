// pages/component/numcontrol/NumControl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nc_width: {
      type: String,
      value: '200rpx'
    },
    nc_tag: {
      type: String,
      value: '套'
    },
    step_value_str: {
      type: String,
      value: 1
    }
  },


  lifetimes: {

    ready() {
      console.log('ready ' + this.properties.step_value_str)
      var num1 = parseInt(this.properties.step_value_str)

      if (this.properties.step_value_str.indexOf('.') > 0) {
        //带小数点
        var num2 = parseFloat(this.properties.step_value_str)

        var arr=this.properties.step_value_str.split(".");

        console.log(num1 + "   " + num2 +"   "+arr[1]+"   "+arr[1].length)

        this.setData({
          real_step: num2,
          real_step_float:true,
          real_sttep_float_length:arr[1].length
        })

      } else {
        //整数
        this.setData({
          real_step: num1
        })
      }

    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    real_step: 1,
    value: 0,
    real_step_float:false,
    real_sttep_float_length:0
  },

  /**
   * 组件的方法列表
   */
  methods: {

    click_reduce() {
      console.log('reduce')
      this.num_action(-this.data.real_step)
    },
    click_add() {
      console.log('add')
      this.num_action(this.data.real_step)
    },
    num_action: function (extra_num) {
     
      var result_value =  parseFloat(this.data.value) + extra_num;
      if (result_value < 0) {
        console.log('error <0')
        return
      }
       
      this.setData({
        value: result_value.toFixed(this.data.real_step_float?this.data.real_sttep_float_length:0)
      })
    }
  }
})