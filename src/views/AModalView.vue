<template>
  <bodyFooterModal ref="bodyFooterModal"></bodyFooterModal>
</template>

<script>
import { onMounted, ref } from "vue";
import bodyFooterModal from '../components/modal/bodyFooterModal.vue'
import pushMessageState from '../methods/pushMessageState'

export default {
  components: {
    bodyFooterModal,
  },
  setup() {
    const bodyFooterModal = ref(null);
    const openBodyFooterModal = () => {
      bodyFooterModal.value.openModal();
    };
    onMounted(() => {
        // 成功=> pushMessageState=> emmit到bodyfootermodal
        // $httpMessageState(true, '新title')
        pushMessageState(true, '來自modal view new title')
        //  {{ $t('title') }}
        // 之後改視窗打開後再觸發
    })

    return {
      bodyFooterModal,
      openBodyFooterModal
    };
  },
};
</script>
