<template>
  <div class="index">
    <CoinSwitch></CoinSwitch>
    <header class=" h-[76px] shadow-md fixed right-0 left-0 z-50 bg-white">
      <div class="w-[97.5%]  mx-auto flex items-center justify-between h-full">
        <!-- main-image -->
        <div class=" flex  items-center">
          <a href="" class="mr-8">
            <h1 class="sr-only">wo heng</h1>
            <img src="@/assets/images/header/ic_logo_title.svg" alt="">
          </a>
          <nav class="space-x-8">
            <!-- <a href="" v-for="item in headerLink" :key="item">{{item}}</a> -->
            <a href="">市場行情</a>
            <a href="">場外交易</a>

          </nav>
        </div>
        <!-- main- menu  -->
        <div class="flex items-center">
          <div class="buttons space-x-6">
                <button class="py-[9px] px-[37px] bg-white text-custcolor-main rounded-[3px] 
                border border-custcolor-main">登入</button>
          <button class="py-[9px] px-[16px] bg-custcolor-main text-white rounded-[3px] ">成為新會員</button>
          </div>
          <!-- icons -->
          <div class="flex space-x-6 h-full ml-6
          before:content-[''] before:bg-gray-200 before:w-[1px] before:block before:mr-6
          after:content-[''] after:bg-gray-200  after:w-[1px] after:block after:ml-6">
            <a href=""><img src="@/assets/images/header/ic_notifications.svg" alt=""></a>
            <a href=""><img src="@/assets/images/header/ic_downloadapp.svg" alt=""></a>
            <a href=""><img src="@/assets/images/header/ic_help.svg" alt=""></a>
            <a href=""><img src="@/assets/images/header/ic_mode_night.svg" alt=""></a>
          </div>
          <!-- langs -->
          <div class="ml-6 space-x-6 text-custcolor-primary">
            <button class="">繁體中文</button>
            <button class="uppercase">twd</button>
          </div>
        </div>
      </div>
    </header>
    <section class="py-[10%]">
      <div class="w-[92%]  mx-auto flex   ">
        <!-- title -->
        <div class="w-[60%]">
          <div class="w-[87%]">
            <!-- up -->
            <div class="txt after:content-[''] after:w-full after:h-[1px]
            after:bg-custcolor-gray after:block after:opacity-[0.25]">
              <h2 class="text-[40px] text-custcolor-primary pb-3">在當地購買/出售您的加密貨幣</h2>
              <p class="custcolor-[light-primary] text-[20px] text-custcolor-light-primary pb-9">C2C交易是一個自由市場，讓人們在任何國家中，以自己的方式跟其他人直接出售或販賣加密貨幣。</p>
              <div class="pb-8">
                <button class="py-[9px] px-[24px]  bg-custcolor-secondary text-white rounded">立即註冊</button>
              </div>
            </div>
            <!-- down -->
            <div class="images  pt-8 after:content-[''] after:w-full after:h-[1px] after:mt-8
            after:bg-custcolor-gray after:block after:opacity-[0.25]
            ">
              <div class="flex gap-5 justify-between">
                <div class="w-full"><img src="@/assets/images/home/img_example1.png" alt=""></div>
                <div class="w-full"><img src="@/assets/images/home/img_example2.png" alt=""></div>
              </div>
            </div>
            <div class=" flex justify-between items-center pt-2 ">
              <div class="flex items-center">
                <i class="fa-brands fa-affiliatetheme text-custcolor-main pr-3"></i>
                <span class="text-custcolor-primary">將新增ALICE/BIDR、ARPA/BUSD、AVAX/BIDR、LSK/BUSD交易對</span>
              </div>
              <div class="fa-solid fa-angle-right text-custcolor-light-primary"></div>
            </div>
          </div>
        </div>
        <!-- 圖表 -->
        <div class="w-[40%] bg-blue-300">
          <div class="card-group grid grid-cols-2">
            <div class="card border-[1px] border-gray-200 rounded-[6px] p-6"
             v-for="item in currencyData" :key="item">
             <img :src="item.image" alt="">
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import CoinSwitch from '../components/CoinSwitch.vue'

export default {
  data () {
    return {
      // headerLink: ['市場行情','場外交易']
      currencyData: [
        {
          image: require('@/assets/images/home/ic_coin_btc.png'),
          cate:'',
          currency: '',
          dollor: '',
          chartImg: '',
          rate_of_return: '',
          amount: ''
        }

      ]
    }
  },
  components: {
    CoinSwitch
  }
}
</script>