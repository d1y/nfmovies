<template>
  <view>

    <view class="cu-bar">
      <view class="action">
        <text class="cuIcon-titles" :class="`text-${ lineColor }`" />
        <text class="text-xl text-bold">{{ title }}</text>
      </view>
      <view v-if="showMore" class="action">
        {{ '更多' }} <text class="cuIcon-right" />
      </view>
    </view>

    <scroll-view scroll-x class="nav" scroll-with-animation>
      <view class="grid col-3 diy-grid">
        <view
          class="cu-item grid-card-item"
          v-for="(item,index) in data"
          :key="index"
          :style="colStyle"
        >
          <view class="bg-img bg-mask shadow-blur"
            :style="{
              minWidth: `100%`,
              backgroundImage: `url(${ item.cover })`,
              height: `320upx`,
              borderRadius: `24upx`,
            }"
            @tap="handleClickItem(false, item, index)"
          ></view>
          <view
            :style="{ lineHeight: `60rpx` }"
            @tap="handleClickItem(true, item, index)" class="text-cut"
          >
            {{ item.title }}
          </view>
          <slot name="default" :row="item" />
        </view>
      </view>
    </scroll-view>
    
  </view>
</template>
<script>
/**
* 卡片
* @desc 卡片
* @author d1y<chenhonzhou@gmail.com>
* @date 2020年05月25日17:22:43
* @param {String} [title]    - 标题
* @param {Array} [data]  - 列表数据
* @param {String} [lineColor] - 线条的颜色
* @example 调用示例
*  <card :title="'你好'" :data="[]" :lineColor="'blue'"></glass>
 */

export default {
  name: "x-card",
  props: {
    title: {
      required: true,
      type: String
    },
    data: {
      type: Array,
      default: () => []
    },
    lineColor: {
      type: String,
      default: 'green'
    },
    showMore: {
      type: String,
      default: false
    }
  },
  data() {
    return {
      currentData: {
        title: '',
        cover: '',
        author: '',
        desc: ``,
      },
      currentModalFlag: false
    }
  },
  computed: {
    colStyle() {
      const col = "lg"
      // const col = this.cardCol
      let w
      switch (col) {
        case "lg":
          w = "50.444%"
          break;
        case "xl":
          w = "93.33%"
          break;
        case "df":
        default:
          w = "33.333%"
      }
      return {
        minWidth: w
      }
    }
  },
  methods: {
    handleClickItem(flag, item, index) {
      if (flag) {
        // TODO 预览内容
        this.currentData = item
        this.currentModalFlag = true
      } else {
        // TODO 跳转
        const { id } = item
        router.push(`detail/index`, {
          id
        })
      }
      this.$emit('click', {
        flag,
        item,
        index
      })
    }
  }
};
</script>

<style scoped>
.diy-grid {
  flex-wrap: nowrap;
}
.grid-card-item {
  margin: unset;
  height: auto;
}
</style>