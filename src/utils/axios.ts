import { baseApi } from "@/config"

interface axiosTypeFace {
  /**
   * 设置接口类型
   */
  setConfig: (any: any) => any
}

const axios = require('luch-request')

const http = new axios({
  baseURL: baseApi
})

export default http