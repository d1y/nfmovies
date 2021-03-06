<template>
	<scroll-view :scroll-y="true">
    <video v-if="videoSrc" custom-cache="false" :page-gesture="true" :enable-progress-gesture="true" object-fit="cover" :enable-play-gesture="true" :vslide-gesture="true" :vslide-gesture-in-fullscreen="true" :controls="true" :show-center-play-btn="true" :style="videoEleStyle" :src="videoSrc" :poster="coverPoster"></video>
    <view class="padding-lg flex">
      <view class="text-xl margin-right-sm">{{ title }}</view>
      <view class="cu-tag bg-cyan radius" v-if="data && data.score">{{ data.score }}</view>
    </view>
    <view class="player" v-if="data && data.mirrors">
      <scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
        <view class="cu-item"
          :class="index==TabCur?'text-green cur':''"
          v-for="(item,index) in data.mirrors"
          :key="index"
          @tap="tabSelect"
          :data-id="index"
        >
          {{ item['title'] }}
        </view>
      </scroll-view>
      <view class="grid margin-bottom-xs margin-top text-center bg-gray col-3" v-if="data && data.pvs">
        <view class="padding-xs margin-bottom-sm" v-for="(item, index) in currentPvs" :key="index">
          <view
            class="shadow bg-cyan padding-sm radius dark-remove flex align-center justify-center"
            :style="{ position: `relative`, height: `100%` }"
            @tap="handleClickPv(item['api'])"
          >
            {{ item['title'] }}
          </view>
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script lang="ts">
import Vue from 'vue'
import { detailPageDataInterface } from '@/interface/pages'
import csstype from 'csstype'
import { getDetail, getVideoURL } from '@/api/app'
import { pageDetailApiData, pageDataApiDataPv, pageDataApiDataPvItem } from '@/interface'
export default Vue.extend({
	data(): detailPageDataInterface {
    return {
      videoSrc: '',
      TabCur: 0,
      scrollLeft: 0,
      data: null
    }
  },
  computed: {
    videoEleStyle(): csstype.Properties {
      const ctx = uni.getSystemInfoSync()
      let h = ctx.windowHeight || 0
      h = h * .333
      return {
        width: `100%`,
        height: `${ h }px`
      }
    },
    /**
     * 标题
     */
    title(): string {
      const data = this.data
      if (!data) return ""
      const title = data.title
      if (title) {
        uni.setNavigationBarTitle({ title })
        return title
      }
      return ""
    },
    /**
     * 封面
     */
    coverPoster(): string {
      return ""
    },
    currentPvs(): pageDataApiDataPvItem[] {
      const data = this.data as pageDetailApiData
      const curr = this.TabCur
      const currHash = data.mirrors[curr].hash
      const now = data.pvs.find(item=> item.hash == currHash)
      if (now) return now.lists
      return []
    }
  },
  watch: {
    videoSrc(newVal) {
      uni.showToast({ title: "已重新设置播放地址" })
    }
  },
  onLoad(options: any) {
    const { title, id } = options
    this.getData(id || "54430")
    if (title) uni.setNavigationBarTitle({ title })
  },
  methods: {
    tabSelect(e: any) {
      this.TabCur = e.currentTarget.dataset.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
    },
    async getData(id: string) {
      try {
        const data = await getDetail(id)
        this.data = data
      } catch (error) {
        throw new Error(error)
      }
    },
    async handleClickPv(api: string) {
      try {
        const url = await getVideoURL(api) 
        if (!url) uni.showToast({
          title: "该源貌似不可用",
          icon: 'none'
        })
        this.videoSrc = url
      } catch (error) {
        throw new Error(error)
      }
    }
  }
})
</script>

<style lang="css">

</style>