<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  mpType: "app",
  onLaunch: function () {
    uni.getSystemInfo({
      success: function (e) {
        const bar = e.statusBarHeight as number
        // #ifndef MP
        Vue.prototype.StatusBar = bar
        if (e.platform == "android") {
          Vue.prototype.CustomBar = bar + 50
        } else {
          Vue.prototype.CustomBar = bar + 45
        }
        // #endif
        const titleBar = e.titleBarHeight as number
        // #ifdef MP-WEIXIN
        Vue.prototype.StatusBar = bar
        let custom = wx.getMenuButtonBoundingClientRect()
        Vue.prototype.Custom = custom
        Vue.prototype.CustomBar = custom.bottom + custom.top - bar
        // #endif
        // #ifdef MP-ALIPAY
        Vue.prototype.StatusBar = bar
        Vue.prototype.CustomBar = bar + titleBar
        // #endif
      },
    })
  },
  onShow() {
    
  },
  onHide() {
    
  },
})
</script>

<style>
@import url("../node_modules/colorui/colorui/main.css");
@import url("../node_modules/colorui/colorui/icon.css");
</style>