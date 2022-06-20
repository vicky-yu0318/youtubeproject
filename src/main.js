import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import i18n from './i18n'
import $IsEnterDark from '@/methods/IsEnterDark'
const app = createApp(App)

// 加到全域屬性下
app.config.globalProperties.$IsEnterDark = $IsEnterDark

app.use(i18n)
app.use(i18n)
app.use(store)
app.use(router)
app.mount('#app')
