// pages/component/listview/ListView1.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    select_tap:function(event){
    
      this.triggerEvent('select_tap', this.properties.items[event.currentTarget.dataset.index])
    }
  },
  lifetimes:{
    attached:function(){
      console.log("listview1 attached "+this.properties.items)
    }
  }
})
