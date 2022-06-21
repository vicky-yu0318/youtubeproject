import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css' 
import i18n from './i18n'
import $IsEnterDark from '@/methods/IsEnterDark'

// 加入loading套件
// https://www.npmjs.com/package/vue-loading-overlay //import內容參考文件
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
const app = createApp(App)

// 加到全域屬性下
app.config.globalProperties.$IsEnterDark = $IsEnterDark

// 註冊 第一個值自定義
app.component('MainLoading', Loading)

app.use(i18n)
app.use(i18n)
app.use(store)
app.use(router)
app.mount('#app')
