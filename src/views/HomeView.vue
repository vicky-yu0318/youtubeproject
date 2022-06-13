<template>
  <div class="total font-google capitalize">
    <!-- 因nav不在header中 建議高寫死 -->
    <!-- <div :style="`background-color: ${userThemeColor}`"></div> -->
    <header
      class="bg-custcolor-primary opacity-100 text-white py-5 fixed right-0 left-0 z-50 h-[94px]"
    >
      <div class="w-[90%] md:w-[80%] mx-auto flex justify-between items-center">
        <a href="" class="flex items-center text-4xl">
          <h1>{{ title }}</h1>
        </a>
        <div class="menu space-x-6 flex items-center">
          <a
            href=""
            class="border-[3px] border-cyan-500 py-3 px-6 hover:border-yellow-700 cursor-pointer transition duration-[1000ms] ease-linear hidden md:block"
            >{{ $t('header.login') }}</a
          >
          <a href="" class="hidden md:block active:text-blue-600">sign up</a>
          <button class="btn-main hidden md:block">按鈕</button>
        </div>
        <!-- hamburger -->
        <!-- hidden別下在svg圖上 -->
        <div
          id="btn-burger"
          class="md:hidden cursor-pointer"
          @click="showNav = !showNav"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </header>
    <!-- 先給好container 再切塊 -->
    <!-- px-[10%]也可 -->
    <!-- <div class="w-[90%] md:w-[80%] mx-auto pt-[20%] md:pt-[15%] lg:pt-[10%]"> -->
    <div class="grid md:grid-cols-3">
      <!-- nav 1/3-->
      <!-- 因為nav寬較section窄 所以使用％會不一樣 建議在外包一層統一 -->
      <div
        class="md:col-span-1 pt-0 md:pt-[94px] pl-[calc(100vw*0.05)] md:pl-[calc(100vw*0.1)]"
      >
        <!-- pl-[calc(100vw*0.05)] md:pl-[calc(100vw*0.1)] -->
        <!-- nav-container-90 md:nav-container-80 -->
        <nav
          class="text-black md:flex md:flex-col items-center md:items-end z-40 md:static fixed top-[94px] bottom-0 right-0 bg-blue-400 md:bg-transparent w-[50%] md:w-auto px-4 pb-4 md:px-0 md:pb-0 hidden show-nav transition animate-appear md:bg-slate-200"
          :class="{ active: showNav }"
        >
          <!-- 不能同時寫兩個class  :class="{'active': showNav} -->
          <!-- pl-[calc(100-50%)] -->
          <!-- without space -->
          <li
            class="w-[100%] md:w-[80%] text-white md:text-black border-b-blue-900 border-b-[3px] md:border-b-0 py-2"
          >
            <a
              href=""
              @click.prevent="listActiveItem = 'home'"
              :class="{ active: listActiveItem === 'home' }"
              class="block text-xl font-bold md:border-r-8 border-transparent pr-4 cursor-pointer"
            >
              <svg
                class="w-7 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="{2}"
              >
                <!-- 不用cdn 因爲svg -->
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              home
            </a>
          </li>
          <li
            class="w-[100%] md:w-[80%] text-white md:text-black border-b-blue-900 border-b-[3px] md:border-b-0 py-2"
          >
            <a
              @click="listActiveItem = 'contact'"
              :class="{ active: listActiveItem === 'contact' }"
              class="block text-xl font-bold md:border-r-8 border-transparent pr-4 cursor-pointer"
            >
              <svg
                class="w-7 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="{2}"
              >
                <!-- 不用cdn 因爲svg -->
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              contact</a
            >
          </li>
          <li
            class="w-[100%] md:w-[80%] text-white md:text-black border-b-blue-900 border-b-[3px] md:border-b-0 py-2"
          >
            <a
              @click="listActiveItem = 'about'"
              :class="{ active: listActiveItem === 'about' }"
              class="block text-xl font-bold md:border-r-8 border-transparent pr-4 cursor-pointer"
            >
              <svg
                class="w-7 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="{2}"
              >
                <!-- 不用cdn 因爲svg -->
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              about</a
            >
          </li>
        </nav>
      </div>
      <!-- section 2/3 -->
      <section
        class="md:col-span-2 bg-blue-200 pt-[94px] ; pr-[calc(100vw*0.05)] md:pr-[calc(100vw*0.1)] pl-[calc(100vw*0.05)] md:pl-[60px]"
      >
        <!-- <div class="w-[90%] md:w-[80%] mx-auto"> -->
        <h2 class="text-7xl text-blue-900 pb-5 font-bold">
          recipes<small class="block text-base pt-3">for ninjas</small>
        </h2>
        <!-- latest -->
        <div class="latest">
          <h4 class="border-b border-gray-300 pb-2 text-xl text-blue-600">
            latest recipes
          </h4>
          <!-- card內容 -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="card shadow-3xl relative">
              <div>
                <span
                  class="bg-blue-300 py-3 px-5 text-white text-lg absolute top-[-5px] uppercase left-[-5px]"
                  >hot</span
                >
                <div class="image overflow-hidden rounded">
                  <img
                    src="https://picsum.photos/500/400?random=6"
                    class="w-full sm:h-64 h-36 object-cover"
                  />
                </div>
                <div class="txt p-3">
                  <span class="font-bold text-3xl block pb-3 text-blue-900"
                    >bean cilli stew</span
                  >
                  <span>recipe by mario</span>
                </div>
              </div>
            </div>
            <div class="card shadow-3xl relative">
              <div>
                <span
                  class="bg-blue-300 py-3 px-5 text-white text-lg absolute top-[-5px] uppercase left-[-5px]"
                  >hot</span
                >
                <div class="image overflow-hidden rounded">
                  <img
                    src="https://picsum.photos/500/400?random=1"
                    class="w-full sm:h-64 h-36 object-cover"
                  />
                </div>
                <div class="txt p-3">
                  <span class="font-bold text-3xl block pb-3 text-blue-900"
                    >bean cilli stew</span
                  >
                  <span>recipe by mario</span>
                </div>
              </div>
            </div>
            <div class="card shadow-3xl relative">
              <div>
                <span
                  class="bg-blue-300 py-3 px-5 text-white text-lg absolute top-[-5px] uppercase left-[-5px]"
                  >hot</span
                >
                <div class="image overflow-hidden rounded">
                  <img
                    src="https://picsum.photos/500/400?random=2"
                    class="w-full sm:h-64 h-36 object-cover"
                  />
                </div>
                <div class="txt p-3">
                  <span class="font-bold text-3xl block pb-3 text-blue-900"
                    >bean cilli stew</span
                  >
                  <span>recipe by mario</span>
                </div>
              </div>
            </div>
            <div class="card shadow-3xl relative">
              <div>
                <span
                  class="bg-blue-300 py-3 px-5 text-white text-lg absolute top-[-5px] uppercase left-[-5px]"
                  >hot</span
                >
                <div class="image overflow-hidden rounded">
                  <img
                    src="https://picsum.photos/500/400?random=8"
                    class="w-full sm:h-64 h-36 object-cover"
                  />
                </div>
                <div class="txt p-3">
                  <span class="font-bold text-3xl block pb-3 text-blue-900"
                    >bean cilli stew</span
                  >
                  <span>recipe by mario</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- pupular -->
        <div class="pupular">
          <h4 class="border-b border-gray-300 pb-2 text-xl text-blue-600">
            latest recipes
          </h4>
          <!-- card內容 -->
          <div>
            <img src="https://picsum.photos/500/400?random=2" />
            <div class="txt">
              <span>bean cilli stew</span>
              <span>recipe by mario</span>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="border-blue-500 rounded border-4 py-2 px-4 capitalize bg-blue-400 hover:tracking-wider hover:scale-125 hover:bg-opacity-50 duration-1000 transition ease-linear"
          >
            load more
          </button>
        </div>
        <!-- </div> -->
      </section>
    </div>
    <!-- </div> -->
  </div>
  <DarkMode></DarkMode>
</template>


<script>
import DarkMode from '@/components/DarkMode.vue'

export default {
  data() {
    return {
      listActiveItem: "home",
      showNav: false,
      title: 'title'
    };
  },
  components: {
    DarkMode
  }
};
</script>

<!-- 一定要寫lang + 寫在index.html無效 -->
<style lang="scss">
@import '@/assets/stylesheets/all.scss';

/* active命名 */
.border-transparent.active {
  @apply border-r-cyan-800;
}
.show-nav.active {
  @apply block;
}

</style>
