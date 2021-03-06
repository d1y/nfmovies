import { baseApi } from '@/config'

/**
 * 将`path`设置为完整路径
 * @param path 图片路径
 */
export const createFullImgURL = (path: string): string => {
  if (path[0] == '/') return `${ baseApi }${path}`
  return path
}

/**
 * 创建详情页接口 `api`(通过 `mainID`)
 * @param id `id`
 */
export const createDetailIDApi = (id: string)=> {
  return `/detail/?${ id }.html`
}

/**
 * 解密详情页 `id`
 * @param url `url`
 */
export const decodeDetailIDApi = (url: string): string => {
  try {
    return url.split('/')[2].split('.')[0].slice(1)
  } catch (error) {
    return ""
  }
}

/**
 * 创建视频 `id`
 * @param id `id`
 */
export const createVideoIDApi = (id: string)=> {
  return `/video/?${ id }.html`
}

/**
 * 创建搜索接口
 * @param keyword 搜索关键字
 * @param page 分页
 */
export const creatSearchApi = (keyword: string, page: number = 1)=> {
  return `/search.php?page=${ page }&searchword=${ keyword }`
}