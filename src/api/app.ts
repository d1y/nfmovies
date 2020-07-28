import axios from '@/utils/axios'
import * as middleware from '@/share/api/middleware'
import { pageIndexApiData } from '@/interface'

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