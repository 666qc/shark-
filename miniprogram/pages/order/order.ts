// pages/order/order.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    display:'',
    isRuleTrue:false,
    // showModal: false, //false关闭模态框  true开启模态框
    AddClass:true
    },

    tapHan(e: any){
      this.setData({
        AddClass:e.target.dataset.index
      })
      console.log(e.target.dataset.index);
      
      console.log(111);
      
      // console.log(e.target.dataset.index);
    },
  showRule: function () {
    this.setData({
     isRuleTrue: true,
      display: "block"
    })
    },
    //留在页面
   hideRule: function () {
    this.setData({
     isRuleTrue: false,
     display: "none"
    })
    },
    //确认离开
    okk(){
      wx.navigateBack()
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})