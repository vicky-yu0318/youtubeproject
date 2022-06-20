<template>
  <!-- v-model綁定store值，加錢字號 -->
  <div class="">
      <!-- styleDark是下方選告變數，不需加字雙引號 -->
      <!-- v-model必須綁，否則commit完 最新資料不會秀在select上 -->
    <select class="" :class="[isDark === 'dark'? styleDark: '']" v-model="$store.state.coin"
   >
      <!-- 可將選項寫於元件內 -->
      <!-- select預設文字，不出現在下拉選項中 -->
      <option value="" disabled selected hidden>請選擇幣別</option>
      <option v-for="item in coinOptions" :key="item.value">{{ item.text }}</option>
    </select>
    <div>store的 幣別資料{{ $store.state.coin }}</div>
    <div>   store的 夜淺模式：{{ isDark }}</div>
 
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    // store進來目的=> 拿是否暗黑模式全域資料(加computed)
    const store = useStore();
    const coinOptions = reactive([
      {
        text: "USD",
        value: "USD",
      },
      {
        text: "TWD",
        value: "TWD",
      },
      {
        text: "CNY",
        value: "CNY",
      },
    ]);

    // 全域store資料若是深色模式  要給樣式
    let isDark = computed(() => store.state.isDark);
    const styleDark = ['bg-black', 'text-white']

    // 打到store去更改幣別 (宣告一個函式)
    // 不用打dispatch 直接commit到mutation 改狀態
    const setCoin = (coin) => {
        store.commit('SET_COIN', coin)
    }

    return {
      coinOptions,
      isDark,
      styleDark,
      setCoin
    };
  },
};
</script>
<!-- // import VueCompositionAPI from '@vue/composition-api'
// Vue.use(VueCompositionAPI)
// vue3不用再 main.js手動引入composition api
//  =option api
// import store from '@/store/index'
//  =composition api -->

<!-- // 以下是option api寫法
  // data () {
  //     return {
  //         locales: store.state.locales
  //     }
  // }

  // 以下是composition api寫法
  // const vuexMSG = computed({
  //   get () {
  //     return store.state.message
  //   },
  //   set (val) {
  //     store.commit('UPDATE_MSG', val)
  //   }
  // }) -->

<!--   
  // const coinOptions =  computed(() => store.state.locales);
    // const currentLocale = computed(() => store.state.locale)

    // 以往vuex option api 寫法
    // computed: {
    // hello () {
    //     return this.$store.state.hello
    // },
    // products () {
    //     return this.$store.state.products
    // }
    // },
    // methods: {
    //   getSingleProduct (productId) {
    //     this.productId = productId
    //   }
    // },
    // mounted () {
    //   this.$store.dispatch('getProducts')
    // }

    // vuex option api   使用store值做v-model綁定另一種方式 函式改物件方式
    // vuexMsg: {
    //    get () {
    //     return this.$store.state.msg
    //    },
    //    set (val) {
    //      this.$store.state = val（但vuex不能這樣寫 無法觸發dev tool)
    //      改直接於mutation 橫過中線(不需走action因為沒有邏輯），改view
    //      直接寫commit （可直接改動dev tool）
    //      this.$store.commit('UPDATE_MSG', val)
    //    }
    //  }

    
    // 筆記
    //  this.$emit('get-country', this.select);
    // 載npm I moment
    // computed: {
    //   timestamp() {
    //     return moment(this.dataDate).format('MMM Do YYYY, hh:mm:ss');

    //  未format
    // 回傳一個物件 {Wed Jun 01 2022 20:06:54 GMT+0800 (台北標準時間)
    // "YYYY-MM-DDTHH:mm:ss.SSSSZ"
    // "2022-06-01T12:06:54.292Z"}

    //     M的數量幾個就顯示幾個數字 o=st
    //   }
    // } -->


  <!-- :to="`/product/${product.id}`" -->
  <!-- 如果不透過以上方式到該頁才拿到id，  記得！！於router加props 還有這加入params -->
  <!-- <router-link :to="{name: 'product', params: {id: `${product.id}` }}">單一產品內容~~</router-link></li> -->
  <!-- {
      path: '/product/:id',
      name: 'product',
      // 筆記
      props: true,
      component: () => import('../views/SingleProduct.vue')
    } -->
