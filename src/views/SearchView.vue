<template>
  <SearchCom v-model="searchText"></SearchCom>
  {{searchText}}
</template>

<script>
import SearchCom from "../components/SearchCom.vue";
import { ref } from "vue";

export default {
  components: {
    SearchCom,
  },
  setup() {
    let searchText = ref("");
    // const search = (() => {
    //     console.log('dd')
    // })

    // watch(searchText, (newVal) => {
    //   if (newVal) {
    //     search();
    //   }
    // });

    return {
      searchText,
    };
  },
};
</script>
