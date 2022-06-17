<template>
    <!-- v-model綁定加錢字號 -->
   <select class="bg-white" v-model="$store.state.locale">
      <option v-for="item in localesOption" :key="item"
      >{{item}}</option>
    </select>
    現在選的（store存的）：{{currentLocale}}

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
</template>

<script>
// import VueCompositionAPI from '@vue/composition-api'
// Vue.use(VueCompositionAPI)
// vue3不用再 main.js手動引入composition api
//  =option api
// import store from '@/store/index'

//  =composition api
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
    // 以下是option api寫法
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
    // })
    setup () {
        const store = useStore()
        const hello = ref('hello')
        const localesOption =  computed(() => store.state.locales);
        const currentLocale = computed(() => store.state.locale)

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

        return {
            hello,
            localesOption,
            currentLocale
        }

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
        // }
    }
}

</script>