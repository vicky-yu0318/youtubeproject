<template>
  <div
    class="dark-mode font-sans bg-white dark:bg-gray-400 transition duration-1000"
  >
    <div class="w-[80%] mx-auto">
      <button
        @click="changeMode(['bg-black', 'text-gray-300'])"
        class="mb-5 w-12 h-5 rounded-2xl text-xl bg-white shadow flex justify-start items-center"
      >
        <div
          ref="refBtnMode"
          class="w-6 h-6 rounded-full bg-yellow-500 text-white flex justify-center items-center transform transition duration-500 ease-linear translate-x-6"
        >
          <!-- 要使用translate 一定要加transform -->
          <!-- sun -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 hidden mode-sun"
            ref="svgSun"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
           <!-- :class="{ hidden: isDarkMode}" -->
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            />
          </svg>
          <!-- moon -->
          <svg
            ref="svgMoon"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 hidden mode-moon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <!-- :class="{ hidden: !isDarkMode}" -->
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </button>
      <!-- 目標物 -->
      <!-- m-[200px] mt-10同時寫 第一個會被蓋掉 -->
      <!-- w-1/3 不用搭配flex -->
      <!-- 先跑data(預設值很重要！) 畫面才會跑mounted -->
      {{isDarkMode}}
      <div
        class="text-white dark:text-black bg-blue-900 dark:bg-gray-200 mt-10 p-3 rounded w-1/2 transition duration-1000"
      >
        <h2 class="border-b-2 mb-2 pb-1">Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
          quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit blanditiis enim voluptatem, quod eum asperiores quos! Minima
          ipsa cupiditate sunt?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
      isSun: false
    };
  },
  methods: {
    checkMode() {
      let localIsDark = JSON.parse(localStorage.getItem("storageIsDark"));
      this.isDarkMode === localIsDark;
      // 如果我上回最後一次進入頁面時是暗黑模式，請直接給暗黑主題
      if (localIsDark) {
        // 下方＝針對主題
        document.documentElement.classList.add("dark");
        // 下方＝針對按鈕
        this.$refs.refBtnMode.classList.remove(
          "bg-yellow-500",
          "translate-x-6"
        );
        this.$refs.refBtnMode.classList.add("bg-black");
        // 下方＝針對圖片
        this.$refs.svgMoon.classList.add('active')
        this.$refs.svgMoon.classList.remove('active')
      } else {
        // 下方＝針對主題
        document.documentElement.classList.remove("dark");
        // 下方＝針對按鈕
        this.$refs.refBtnMode.classList.add(
          "bg-gray-200",
        );
        this.$refs.refBtnMode.classList.add("bg-black");
        // 下方＝針對圖片
        this.$refs.svgMoon.classList.add('active')
        this.$refs.svgMoon.classList.remove('active')

      }
    },
    changeMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem("storageIsDark", this.isDarkMode);
      // dark模式
      if (this.isDarkMode) {
        // 下方＝針對主題
        document.documentElement.classList.add("dark");
        // 下方＝針對按鈕
        this.$refs.refBtnMode.classList.remove(
          "bg-yellow-500",
          "translate-x-6"
        );
        this.$refs.refBtnMode.classList.add("bg-black");
        // 下方＝針對圖片
        this.$refs.svgMoon.classList.add('active')
        this.$refs.svgMoon.classList.add('active')

        // 白天模式
      } else {
        document.documentElement.classList.remove("dark");
        this.$refs.refBtnMode.classList.remove("bg-black");
        this.$refs.refBtnMode.classList.add("bg-yellow-500", "translate-x-6");
         // 下方＝針對圖片
        this.$refs.svgSun.classList.add('active')
        this.$refs.svgSun.classList.remove('active')
      }
    },
  },
  mounted() {
    this.checkMode();
  },
};
</script>
<style>
.mode-sun.active {
    display: block !important
}
.mode-moon.active {
    display: block !important
}
</style>
