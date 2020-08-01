import axios from '@/utils/axios'
import * as middleware from '@/share/api/middleware'
import { pageIndexApiData, pageDetailApiData, pageSearchApiData } from '@/interface'
import { createDetailIDApi, creatSearchApi } from './utils'

/**
 * 获取首页地址
 */
export const getIndxData = async (): Promise<pageIndexApiData> => {
  try {
    const res = await axios.get(`/`) 
    const data = middleware.indexData(res.data)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * 获取详情
 */
export const getDetail = async (url: string): Promise<pageDetailApiData> => {
  try {
    if (url[0] != '/') {
      url = createDetailIDApi(url)
    }
    const res = await axios.get(url)
    const data = middleware.detailData(res.data)
    return data
  } catch (error) {
    throw new Error(error)
  }
  
}

export const getVideoURL = async (api: string): Promise<string> => {
  try {
    const res = await axios.get(api)
    const embed = middleware.videoEmbedURL(res.data)
    const checkHttpReg = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/
    if (checkHttpReg.test(embed)) return embed
    return ""
  } catch (error) {
    throw new Error(error)
  }
}

  try {
    const api = creatSearchApi(keyword)
    const res = await axios.get(api)
    return middleware.searchData(res.data)
  } catch (error) {
    throw new Error(error)
  }
}