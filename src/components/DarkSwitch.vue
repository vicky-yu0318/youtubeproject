<template>
  <div class="bg-blue-200 p-5 text-blue-900 dark:bg-black dark:text-white">
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, distinctio.</p>
  </div>
  <div>
    <button
      class="px-4 py-2 rounded-full bg-white border-gray-400 border-2"
      @click="changeTheme('light')"
    >
      日間模式
      <i class="fas fa-sun text-yellow-500"></i>
    </button>
    <button
      class="px-4 py-2 rounded-full bg-gray-700 border-gray-700 border-2 text-white"
      @click="changeTheme('dark')"
    >
      夜間模式
      <i class="fas fa-moon text-yellow-500"></i>
    </button>
  </div>
  <!-- 一顆按鈕情形 -->
  一顆：
  <div>
    <button
      class="px-4 py-2 rounded-full bg-white border-gray-400 border-2"
      @click="themeSwitch"
    >
      <i class="fas fa-sun text-yellow-500" ref="refSun"></i>
      <i class="fas fa-moon text-yellow-500" ref="refMoon"></i>
    </button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, onMounted, computed } from 'vue'

export default {
    setup() {
        // ===================================================
        // option api => this.$refs.refSun.classList.add('hidden')
        // composition ref寫法
        // const refSun = ref(null)
        // const refMoon = ref(null)
        // onMounted(() => {
        //   refSun.value.addEventListener('click', () => refSun.value.classList.toggle('hidden'))
        //   refMoon.value.addEventListener('click', () => refMoon.value.classList.toggle('hidden'))
        // })
        // ===================================================

        // 兩顆按鈕
        const changeTheme = (mode) => {
          // 深色
          if (mode === 'dark') {
            console.log('dark');
            // 全域加dark class
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
          // 淺色
          } else {
            console.log('light');
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'light')
          }
        }

        // ===========================================================
        // 一顆按鈕
        // const moonIcon = document.querySelector('moonIcon')
        // const sunIcon = document.querySelector('sunIcon')
        const refSun = ref(null)
        const refMoon = ref(null)

        const store = useStore()
        const isDark = computed(() => store.state.isDark);

        // 初始化主題 (要拿store的東西 或 ref東西 需使用.value)
        const themeCheck = () => {
          if (isDark.value === 'dark') {
            document.documentElement.classList.add('dark')
            refMoon.value.classList.add('hidden')
            return
          }
          refSun.value.classList.add('hidden')
        }
        onMounted(() => {
          themeCheck()
        })


        // 按鈕呈現      初始化 Or click 觸發 (初始化看狀況而有所不同)
        const iconToggle = () => {
          refSun.value.classList.toggle('hidden')
          refMoon.value.classList.toggle('hidden')
        }
        // onMounted(() => {
        //   refSun.value.addEventListener('click', iconToggle)
        //   refMoon.value.addEventListener('click', iconToggle)
        // })


        // 轉換主題
        // classList統一由dark控制
        const themeSwitch = () => {
          // 按白天按鈕 原來是深色=>改白天
          if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            // 不能透過單頁增localstorage / 需要commit 到store
            // localStorage.setItem('maintheme', 'light')
            iconToggle()
            store.commit('SET_DARK', 'light')
            return
          }
          //  按深色按鈕 原來是白天=>改深色
          document.documentElement.classList.add('dark')
          // localStorage.setItem('maintheme', 'dark')
          store.commit('SET_DARK', 'dark')
          iconToggle()
        }

        return {
          changeTheme,
          refSun,
          refMoon,

          isDark,
          iconToggle,
          themeSwitch
        }
    }

}
</script>
