/**
 * 单个影视作品(基础)
 */
export interface baseSingleMovieInterface {

  /**
   * 主`id`
   */
  mainID?: string

  /**
   * 生成的 `api`
   */
  api: string

  /**
   * 封面
   */
  cover: string

  /**
   * 标题
   */
  title: string

  /**
   * 评分
   */
  score: string

  /**
   * 演员表(主演员)
   */
  starring: string[]

  /**
   * 视频类型(不明觉厉)
   * (HD无字 | HD) 之类的
   */
  tips: string

}

export interface pageIndexApiCardItemData {
  /**
   * 标题
   */
  title: string

  /**
   * `link` 接口地址
   */
  api: string

  /**
   * 卡片数组
   */
  lists: baseSingleMovieInterface[]

}

/**
 * 首页数据
 */
export interface pageIndexApiData {

  /**
   * `hots` 热度首页榜(鸭, 暂时这么说吧, 人家也不知道怎么说呢)
   */
  hots: baseSingleMovieInterface[]

  /**
   * 卡片
   */
  cards: pageIndexApiCardItemData[]

}

/**
 * 所有播放镜像
 */
export interface pageDataApiDataMirror {
  /**
   * 标题
   */
  title: string
  /**
   * `hash`
   */
  hash: string
}

export interface pageDataApiDataPv {
  /**
   * hash
   */
  hash: string
  /**
   * 分集列表
   */
  lists: pageDataApiDataPvItem[]
}

/**
 * 分集
 */
export interface pageDataApiDataPvItem {
  /**
   * 标题
   */
  title: string
  /**
   * `api` 接口
   */
  api: string
}

export interface pageDetailApiData {
  /**
   * 电影标题
   */
  title: string
  /**
   * 评分
   */
  score: string
  /**
   * 镜像
   */
  mirrors: pageDataApiDataMirror[]
  /**
   * 所有分集
   */
  pvs: pageDataApiDataPv[]
}