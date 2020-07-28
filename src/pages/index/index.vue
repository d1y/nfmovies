<template>
	<view>

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
import { getIndxData } from '@/api/app'
import { indexPageDataInterface } from '@/interface/pages'
import { baseSingleMovieInterface, pageIndexApiCardItemData } from '@/interface'
export default Vue.extend({
	components: {
		Card
	},
	data(): indexPageDataInterface {
		return {
			data: {
				cards: [],
				hots: []
			},
			currentHotIndex: 0
		}
	},
	computed: {
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
		}
	},
	async onLoad() {
		this.data = await getIndxData()
	},
	methods: {
		handleChangeHotIndex(e: any) {
			const { current } = e.detail
			this.currentHotIndex = current
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