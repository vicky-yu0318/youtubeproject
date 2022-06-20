import { createStore } from 'vuex'

export default createStore({
  strict: false,
  // 嚴格模式 => 如果非同步事件寫在mutation 會報錯
  // 寬鬆模式 => 解決[vuex] do not mutate vuex store state outside mutation handlers.問題
  state: {
    locales: ['tw', 'us', 'cn'],
    locale: 'tw',
    coins: ['TWD', 'USD', 'CNY'],
    coin: 'TWD',
    isDark: localStorage.getItem('maintheme'),
    windowWidth: 0,
    isMobile: false,
    isTablet: false,
  },
  // JSON.parse(localStorage.getItem("maintheme"))
  // isDark = localStorage.getItem('maintheme')

  getters: {
  },
  mutations: {
    SET_LANG (state, locale) {
      if (state.locales.includes(locale)) {
        state.locale = locale
      }
    },
    SET_COIN (state, coin) {
      if (state.coins.includes(coin)) {
        state.coin = coin
      }
    },
    SET_DARK (state, payload) {
      state.isDark = payload
      // if ( process.client ) {
        localStorage.setItem("maintheme", state.isDark)
      // }
    },
    SET_WINDOWWIDTH(state, data) {
      state.windowWidth = data
    },
    SET_ISMOBILE(state, data) {
      state.isMobile = data[0]
      state.isTablet = data[1]
    }
  },
  actions: {
    // 固定的context = {state, commit, dispatch, getters}
    // updateLoading (context, payload) {
    //   context.commit('LOADING', payload)
    // }
  },
  modules: {
  }
})
