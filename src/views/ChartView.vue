<template>
    <!-- loading全域引進後  不需要import 可直接使用 -->
    <MainLoading :active="isLoading"></MainLoading>
    <LineChart></LineChart>
</template>

<script>
import LineChart from '../components/LineChart.vue'
import { ref } from 'vue'

export default {
    components: {
        LineChart
    },
    setup () {
      const isLoading = ref(false)

      return {
          isLoading
      }
    }
}
</script>