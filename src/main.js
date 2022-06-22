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


// ========================================================
// 匯入 vee-validate 主套件
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// 匯入 vee-validate 相關規則
import AllRules from '@vee-validate/rules'
// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'
// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// 定義驗證規則
Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule])
})

// 設定 vee-validate 全域規則
configure({
    generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
    validateOnInput: true // 當輸入任何內容直接進行驗證
})

// 設定預設語系
setLocale('zh_TW')
// ========================================================

const app = createApp(App)



// 加到全域屬性下
app.config.globalProperties.$IsEnterDark = $IsEnterDark

// ==========================================================================

// 註冊 第一個值自定義
app.component('MainLoading', Loading)

// 表單註冊
app.component('UserForm', Form)
app.component('UserField', Field)
app.component('UserErrorMessage', ErrorMessage)

app.use(i18n)
app.use(i18n)
app.use(store)
app.use(router)
app.mount('#app')
