// app.js
App({
  onLaunch() {
    
  },
  globalData: {
    tabs: ['tab1', 'tab2']
  },
  handleTabSwitch(index) {
    const url = index === 0 ? '/pages/page1/page1' : '/pages/page2/page2'
    wx.redirectTo({ url })
  }
})
