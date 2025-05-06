Component({
  properties: {
    currentYear: {
      type: Number,
      value: new Date().getFullYear()
    }
  },
  methods: {
    openFeedback() {
      wx.openEmbeddedMiniProgram({
        appId: '',
        path: ''
      });
    }
  }
})