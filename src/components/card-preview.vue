<template>
  <view>
    <!-- 信息 -->
    <view class="flex solid-bottom padding-sm justify-between bg-white" @tap="handleTap">
      <view class="flex justify-start">
        <view class="bg-img bg-cover-box bg-mask radius shadow-blur"
          :style="{ backgroundImage: `url(${ data.cover })` }"
        />
        <view class="padding-left-sm padding-right-sm text-left">
          <view class="text-df text-black margin-bottom" :style="{
            maxWidth: `42vw`
          }">{{ data.title }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    /**
     * 数据
     */
    data: {
      required: true,
      type: Object
    },
  },
  methods: {
    handleTap() {
      this.$emit("click", this.data)
    }
  }
})
</script>

<style scoped>
.bg-cover-box {
  width: 200rpx;
  max-width: 50vw;
  height: 240upx;
  padding: 12rpx;
}
</style>