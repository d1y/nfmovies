import { pageIndexApiData } from '.';

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