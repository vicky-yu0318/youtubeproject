<template>
    {{cutTxt}} <button @click="copyTxt" class="border-blue-400 border-[3px] py-2 px-5 rounded" >copy!</button>
</template>

<script>
import { ref } from 'vue'

export default {
    setup () {
        // 打api check後拿到優惠碼
        const coupon = '999'

        // 拿到推薦網址 (顯示於畫面)
        const cutTxt = ref('http://localhost:8080/#/buy/' + coupon)

        // 客戶可複製
        const copyTxt = (() => {
            try {
                navigator.clipboard.writeText(cutTxt.value)
            } catch (e) {
                console.log('error');
            }
        })

        return{
          cutTxt,
          copyTxt
        }
    }
}
</script>