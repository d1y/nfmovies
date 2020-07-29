<template>
	<view>

		<cu-topbar :diy="true" :bg-color="topbarColorClass">
			<view class="flex flex-wrap-box margin-bottom-lg margin-top-sm">
				<input
          name="input"
          class="input_box text-black margin-left-sm margin-right-sm shadow-lg radius padding-left-lg margin-top-sm"
          :placeholder="pyText"
          v-model="searchVal"
          :maxlength="24"
        />
			</view>
		</cu-topbar>

		<swiper v-if="isHots" :current="currentHotIndex" @change="handleChangeHotIndex" class="card-swiper" :class="true?'square-dot':'round-dot'">
			<swiper-item v-for="(item,index) in data.hots" :key="index" :class=" currentHotIndex == index ?'cur':''">
				<view class="swiper-item bg-mask" :style="{
					backgroundImage: `url(${ item.cover })`
				}">
					<view class="banner-title">
						{{ item.title }}
					</view>
					<view class="score-bar radius">
						{{ item.score }}
					</view>
				</view>
			</swiper-item>
		</swiper>

		<view class="wrapper">
			<block v-for="(item, index) in cards" :key="index">
				<card :title="item.title" :showMore="item.api" :data="item.lists" />
			</block>
		</view>

		<view class="wrapper margin-sm">
			<view class="text-center text-gray">
				{{ '爷也是有底线的..' }}
			</view>
		</view>

	</view>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '@/components/card.vue'
import CuTopbar from '@/components/cu-topbar.vue'
import { getIndxData } from '@/api/app'
import { indexPageDataInterface } from '@/interface/pages'
import { baseSingleMovieInterface, pageIndexApiCardItemData } from '@/interface'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
	components: {
		Card,
		CuTopbar,
	},
	data(): indexPageDataInterface {
		return {
			data: {
				cards: [],
				hots: []
			},
			currentHotIndex: 0,
			pyText: "搜索: 电影名, 作者",
			searchVal: "",
			scrollTop: 0
		}
	},
	computed: {
		...mapState('cache', [
			'index'
		]),
		/**
		 * 是否展示轮播
		 */
		isHots(): boolean {
			return !!this.data.hots.length
		},
		hots(): baseSingleMovieInterface[] {
			return this.data.hots
		},
		cards(): pageIndexApiCardItemData[] {
			return this.data.cards
		},
		topbarColorClass(): string {
			const top = this.scrollTop
			const isTop = top <= 0
			return isTop ? "" : "bg-white"
		}
	},
	async onLoad() {
		const ctx = this.index
		if (!ctx) this.getData()
		else this.data = ctx
	},
	onPageScroll({ scrollTop }) {
		this.scrollTop = scrollTop
	},
	async onPullDownRefresh() {
		await this.getData()
		uni.stopPullDownRefresh()
	},
	methods: {
		...mapMutations('cache', [
			'CHANGE_INDEX_DATA'
		]),
		handleChangeHotIndex(e: any) {
			const { current } = e.detail
			this.currentHotIndex = current
		},
		async getData() {
			const data = await getIndxData()
			this.data = data
			this.CHANGE_INDEX_DATA(data)
		}
	}
})
</script>

<style scoped>
.banner-title {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 6px 12px;
	color: #fff;
	background: rgba(0, 0, 0, .6);
}
.score-bar {
	position: absolute;
	top: 0;
	right: 0;
	background: rgba(0, 0, 0, .6);
	padding: 0 6px;
}
.flex-wrap-box {
  width: 100%;
}
.input_box {
  width: 100%;
  height: 68rpx;
  background: var(--greyLight);
  display: flex;
  box-sizing: unset;
}
.input_box:-ms-input-placeholder {
    color: #a9a9a9;
}/* Internet Explorer 10+ */

.input_box::-webkit-input-placeholder {
    color: #a9a9a9;
}/* WebKit browsers */

.input_box::-moz-placeholder {
    color: #a9a9a9;
}/* Mozilla Firefox 4 to 18 */

.input_box:-moz-placeholder {
    color: #a9a9a9;
}/* Mozilla Firefox 19+ */
</style>

<style>
.card-swiper uni-swiper-item .swiper-item {
	overflow: auto;
	padding: 6px 4px;
  padding-left: 12px;
  background: rgba(0, 0, 0, .6);
  color: #fff;
}
</style>