/**
 * tips: 还没有官方的 `d.ts` 文件
 * link: https://www.quanzhan.co/luch-request/guide/3.x
 * mua~ 造轮子好累的说呢, 所以用现成的鸭~
 */

import { baseApi } from "@/config"

/**
 * 请求方法
 */
type axiosMethod = "GET" | "POST" | "OPTIONS"

/**
 * [Request] 类型
 */
interface axiosRequestData {
  /**
   * 请求方法
   */
  method: axiosMethod

  /**
   * 请求链接
   */
  url: string

  /**
   * 传递的数据(post)
   */
  data: any

  /**
   * 拼接的 `url`
   */
  params: any

}

interface axiosTypeFace {
  /**
   * 设置接口类型
   */
  setConfig: (any: any) => any

  /**
   * 请求
   */
  request: (any: axiosRequestData) => any

  /**
   * `get` 请求
   */
  get: (any: any) => any

  /**
   * `post` 请求
   */
  post: (any: any) => any

}

const axios = require('luch-request').default

const http = new axios({
  baseURL: baseApi,
  header: {
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"
  }
}) as axiosTypeFace

export default http