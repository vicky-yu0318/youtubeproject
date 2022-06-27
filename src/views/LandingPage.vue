<template>
  <!-- 深淺色模式 -->
  <div
    class="mx-auto text-custcolor-secondary-black dark:text-white dark:bg-custcolor-secondary-black"
  >
    <header class="bg-amber-400 mx-auto relative">
      <!-- 設定最大寬  小於後自適應(可給padding )-->
      <!-- class若為container 裡面斷點寫死，外框padding自適應(寫同行) -->
      <!-- 不想讓文字一起透明，可以給rgba-->
      <div
        class="max-w-[1200px] px-[5%] mx-auto py-1 flex items-center justify-between h-[100%] bg-amber-400/[.04]"
      >
        <!-- 圖片這塊會依照螢幕寬不同而變動 -->
        <!-- logo -->
        <a
          href="javascript:;"
          aria-label="go to homepage"
          class="focus-visible:ring-4 focus:outline-none lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        >
          <img src="https://picsum.photos/150/50" />
          <h1 class="sr-only">point</h1>
        </a>
        <!-- hameburger -->
        <button @click="aa">
          <!-- @click="showMainNav = !showMainNav" -->
          <i
            class="fa-solid fa-bars text-[30px] lg:hidden hover:text-blue-300 hover:opacity-50 transition duration-1000 ease-out"
          ></i>
        </button>
        <!-- menubar -->
        <!-- 可用動態class控制  或  觸發toggle控制hidden class出現消失 -->
        <nav
          class="hidden  flex-col items-center absolute top-[100%] left-0 right-0 z-40 bg-amber-700 text-center p-5 text-xl shadow-xl text-white dark:text-black lg:flex-row lg:w-full lg:static lg:bg-transparent lg:shadow-none showMainNav animate-appear"
          :class="{ active: showMainNav }"
          ref="refnavbar"
        >
          <!-- ar-auto between擇一使用 記得加px 是最保險 -->
          <a href="" class="py-4 px-6">home</a>
          <a href="" class="py-4 px-6">about</a>
          <a href="" class="py-4 px-6 lg:mr-auto">qa</a>
          <a href="" class="py-4 px-6">latest</a>
          <button
            href=""
            class="py-2 px-8 border-[3px] border-white rounded mt-3 shadow-xl hover:shadow-none transition lg:mt-0"
          >
            login</button>
        </nav>
      </div>
    </header>
    <!-- home-banner -->
    <section class="pt-16 md:pt-24 lg:pt-48 relative ">
     <div class="bg-gradient-to-b from-amber-400 to-amber-600 absolute 
     inset-0
     bottom-8 md:bottom-24 lg:bottom-32
     -z-10
     ">
      </div>
      <!-- 圖片和漸層背景隔壁層 -->
       
        <div class="max-w-[1200px] mx-auto px-[5%] h-full">
          <div class="grid grid-rows-1 place-items-end">
            <!-- 右下角 -->
            <img src="../assets/images/couch.png" alt="" 
            class="row-start-1 row-end-2 col-start-1 col-end-2" >
            <img src="../assets/images/app.svg" alt="" 
            class="row-start-1 row-end-2 col-start-1 col-end-2  mx-auto
            w-40 sm:w-53 lg:w-72">
          </div>
        </div>
    
     </section>
   
   
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const showMainNav = ref(false);
    const refnavbar = ref();

    const aa = () => {
      // console.log(refnavbar.value);
      refnavbar.value.classList.toggle('hidden');
      refnavbar.value.classList.toggle('flex');
    };

    onMounted(() => {
    });

    return {
      showMainNav,
      aa,
      refnavbar,
    };
  },
};
</script>

<style>
.showMainNav.active {
  right: 0;
  transition: all 0.3s linear;
}
</style>
