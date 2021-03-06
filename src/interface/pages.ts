import { pageIndexApiData, pageDetailApiData, pageSearchApiData } from '.';

/**
 * 详情页接口
 */
export interface detailPageDataInterface {
  /**
   * 视频 `url`
   */
  videoSrc: string

  TabCur: number

  scrollLeft: number


  data: pageDetailApiData | null
}

/**
 * 首页 `data` 类型
 */
export interface indexPageDataInterface {

  /**
   * 获取到的数据
   */
  data: pageIndexApiData

  /**
   * `hot` 轮播的 `index`
   */
  currentHotIndex: number

  /**
   * 搜索框提示内容
   */
  pyText: string

  /**
   * 搜索内容
   */
  searchVal: string

  /**
   * 滚动长度
   */
  scrollTop: number
  
}

/**
 * 搜索
 */
export interface searchPageDataInterface {
  /**
   * 搜索的 `key`
   */
  searchKey: string
  /**
   * 数据
   */
  data: pageSearchApiData
}