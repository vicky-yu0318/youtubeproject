<template>
  <div></div>
  <!-- {{userData}}.. -->
</template>

<script>
// import { computed } from 'vue'

export default {
    props: ['userData'],
    setup (props) {
        // props值不用再return 出來
        // 下拉選項改了不會即時監控的原因是value 非computed 非reactive
        console.log(props.userData);
        // const innerUserData = computed(() => {
        //     return props.userData
        // })

        return {
            // innerUserData
        }
    }
}
</script>