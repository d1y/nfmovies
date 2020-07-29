import createPersistedState from "vuex-persistedstate";

export default ()=> createPersistedState({
  key: "vuexNfmovies",
  storage: {
    getItem: key => uni.getStorageSync(key),
    setItem: (key, value) => uni.setStorageSync(key, value),
    removeItem: key => uni.removeStorageSync(key)
  }
})