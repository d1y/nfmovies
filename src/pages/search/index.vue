<template>
  <view class="wrapper">

    <cu-topbar :diy="true" :bg-color="'bg-white'">
			<view class="flex flex-wrap-box margin-bottom-lg margin-top-sm">
				<input
          name="input"
          class="input_box text-black margin-left-sm margin-right-sm shadow-lg radius padding-left-lg margin-top-sm"
          :placeholder="'请搜索'"
          v-model="searchKey"
          :maxlength="24"
					@confirm="handleConfirmSearch"
        />
			</view>
		</cu-topbar>

    <block v-if="data && data.lists && data.lists.length">
      <!-- {{ data.lists.length }} -->
      <block v-for="(item, index) in data.lists" :key="index">
        <card-preview @click="handleClickItem" :data="item" />
      </block>
    </block>
    <view class="text-xxl text-gray text-center margin-top-xl" v-else>
      <view>{{ '啥也没有~' }}</view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { getSearch } from '@/api/app'
import { searchPageDataInterface } from '@/interface/pages'
import cardPreview from '@/components/card-preview.vue'
import CuTopbar from '@/components/cu-topbar.vue'
import { pageSearchApiData, baseSingleMovieInterface } from '@/interface'
import { decodeDetailIDApi } from '@/api/utils'
export default Vue.extend({
  components: {
    cardPreview,
    CuTopbar
  },
  data(): searchPageDataInterface {
    return {
      searchKey: "",
      data: {
        current: 0,
        total: 0,
        isNext: false,
        lists: [],
        next: 0
      }
    }
  },
  onLoad(options: any) {
    const { keyword } = options
    if (keyword) {
      this.searchKey = keyword
      this.handleSearch()
    }
  },
  async onPullDownRefresh() {
    this.data.lists = []
    await this.handleSearch(1)
    uni.stopPullDownRefresh()
  },
  onReachBottom() {
    const x = this.data
    if (x.isNext) {
      this.handleSearch(x.next)
    }
  },
  methods: {
    async handleSearch(page: number = 1) {
      const ctx = await getSearch(this.searchKey, page)
      console.log(ctx)
      let data = this.data
      let oldLists = this.data.lists
      if (!data) {
        this.data = ctx
      } else {
        const newLists = ctx.lists
        this.data.current = ctx.current
        this.data.total = ctx.total
        this.data.isNext = ctx.isNext
        this.data.next = ctx.next
        const now = [ ...oldLists, ...newLists ]
        this.data.lists = now
      }
    },
    handleConfirmSearch() {
      this.data.lists = []
      this.handleSearch(1)
    },
    handleClickItem(data: baseSingleMovieInterface) {
      const id = decodeDetailIDApi(data.api)
      uni.navigateTo({ url: `/pages/detail/index?id=${id}` })
    }
  }
})
</script>

<style>

</style>