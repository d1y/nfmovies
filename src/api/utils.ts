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