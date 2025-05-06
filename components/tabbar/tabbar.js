Component({
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    currentTab: {
      type: Number,
      value: 0
    }
  },
  methods: {
    switchTab(e) {
      const index = e.currentTarget.dataset.index
      const app = getApp()
      app.handleTabSwitch(index)
    }
  }
})