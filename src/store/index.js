import { createStore } from 'vuex'

// store composition是原寫法 Ｘreturn
export default createStore({
  strict: true,
  // 嚴格模式 => 如果非同步事件寫在mutation 會報錯
  state: {
    locales: ['tw', 'us', 'cn'],
    locale: 'tw',
    coins: ['TWD', 'USD', 'CNY'],
    coin: 'TWD',
    dark: 'false'
  },
  getters: {
  },
  // 改變state
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
      state.dark = payload
      if ( process.client ) {
        localStorage.setItem("dark", state.dark)
      }
    }, 
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
