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
  
}