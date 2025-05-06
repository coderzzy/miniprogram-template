Page({
  data: {    
    tabs: [],
    currentTab: 0,
  },

  onLoad() {
    const app = getApp()
    this.setData({
      tabs: app.globalData.tabs
    })
  },

  onShareAppMessage() {
    return {
      title: "这是标题",
      imageUrl: "/images/logo.jpg"
    };
  },
  
})