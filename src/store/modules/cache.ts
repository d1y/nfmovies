import { cacheInterface } from '../types'
import { MutationTree } from 'vuex'
import { pageIndexApiData } from '@/interface'

const state: cacheInterface = {
  index: null
}

const mutations: MutationTree<cacheInterface> = {
  /**
   * 修改 `index` 数据
   */
  CHANGE_INDEX_DATA(state, data: pageIndexApiData) {
    state.index = data
  },
}

export default {
  state,
  mutations,
  namespaced: true
}